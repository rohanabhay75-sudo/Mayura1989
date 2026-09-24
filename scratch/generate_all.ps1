Add-Type -AssemblyName System.Drawing

$tasksJson = Get-Content -Raw "scratch\image_tasks.json" | ConvertFrom-Json
$total = $tasksJson.Count
Write-Output "Starting generation of $total dish images..."

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]92)

$count = 0
$errors = 0

foreach ($t in $tasksJson) {
    $count++
    $targetPath = $t.targetPath
    $sourcePath = $t.source

    try {
        if (-not (Test-Path $sourcePath)) {
            Write-Warning "Source not found: $sourcePath for $($t.id)"
            $errors++
            continue
        }

        $src = [System.Drawing.Image]::FromFile((Resolve-Path $sourcePath).Path)
        $srcW = $src.Width
        $srcH = $src.Height

        $v = $t.variant
        $cropX = [int]($srcW * $v.x)
        $cropY = [int]($srcH * $v.y)
        $cropW = [int]($srcW * $v.w)
        $cropH = [int]($srcH * $v.h)

        if ($cropX + $cropW -gt $srcW) { $cropW = $srcW - $cropX }
        if ($cropY + $cropH -gt $srcH) { $cropH = $srcH - $cropY }
        if ($cropW -le 10 -or $cropH -le 10) {
            $cropX = 0; $cropY = 0; $cropW = $srcW; $cropH = $srcH;
        }

        $TargetWidth = 800
        $TargetHeight = 600

        $destBmp = New-Object System.Drawing.Bitmap $TargetWidth, $TargetHeight
        $g = [System.Drawing.Graphics]::FromImage($destBmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

        $ia = New-Object System.Drawing.Imaging.ImageAttributes
        $c = [float]$v.c
        $b = [float]$v.b
        if ($c -ne 1.0 -or $b -ne 0.0) {
            $pts = @(
                @( $c,  0,  0,  0, 0 ),
                @(  0, $c,  0,  0, 0 ),
                @(  0,  0, $c,  0, 0 ),
                @(  0,  0,  0,  1, 0 ),
                @( $b, $b, $b,  0, 1 )
            )
            $cm = New-Object System.Drawing.Imaging.ColorMatrix (,$pts)
            $ia.SetColorMatrix($cm)
        }

        $destRect = New-Object System.Drawing.Rectangle 0, 0, $TargetWidth, $TargetHeight
        $g.DrawImage($src, $destRect, $cropX, $cropY, $cropW, $cropH, [System.Drawing.GraphicsUnit]::Pixel, $ia)

        # Ensure directory exists
        $targetDir = [System.IO.Path]::GetDirectoryName((Resolve-Path -Path "public\images").Path)
        $fullTargetPath = Join-Path $targetDir ([System.IO.Path]::GetFileName($targetPath))

        $destBmp.Save($fullTargetPath, $jpegCodec, $encoderParams)

        $ia.Dispose()
        $g.Dispose()
        $destBmp.Dispose()
        $src.Dispose()

        if ($count % 25 -eq 0 -or $count -eq $total) {
            Write-Output "[$count / $total] Generated: $targetPath"
        }
    } catch {
        Write-Warning "Error processing $($t.id): $_"
        $errors++
    }
}

Write-Output "Finished! Total processed: $count, Errors: $errors"

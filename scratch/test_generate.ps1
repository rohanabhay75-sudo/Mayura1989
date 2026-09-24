Add-Type -AssemblyName System.Drawing

function Generate-DishImage {
    param(
        [string]$SourcePath,
        [string]$TargetPath,
        [float]$CropXRatio = 0.0,
        [float]$CropYRatio = 0.0,
        [float]$CropWidthRatio = 1.0,
        [float]$CropHeightRatio = 1.0,
        [float]$Brightness = 0.0,
        [float]$Contrast = 1.0,
        [int]$TargetWidth = 800,
        [int]$TargetHeight = 600
    )

    $src = [System.Drawing.Image]::FromFile((Resolve-Path $SourcePath).Path)
    
    $srcW = $src.Width
    $srcH = $src.Height

    $cropX = [int]($srcW * $CropXRatio)
    $cropY = [int]($srcH * $CropYRatio)
    $cropW = [int]($srcW * $CropWidthRatio)
    $cropH = [int]($srcH * $CropHeightRatio)

    if ($cropX + $cropW -gt $srcW) { $cropW = $srcW - $cropX }
    if ($cropY + $cropH -gt $srcH) { $cropH = $srcH - $cropY }

    $destBmp = New-Object System.Drawing.Bitmap $TargetWidth, $TargetHeight
    $g = [System.Drawing.Graphics]::FromImage($destBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $ia = New-Object System.Drawing.Imaging.ImageAttributes
    if ($Brightness -ne 0.0 -or $Contrast -ne 1.0) {
        $c = $Contrast
        $b = $Brightness
        # ColorMatrix 5x5
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
    $srcRect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH

    $g.DrawImage($src, $destRect, $cropX, $cropY, $cropW, $cropH, [System.Drawing.GraphicsUnit]::Pixel, $ia)

    # Save as JPEG
    $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]92)

    $destBmp.Save($TargetPath, $jpegCodec, $encoderParams)

    $ia.Dispose()
    $g.Dispose()
    $destBmp.Dispose()
    $src.Dispose()

    Write-Output "Generated: $TargetPath ($TargetWidth x $TargetHeight)"
}

# Test run
Generate-DishImage -SourcePath "public\images\dish-biryani.jpg" -TargetPath "public\images\test-dish-sample.jpg" -CropXRatio 0.1 -CropYRatio 0.1 -CropWidthRatio 0.8 -CropHeightRatio 0.8 -Contrast 1.05

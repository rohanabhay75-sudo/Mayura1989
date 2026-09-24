Add-Type -AssemblyName System.Drawing

$files = @(
    'public\images\andhra-spread.jpg',
    'public\images\dish-biryani.jpg',
    'public\images\dish-tandoori.jpg',
    'public\images\dish-chilly-chicken.jpg'
)

foreach ($f in $files) {
    if (Test-Path $f) {
        $img = [System.Drawing.Image]::FromFile((Resolve-Path $f).Path)
        Write-Output "$f : Width=$($img.Width), Height=$($img.Height)"
        $img.Dispose()
    }
}

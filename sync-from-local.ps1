$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$courseRoot = Split-Path -Parent $repoRoot

$mappings = @(
    @{ Source = Join-Path $courseRoot 'pset1\output\web'; Destination = Join-Path $repoRoot 'pset1' },
    @{ Source = Join-Path $courseRoot 'pset1\output\web-solutions'; Destination = Join-Path $repoRoot 'pset1-solutions' },
    @{ Source = Join-Path $courseRoot 'pset2\output\web'; Destination = Join-Path $repoRoot 'pset2' },
    @{ Source = Join-Path $courseRoot 'pset2\output\web-solutions'; Destination = Join-Path $repoRoot 'pset2-solutions' },
    @{ Source = Join-Path $courseRoot 'pset3\output\web'; Destination = Join-Path $repoRoot 'pset3' },
    @{ Source = Join-Path $courseRoot 'pset3\output\web-solutions'; Destination = Join-Path $repoRoot 'pset3-solutions' },
    @{ Source = Join-Path $courseRoot 'pset4\output\web'; Destination = Join-Path $repoRoot 'pset4' },
    @{ Source = Join-Path $courseRoot 'pset4\output\web-solutions'; Destination = Join-Path $repoRoot 'pset4-solutions' },
    @{ Source = Join-Path $courseRoot 'pset5\output\web'; Destination = Join-Path $repoRoot 'pset5' },
    @{ Source = Join-Path $courseRoot 'pset5\output\web-solutions'; Destination = Join-Path $repoRoot 'pset5-solutions' }
)

foreach ($mapping in $mappings) {
    if (-not (Test-Path -LiteralPath $mapping.Source)) {
        throw "Missing source folder: $($mapping.Source)"
    }

    if (Test-Path -LiteralPath $mapping.Destination) {
        Get-ChildItem -LiteralPath $mapping.Destination -Force | Remove-Item -Recurse -Force
    } else {
        New-Item -ItemType Directory -Path $mapping.Destination | Out-Null
    }

    Copy-Item -Path (Join-Path $mapping.Source '*') -Destination $mapping.Destination -Recurse -Force
    Write-Host "Synced $($mapping.Source) -> $($mapping.Destination)"
}

Write-Host "Done."

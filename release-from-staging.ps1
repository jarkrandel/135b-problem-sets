param(
    [Parameter(Mandatory = $true)]
    [ValidateRange(1, 99)]
    [int]$SetNumber,

    [switch]$Solutions,

    [switch]$Commit,

    [string]$Message
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$courseRoot = Split-Path -Parent $repoRoot
$stagingRoot = Join-Path $courseRoot '135b-problem-sets-staging'

$folderName = if ($Solutions) { "pset$SetNumber-solutions" } else { "pset$SetNumber" }
$source = Join-Path $stagingRoot $folderName
$destination = Join-Path $repoRoot $folderName

if (-not (Test-Path -LiteralPath $source)) {
    throw "Missing staging folder: $source"
}

if (Test-Path -LiteralPath $destination) {
    Get-ChildItem -LiteralPath $destination -Force | Remove-Item -Recurse -Force
} else {
    New-Item -ItemType Directory -Path $destination | Out-Null
}

Copy-Item -Path (Join-Path $source '*') -Destination $destination -Recurse -Force
Write-Host "Released $folderName from staging."

if ($Commit) {
    git -C $repoRoot add -- $folderName

    if (-not $Message) {
        $Message = if ($Solutions) {
            "Release solutions for pset$SetNumber"
        } else {
            "Release pset$SetNumber"
        }
    }

    git -C $repoRoot commit -m $Message
    Write-Host "Committed release with message: $Message"
} elseif ($Message) {
    Write-Warning "Ignoring -Message because -Commit was not provided."
}

Write-Host "Done."

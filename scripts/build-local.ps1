$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$bundleRoot = Join-Path $repoRoot "local\bundle\ruby\3.3.0"
$jekyll = Join-Path $bundleRoot "gems\jekyll-3.10.0\exe\jekyll"

if (-not (Test-Path -LiteralPath $jekyll)) {
  throw "Local Jekyll was not found. Run bundle install first, or install this repo's Ruby gems into local\bundle."
}

$env:GEM_HOME = $bundleRoot
$env:GEM_PATH = "$bundleRoot;$env:USERPROFILE\.local\share\gem\ruby\3.3.0"
$env:JEKYLL_ENV = "development"

& ruby $jekyll build

# Script para enviar o projeto ao GitHub
# Execute no terminal: .\enviar-para-github.ps1
# (certifique-se de estar na pasta adm-journey)

$repoUrl = "https://github.com/JaoVitorz/Projeto-Jornada-ADM-UFSCar-Sorocaba.git"

if (-not (Test-Path .git)) {
    Write-Host "Inicializando Git..." -ForegroundColor Cyan
    git init
}

$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host "Adicionando remote origin..." -ForegroundColor Cyan
    git remote add origin $repoUrl
} else {
    Write-Host "Remote já configurado: $remote" -ForegroundColor Yellow
}

Write-Host "Adicionando arquivos..." -ForegroundColor Cyan
git add .

Write-Host "Criando commit..." -ForegroundColor Cyan
git commit -m "Adiciona projeto Jornada ADM - plataforma para estudantes UFSCar Sorocaba" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Nenhuma alteração para commitar (ou já existe commit)." -ForegroundColor Yellow
}

git branch -M main

Write-Host "Fazendo pull do README existente no GitHub (se houver)..." -ForegroundColor Cyan
git pull origin main --allow-unrelated-histories --no-edit 2>$null

Write-Host "Enviando para o GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host "Concluído!" -ForegroundColor Green

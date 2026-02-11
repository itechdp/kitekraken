# Quick Start Script for N8N Workflow Manager

Write-Host "Starting N8N Workflow Manager Setup..." -ForegroundColor Cyan
Write-Host ""

# Check if backend dependencies are installed
if (-not (Test-Path "backend\node_modules")) {
    Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
    Set-Location backend
    npm install
    Set-Location ..
    Write-Host "Backend dependencies installed!" -ForegroundColor Green
} else {
    Write-Host "Backend dependencies already installed." -ForegroundColor Green
}

Write-Host ""
Write-Host "Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "To start the application:" -ForegroundColor Cyan
Write-Host "1. Start the backend server:" -ForegroundColor White
Write-Host "   Set-Location backend" -ForegroundColor Gray
Write-Host "   node server.js" -ForegroundColor Gray
Write-Host ""
Write-Host "2. In a new terminal, start the frontend:" -ForegroundColor White
Write-Host "   npm start" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Navigate to: http://localhost:3000/superadmin/workflows" -ForegroundColor White
Write-Host ""
Write-Host "Note: You must be logged in as an admin to access the workflow manager." -ForegroundColor Yellow

@echo off
echo ========================================
echo Installing dependencies for Tanmay Portfolio
echo ========================================
cd /d "c:\Tanmay\Resume\stitch (1)\tanmay-portfolio"

echo.
echo Installing npm packages...
call npm install

echo.
echo ========================================
echo Starting development server...
echo ========================================
call npm run dev

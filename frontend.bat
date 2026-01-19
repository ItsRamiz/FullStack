@echo off
title NextJS Frontend
echo Starting NextJS frontend...

cd frontend
IF ERRORLEVEL 1 (
    echo ERROR: Cannot find frontend directory
    pause
    exit /b
)

npx next dev -p 5000

echo Frontend process exited.
pause

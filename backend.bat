@echo off
title NestJS Backend
echo Starting NestJS backend...

cd api
IF ERRORLEVEL 1 (
    echo ERROR: Cannot find frontend directory
    pause
    exit /b
)

npm run start:dev

echo Backend process exited.
pause

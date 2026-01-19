@echo off
title App Launcher
echo Launching application...

REM Start backend
start "NestJS Backend" cmd /k "%~dp0backend.bat"

REM Start frontend
start "NextJS Frontend" cmd /k "%~dp0frontend.bat"

echo.
echo All services started.
pause

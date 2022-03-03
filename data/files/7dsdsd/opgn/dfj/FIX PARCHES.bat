@echo off
::Config
set version=1.0
::Script
:start
cls
title FIX Parches WILLIAMS117 - v%version%
echo.
echo Hola %username%. Solo utilizar si tiene
echo un problema a la hora de instalar uno de los parches
echo -------------------------------------------
echo Eliga la opcion con la cual tenga problemas
echo -------------------------------------------
echo 1. Standalone Patch - L4D
echo 2. Standalone Patch - L4D2
echo 3. SSE (LAN) Beta - L4D
echo 4. SSE (LAN) Beta - L4D2
echo 5. Salir
echo.
echo.
set /p do=
if "%do%"=="1" goto L4DSP
if "%do%"=="2" goto L4D2SP
if "%do%"=="3" goto L4DSSE
if "%do%"=="4" goto L4D2SSE
if "%do%"=="5" exit
goto start
:L4DSP
cls
REG DELETE HKCU\Software\W117GAMER /v SPVersionL4D /f
pause
goto start
:L4D2SP
cls
REG DELETE HKCU\Software\W117GAMER /v SPVersionL4D2 /f
pause
goto start
:L4DSSE
cls
REG DELETE HKCU\Software\W117GAMER /v SSEVersionL4D /f
pause
goto start
:L4D2SSE
cls
REG DELETE HKCU\Software\W117GAMER /v SSEVersionL4D2 /f
pause
goto start
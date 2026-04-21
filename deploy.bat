@echo off
setlocal

set /p MSG=Commit message: 
if "%MSG%"=="" set MSG=update site

git add .
git diff --cached --quiet
if errorlevel 1 (
    git commit -m "%MSG%"
    if errorlevel 1 exit /b 1
    git push
    if errorlevel 1 exit /b 1
) else (
    echo No source changes to commit.
)

call npm run build
if errorlevel 1 exit /b 1

for /f "delims=" %%r in ('git config --get remote.origin.url') do set REPO=%%r

pushd dist
if errorlevel 1 exit /b 1

if exist .git rmdir /s /q .git

git init
if errorlevel 1 exit /b 1

git add -A
if errorlevel 1 exit /b 1

git commit -m "deploy"
if errorlevel 1 exit /b 1

git branch -M gh-pages
if errorlevel 1 exit /b 1

git remote add origin %REPO%
if errorlevel 1 exit /b 1

git push -f origin gh-pages
if errorlevel 1 exit /b 1

popd

if exist dist\.git rmdir /s /q dist\.git

echo.
echo Live site updated.
endlocal
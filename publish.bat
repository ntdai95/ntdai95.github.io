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
    git push
)

echo.
echo Pushed to main. GitHub Actions will deploy the site.
endlocal
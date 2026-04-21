@echo off
setlocal

set /p msg=Commit message: 
if "%msg%"=="" set msg=update site

git add .
git diff --cached --quiet
if errorlevel 1 (
    git commit -m "%msg%"
    if errorlevel 1 exit /b 1
    git push
    if errorlevel 1 exit /b 1
) else (
    echo No source changes to commit.
)

npm run build
if errorlevel 1 exit /b 1

for /f %%i in ('git subtree split --prefix dist main') do git push origin %%i:gh-pages --force
if errorlevel 1 exit /b 1

echo.
echo Deploy complete.
endlocal
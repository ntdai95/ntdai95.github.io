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

for /f "delims=" %%r in ('git config --get remote.origin.url') do set REPO=%%r

pushd dist
if errorlevel 1 exit /b 1

if exist .git rmdir /s /q .git

git init
if errorlevel 1 exit /b 1

git checkout -b gh-pages
if errorlevel 1 exit /b 1

git add -A
if errorlevel 1 exit /b 1

git commit -m "deploy"
if errorlevel 1 exit /b 1

git remote add origin %REPO%
if errorlevel 1 exit /b 1

git push -f origin gh-pages
if errorlevel 1 exit /b 1

popd

echo.
echo Deploy complete.
endlocal
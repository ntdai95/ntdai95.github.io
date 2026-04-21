@echo off
git add .
git commit -m "update site"
git push
npm run build
for /f %%i in ('git subtree split --prefix dist main') do git push origin %%i:gh-pages --force
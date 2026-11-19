#!/bin/sh
# Netlify 배포용 폴더(dist)를 만들어요. 기존 파일은 건드리지 않고 복사만 해요.
# 실행: sh build-netlify.sh   → dist 폴더를 Netlify Drop에 끌어다 놓으면 끝
set -e
cd "$(dirname "$0")"
rm -rf dist
mkdir -p dist/icons
cp index.html styles.css app.js sw.js manifest.webmanifest dist/
cp icons/*.png dist/icons/
cp -R dream dist/dream
cat > dist/netlify.toml <<'TOML'
# 서비스워커와 매니페스트는 항상 최신 파일을 받도록 캐시하지 않아요.
[[headers]]
  for = "/sw.js"
  [headers.values]
    Cache-Control = "no-cache"
[[headers]]
  for = "/dream/sw.js"
  [headers.values]
    Cache-Control = "no-cache"
[[headers]]
  for = "/*.webmanifest"
  [headers.values]
    Content-Type = "application/manifest+json"
TOML
echo "완료: dist 폴더가 준비됐어요."

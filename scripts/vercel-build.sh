#!/usr/bin/env bash
set -euo pipefail

npm run build

rm -rf .vercel/output
mkdir -p .vercel/output/functions/__server.func .vercel/output/static

cp dist/config.json .vercel/output/config.json
cp -a dist/server/. .vercel/output/functions/__server.func/
cp -a dist/client/. .vercel/output/static/

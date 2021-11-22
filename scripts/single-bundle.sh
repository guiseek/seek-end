#!/bin/bash

for file in dist/apps/"$1"/*.js; do
  mkdir -p dist/single/"$1"
  cp dist/apps/"$1"/index.html dist/single/"$1"/
  cp dist/apps/"$1"/favicon.ico dist/single/"$1"/
  cp dist/apps/"$1"/styles.css dist/single/"$1"/
  cat "$file" >> dist/single/"$1"/bundle.js;
done
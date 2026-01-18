#!/bin/bash

# IndexNow URL Submission Script for DoomsdayClock.net
# This script notifies search engines about updated URLs

SITE_URL="https://doomsdayclock.net"
KEY="c486f332d56d45c5964ff728dd036499"
KEY_LOCATION="${SITE_URL}/${KEY}.txt"

# URLs to submit (add more as needed)
URLS=(
  "${SITE_URL}/"
)

# Submit to IndexNow API (shares with all IndexNow-enabled search engines)
for url in "${URLS[@]}"; do
  echo "Submitting: $url"
  curl -s -X GET "https://api.indexnow.org/indexnow?url=${url}&key=${KEY}&keyLocation=${KEY_LOCATION}"
  echo ""
done

echo "IndexNow submission complete!"

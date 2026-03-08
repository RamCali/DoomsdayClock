#!/bin/bash

# IndexNow URL Submission Script for DoomsdayClock.net
# This script notifies search engines about updated URLs

SITE_URL="https://www.doomsdayclock.net"
KEY="c486f332d56d45c5964ff728dd036499"
KEY_LOCATION="${SITE_URL}/${KEY}.txt"

# URLs to submit (add more as needed)
URLS=(
  "${SITE_URL}/"
  "${SITE_URL}/blog"
  "${SITE_URL}/blog/us-iran-crisis-doomsday-clock"
  "${SITE_URL}/forum"
)

# Submit to IndexNow API (shares with all IndexNow-enabled search engines)
for url in "${URLS[@]}"; do
  echo "Submitting: $url"
  curl -s -X GET "https://api.indexnow.org/indexnow?url=${url}&key=${KEY}&keyLocation=${KEY_LOCATION}"
  echo ""
done

echo "IndexNow submission complete!"

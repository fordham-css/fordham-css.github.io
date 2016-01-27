#!/usr/bin/env sh

# Download lists, unpack and filter, write to gzipped file 
curl -s https://www.iblocklist.com/lists.php \
| grep -A 2 Bluetack \
| sed -n "s/.*value='\(http:.*\)'.*/\1/p" \
| xargs wget -O - \
| gunzip \
| egrep -v '^#' \
| gzip - > bt_blocklist.gz

# MOVE TO OSX TRANSMISSION BLOCKLIST FOLDER
mv bt_blocklist.gz ~/Library/Application\ Support/Transmission/blocklists/
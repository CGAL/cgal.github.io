#!/bin/bash

set -e

for d in */; do
        pr=${d%/}
        STATE=$(GH_REPO=CGAL/cgal gh pr view "$pr" --json state --jq .state)
        if [ $? -ne 0 ]; then
                >&2 echo "ERROR: Failed to retrieve state for #$pr"
                continue
        fi

        echo "#$pr: $STATE"
        if [ "$STATE" != "OPEN" ]; then
                echo "-> Deleting ./$pr/"
                git rm -rf --quiet "./$pr" || >&2 echo "ERROR: Failed to delete ./$pr/" && exit 1
                sed -e "/$pr/d" -i index.html || >&2 echo "ERROR: Failed to remove $pr from index.html" && exit 1
        fi
done
cat index.html | grep -F "$(echo */ | tr ' ' '\n')" > index.html
git add index.html

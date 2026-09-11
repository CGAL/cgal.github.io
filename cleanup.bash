#!/bin/bash

set -e

error() {
        >&2 echo "ERROR: $1"
        exit 1
}

for d in */; do
        pr=${d%/}
        [ "$pr" = "main" ] && continue
        STATE=$(GH_REPO=CGAL/cgal gh pr view "$pr" --json state --jq .state)
        if [ $? -ne 0 ]; then
                >&2 echo "ERROR: Failed to retrieve state for #$pr"
                continue
        fi

        echo "#$pr: $STATE"
        if [ "$STATE" != "OPEN" ]; then
                echo "-> Deleting ./$pr/"
                git rm -rf --quiet "./$pr" || error "Failed to delete ./$pr/"
                sed -e "/$pr/d" -i index.html || error "Failed to remove $pr from index.html"
        fi
done
grep -F "$(echo */ | tr ' ' '\n')" index.html > index-new.html && mv index-new.html index.html
git add index.html

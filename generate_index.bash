#!/bin/bash

set -e

error() {
        >&2 echo "ERROR: $1"
        exit 1
}

for i in `ls */*/Manual/index.html`; do
  id=`echo $i| awk -F "/" '{print $1}'`
  v=`echo $i| awk -F "/" '{print $2}'`
  echo "<li><a href=https://cgal.github.io/$i>Manual for PR #$id ($v).</a></li>"
done > index.html


#!/bin/bash  
  
# Read the user input   
  
OUTPUT=$(git rev-parse --abbrev-ref HEAD)
echo "${OUTPUT}"


echo "What message you want to commit | If you dont want to write a message just type -> N"
read MESSAGE


if [[ $MESSAGE == "n" || $MESSAGE == "N" ]]; then
        MESSAGE="f"
fi

echo "${MESSAGE}"

git add .
git commit -m "$MESSAGE"
git push origin $OUTPUT
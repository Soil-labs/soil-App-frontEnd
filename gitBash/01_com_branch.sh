#!/bin/bash  
  
# Read the user input   
  
OUTPUT=$(git rev-parse --abbrev-ref HEAD)
echo "${OUTPUT}"


git add .
git commit -m "f"
git push origin $OUTPUT
OUTPUT=$(git rev-parse --abbrev-ref HEAD)
echo "${OUTPUT}"


echo "Enter the Branch that you want to Merge with "  
read git_branch  

git add .
git commit -m "before merge with master"
git push origin $OUTPUT

git fetch --all
# git pull --all

git merge origin/$git_branch

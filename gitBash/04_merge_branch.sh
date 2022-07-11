OUTPUT=$(git rev-parse --abbrev-ref HEAD)
echo "${OUTPUT}"


echo "Enter the Branch that you want to Merge with "  
read git_branch  


echo "What message you want to commit | If you dont want to write a message just type -> N"
read MESSAGE


if [[ $MESSAGE == "n" || $MESSAGE == "N" ]]; then
        MESSAGE="before merge with master"
fi

echo "${MESSAGE}"

git add .
git commit -m "$MESSAGE"
git push origin $OUTPUT

git fetch --all
# git pull --all

git merge origin/$git_branch

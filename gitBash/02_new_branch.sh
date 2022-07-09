
echo "Enter the New Name Branch "  
read git_branch  

git checkout -b $git_branch



echo "What message you want to commit | If you dont want to write a message just type -> N"
read MESSAGE


if [[ $MESSAGE == "n" || $MESSAGE == "N" ]]; then
        MESSAGE="New Branch Created"
fi

echo "${MESSAGE}"



git add .
git commit -m "$MESSAGE"
git push origin $git_branch
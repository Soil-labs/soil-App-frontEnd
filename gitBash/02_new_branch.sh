
echo "Enter the New Name Branch "  
read git_branch  

git checkout -b $git_branch

git add .
git commit -m "New Branch Created"
git push origin $git_branch
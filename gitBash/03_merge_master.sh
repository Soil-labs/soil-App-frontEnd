OUTPUT=$(git rev-parse --abbrev-ref HEAD)
echo "${OUTPUT}"

git add .
git commit -m "before merge with master"
git push origin $OUTPUT

git checkout master

git merge $OUTPUT

git add .
git commit -m "New Branch Created"
git push origin master

# git checkout $OUTPUT
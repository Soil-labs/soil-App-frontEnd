OUTPUT=$(git rev-parse --abbrev-ref HEAD)
echo "${OUTPUT}"


echo "What message you want to commit | If you dont want to write a message just type -> N"
read MESSAGE


if [[ $MESSAGE == "n" || $MESSAGE == "N" ]]; then
        MESSAGE="f"
fi

echo "${MESSAGE}"


echo "Type T -> for Test Deployment || Type D -> for Final Deployment Server "
read input
if [[ $input == "D" || $input == "d" ]]; then
        echo "Final Deployment Starts, good luck :D"
        heroku git:remote -a "dau-backend"
else
        echo "Test Deployment Starts"
        heroku git:remote -a "oasis-bot-test-deploy"
fi

#  --------- Git --------
git add .
git commit -m "$MESSAGE"
git push -f origin $OUTPUT
#  --------- Git --------


#  --------- Heroku --------
git add .
git commit -m "$MESSAGE"
git push -f heroku $OUTPUT:main
#  --------- Heroku --------


heroku logs --tail 



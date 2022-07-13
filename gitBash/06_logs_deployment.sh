


echo "Type T -> for Test Deployment || Type D -> for Final Deployment Server "
read input
if [[ $input == "D" || $input == "d" ]]; then
        echo "Final Deployment - check logs :D"
        heroku git:remote -a "dau-backend"
else
        echo "Test Deployment - check logs"
        heroku git:remote -a "oasis-bot-test-deploy"
fi


heroku logs --tail 



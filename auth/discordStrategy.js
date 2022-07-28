const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');


passport.use(new DiscordStrategy({
    clientID: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    callbackURL: process.env.REACT_APP_CLIENT_REDIRECT,
    scope: ['identify', 'guilds']
},(accessToken, refreshToken, profile,done) => {
    console.log('discord strategy');
    console.log("profile = " , profile)

    
}));
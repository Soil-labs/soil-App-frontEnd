import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

// https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
const scopes = ['identify', 'guilds'].join(' ')
// const scopes = ['identify'].join(' ')

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.REACT_APP_DISCORD_CLIENT_ID,
      clientSecret: process.env.REACT_APP_DISCORD_CLIENT_SECRET,
    //   authorization: {params: {scope: scopes}},
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
 
})
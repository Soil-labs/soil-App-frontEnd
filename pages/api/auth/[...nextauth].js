import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const scopes = ["identify"].join(" ");

// export default NextAuth({
//   providers: [
//     DiscordProvider({
//       clientId: process.env.DISCORD_CLIENT_ID,
//       clientSecret: process.env.DISCORD_CLIENT_SECRET,
//       authorization: { params: { scope: scopes } },
//     }),
//   ],
// });

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
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
    strategy: "jwt",
  },
});

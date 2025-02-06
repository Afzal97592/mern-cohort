import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Sign in with email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "afz@g.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log(username, password);
        const user = {
          name: "afzal",
          id: 1,
          username: "afz@g.com",
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: "Affff",
      clientSecret: "skjk",
    }),
    GitHubProvider({
      clientId: "scjnsknsk",
      clientSecret: "adjkk",
    }),
  ],
});

export { handler as GET, handler as POST };

import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile: async (profile) => {
        profile.image = "buyer" // oh boy, I guess this hack will have to do
        return profile
      },
    }),
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials.email)
        console.log(credentials.password)
        // TODO: use the email and password to login via firebase
        // return null if not found
        const user = {
          name: "J Smith",
          email: "jsmith@example.com",
          image: "vendor", // don't ask me
        }
        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    redirect: ({ url, baseUrl }) => {
      return baseUrl
    },
    session: async (session, user) => {
      console.log("data passed to object when signed in", user)
      console.log(session)
      //  user object there doesn't have all data passed before
      return session
    },
  },
  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
  // https://next-auth.js.org/v3/adapters/firebase
  pages: {
    signIn: "/customer-login",
    // signOut: "/auth/signout",
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/", // If set, new users will be directed here on first sign in
  },
})

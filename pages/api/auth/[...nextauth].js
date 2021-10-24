import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import db from "../../../utils/firebase"

export default NextAuth({
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
  },
  // adapter: FirebaseAdapter(db),
  pages: {
    signIn: "/customer-login",
    newUser: "/", // If set, new users will be directed here on first sign in
  },
})

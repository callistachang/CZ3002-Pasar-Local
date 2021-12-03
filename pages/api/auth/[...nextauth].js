import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { getOrCreateVendor, getVendorFromEmail } from "../../../utils/api"

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
        const user = await getOrCreateVendor(credentials)
        user.image = "vendor" // don't ask me
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
    async session(session, user) {
      const userData = await getVendorFromEmail(user.email)
      const updatedData = { ...session.user, ...userData }
      const finalData = { expires: session.expires, user: { ...updatedData } }
      return finalData
    },
  },
  pages: {
    signIn: "/customer-login",
    newUser: "/", // If set, new users will be directed here on first sign in
  },
})

import NextAuth, { AuthOptions } from "next-auth"

import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter, MongoDBAdapterOptions } from "@auth/mongodb-adapter"
import { client } from "@/lib/db"
import Credentials from "next-auth/providers/credentials"

let DatabaseOptions: MongoDBAdapterOptions = {
    databaseName: process.env.MONGODB_DATABASE as string
}

let DataBaseAdapter = MongoDBAdapter(client, DatabaseOptions)

let NextAuthOptions: AuthOptions = {
    debug: true,
    adapter: DataBaseAdapter,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        Credentials({
            name: 'Credentials',
            credentials: {
                username: {label: 'Username', type: 'text'},
                password: {label: 'Password', type: 'password'},
            },
            async authorize(credentials, req) {
                return null;
            }
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async jwt({ token, user, account, profile  }) {
            token.user = user
            return token
        },
        async session({ session, user, token } : { session: any, user: any, token: any}) {
            return session
        },
    },
    session: {
        strategy: 'jwt'
    },
}

const handler = NextAuth(NextAuthOptions)

export { handler as GET, handler as POST }
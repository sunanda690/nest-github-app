import NextAuth from 'next-auth'
import GithubProviders from 'next-auth/providers/github'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 3000,
    },
    adapter: PrismaAdapter(prisma),    
    providers: [
        GithubProviders({
            clientId: process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET,
            authorization : { 
                params : {
                scope : 'repo'
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token }) {
          token.userRole = "admin"
          return token
        },
    },
})
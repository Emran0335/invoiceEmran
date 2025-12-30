import { prisma } from "@/app/utils/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Nodemailer from "next-auth/providers/nodemailer";

export const { handlers, signIn, signOut, auth } = NextAuth({
  basePath: '/auth',
  adapter: PrismaAdapter(prisma),
  providers: [
    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.SMPT_FROM_EMAIL,
    }),
  ],
  pages: {
    verifyRequest: "/verify",
  },
});

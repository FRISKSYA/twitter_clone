import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

const handler = NextAuth({

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        async session({ session , token } : { session: Session; token: JWT }) {
            session.user.username = session.user.name
                .split(' ')
                .join('')
                .toLocaleLowerCase();
            session.user.uid = token.sub;
            return session;
        }
    }
});

export { handler as GET, handler as POST }
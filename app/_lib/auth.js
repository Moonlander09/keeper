import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./services";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // Check if the guest exists.
        const existingGuest = await getGuest(user.email);
  
        // If the guest does not exist, create it.
        if (!existingGuest) {
          await createGuest({ email: user.email });
        }
  
        return true; // Allow sign-in.
      } catch (error) {
        console.error("Sign-in error:", error);
        return false; // Deny sign-in.
      }
    
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guest = guest.id;
      return session;
    },
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);

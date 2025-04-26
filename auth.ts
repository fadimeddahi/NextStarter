import NextAuth from "next-auth";

const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    // Your providers here
  ],
  // Your config here
});

// Explicitly export what you need
export { auth, signIn, signOut , handlers };
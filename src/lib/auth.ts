import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const res = await fetch(`${process.env.EXTERNAL_API_BASE_URL}${process.env.EXTERNAL_API_AUTH_ENDPOINT}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });
          console.log('===process.env.EXTERNAL_API_BASE_URL', res.ok);

          if (!res.ok) {
            return null;
          }

          const data = await res.json();

          if (data && data?.data?.payload.token) {
            // Decode JWT payload without external dependencies
            const payload = JSON.parse(Buffer.from(data?.data?.payload.token.split('.')[1], 'base64').toString());

            return {
              id: payload.userId || payload.sub || String(Math.random()),
              email: payload.email || credentials.email,
              name: payload.name || 'User',
              accessToken: data?.data?.payload.token,
              refreshToken: null,
            };
          }

          return null;
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        return {
          ...token,
          //@ts-ignore
          accessToken: user?.accessToken,
          //@ts-ignore
          refreshToken: user?.refreshToken,
        };
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      //@ts-ignore
      session.accessToken = token.accessToken as string;
      //@ts-ignore
      session.user.id = token.sub as string;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
});

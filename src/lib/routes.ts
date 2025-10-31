export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  FAQ: "/faq",
  STORE: "/store",
  AUTH: {
    LOGIN: "/login",
    SIGNUP: "/signup",
    FORGOT_PASSWORD: "/forgot-password",
    CHANGE_PASSWORD: "/change-password",
  },
  USER: {
    LIST: "/users",
    POST: (slug: string) => `/blog/${slug}`,
    DETAIL: (id: string) => `/users/${id}`,
    CATEGORY: (category: string) => `/blog/category/${category}`,
  },
  PRODUCTS: {
    LIST: "/products",
    POST: (slug: string) => `/blog/${slug}`,
    DETAIL: (id: string) => `/products/${id}`,
    CATEGORY: (category: string) => `/blog/category/${category}`,
  },
  CONTACT: "/contact",
} as const;

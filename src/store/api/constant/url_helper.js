export const urls = {
  auth: {
    login: { url: "/auth/login", method: "POST" },
    logout: { url: "/auth/logout", method: "POST" },
    register: { url: "/auth/register", method: "POST" },
    refresh: { url: "/auth/refresh", method: "POST" },
    resetPassword: { url: "/auth/password/request-reset", method: "POST" },
    changePassword: { url: "/auth/password/reset", method: "POST" },
    verifyEmail: { url: "/auth/email/verify", method: "POST" },
    resendVerification: {
      url: "/auth/email/resend-verification",
      method: "POST",
    },
    validateToken: { url: "/auth/validate-token", method: "POST" },
    me: { url: "/auth/me", method: "GET" },
  },
  user: {
    updateProfile: { url: "/users/profile", method: "PUT" },
    updatePassword: { url: "/users/profile/password", method: "PUT" },
    updateVisibility: { url: "/users/profile/visibility", method: "PUT" },
    create: { url: "/users", method: "POST" },
    list: { url: "/users", method: "GET" },
    find: (userId) => ({ url: `/users/${userId}`, method: "GET" }),
    update: (userId) => ({
      url: `/users/${userId}`,
      method: "PUT",
    }),
    delete: (userId) => ({ url: `/users/${userId}`, method: "DELETE" }),
  },
  role: {
    create: { url: "/roles", method: "POST" },
    list: { url: "/roles", method: "GET" },
    find: { url: "/roles/{roleId}", method: "GET" },
    update: { url: "/roles/{roleId}", method: "PUT" },
    delete: { url: "/roles/{roleId}", method: "DELETE" },
    permission: {
      all: { url: "/permissions/all", method: "GET" },
      resource: { url: "/permissions/resource/{resource}", method: "GET" },
      list: { url: "/roles/{roleId}/permissions", method: "GET" },
      add: { url: "/roles/{roleId}/permissions", method: "POST" },
      remove: {
        url: "/roles/{roleId}/permissions/{permission}",
        method: "DELETE",
      },
    },
  },
  store: {
    create: { url: "/stores", method: "POST" },
    list: { url: "/stores", method: "GET" },
    get: { url: "/stores/slug/{slug}", method: "GET" },
    find: { url: "/stores/{storeId}", method: "GET" },
    update: { url: "/stores/{storeId}", method: "PUT" },
    delete: { url: "/stores/{storeId}", method: "DELETE" },
    changeStatus: { url: "/stores/{storeId}/status", method: "PATCH" },
  },
  product: {
    create: { url: "/products", method: "POST" },
    list: { url: "/products", method: "GET" },
    get: { url: "/products/slug/{slug}", method: "GET" },
    duplicate: { url: "/products/duplicate/{id}", method: "POST" },
    featured: { url: "/products/featured", method: "GET" },
    stats: { url: "/products/stats", method: "GET" },
    get: { url: "/products/slug/{slug}", method: "GET" },
    find: { url: "/products/{productId}", method: "GET" },
    update: { url: "/products/{productId}", method: "PUT" },
    delete: { url: "/products/{productId}", method: "DELETE" },
    changeStatus: { url: "/products/{productId}/status", method: "PATCH" },
    changeFeature: { url: "/products/{productId}/feature", method: "PATCH" },
  },
  catalogue: {
    category: {
      create: { url: "/catalogue/categories", method: "POST" },
      requests: {
        submit: { url: "/catalogue/categories/requests", method: "POST" },
        list: { url: "/catalogue/categories/requests", method: "GET" },
        find: { url: "/catalogue/categories/requests/{id}", method: "GET" },
        delete: {
          url: "/catalogue/categories/requests/{id}",
          method: "DELETE",
        },
        approve: {
          url: "/catalogue/categories/requests/{id}/approve",
          method: "PATCH",
        },
        reject: {
          url: "/catalogue/categories/requests/{id}/reject",
          method: "PATCH",
        },
      },
      list: { url: "/catalogue/categories", method: "GET" },
      root: { url: "/catalogue/categories/root", method: "GET" },
      children: {
        url: "/catalogue/categories/{categoryId}/children",
        method: "GET",
      },
      get: { url: "/catalogue/categories/slug/{slug}", method: "GET" },
      find: { url: "/catalogue/categories/{categoryId}", method: "GET" },
      update: { url: "/catalogue/categories/{categoryId}", method: "PUT" },
      delete: { url: "/catalogue/categories/{categoryId}", method: "DELETE" },
      changeStatus: {
        url: "/catalogue/categories/{categoryId}/status",
        method: "PATCH",
      },
    },
    attributes: {
      create: { url: "/catalogue/attributes", method: "POST" },
      requests: {
        submit: { url: "/catalogue/attributes/requests", method: "POST" },
        list: { url: "/catalogue/attributes/requests", method: "GET" },
        find: { url: "/catalogue/attributes/requests/{id}", method: "GET" },
        delete: {
          url: "/catalogue/attributes/requests/{id}",
          method: "DELETE",
        },
        approve: {
          url: "/catalogue/attributes/requests/{id}/approve",
          method: "PATCH",
        },
        reject: {
          url: "/catalogue/attributes/requests/{id}/reject",
          method: "PATCH",
        },
      },

      list: { url: "/catalogue/attributes", method: "GET" },
      get: { url: "/catalogue/attributes/slug/{slug}", method: "GET" },
      find: { url: "/catalogue/attributes/{attributeId}", method: "GET" },
      update: {
        url: "/catalogue/attributes/{attributeId}",
        method: "PUT",
      },
      delete: {
        url: "/catalogue/attributes/{attributeId}",
        method: "DELETE",
      },
      changeStatus: {
        url: "/catalogue/attributes/{attributeId}/status",
        method: "PATCH",
      },
    },
    values: {
      get: {
        url: "/catalogue/attributes/{attributeId}/values/{valueId}",
        method: "GET",
      },
      create: {
        url: "/catalogue/attributes/{attributeId}/values",
        method: "POST",
      },
      list: {
        url: "/catalogue/attributes/{attributeId}/values",
        method: "GET",
      },
      search: {
        url: "/catalogue/attributes/{attributeId}/values/search",
        method: "GET",
      },
      delete: {
        url: "/catalogue/attributes/values/{valueId}",
        method: "DELETE",
      },
      deactivate: {
        url: "/catalogue/attributes/values/{valueId}/deactivate",
        method: "PATCH",
      },
      reactivate: {
        url: "/catalogue/attributes/values/{valueId}/reactivate",
        method: "PATCH",
      },
    },
    variantTypes: {
      create: { url: "/catalogue/variant-types", method: "POST" },
      list: { url: "/catalogue/variant-types", method: "GET" },
      findByCategory: {
        url: "/catalogue/variant-types/category/{categoryId}",
        method: "GET",
      },
      find: { url: "/catalogue/variant-types/{variantTypeId}", method: "GET" },
      requests: {
        submit: { url: "/catalogue/variant-types/requests", method: "POST" },
        list: { url: "/catalogue/variant-types/requests", method: "GET" },
        find: {
          url: "/catalogue/variant-types/requests/{id}",
          method: "GET",
        },
        delete: {
          url: "/catalogue/variant-types/requests/{id}",
          method: "DELETE",
        },
        approve: {
          url: "/catalogue/variant-types/requests/{id}/approve",
          method: "PATCH",
        },
        reject: {
          url: "/catalogue/variant-types/requests/{id}/reject",
          method: "PATCH",
        },
      },
      values: {
        list: {
          url: "/catalogue/variant-types/{variantTypeId}/values",
          method: "GET",
        },
        create: {
          url: "/catalogue/variant-types/{variantTypeId}/values",
          method: "POST",
        },
        get: {
          url: "/catalogue/variant-types/{variantTypeId}/values/search",
          method: "GET",
        },
      },
      update: {
        url: "/catalogue/variant-types/{variantTypeId}",
        method: "PUT",
      },
      delete: {
        url: "/catalogue/variant-types/{variantTypeId}",
        method: "DELETE",
      },
      changeStatus: {
        url: "/catalogue/variant-types/{variantTypeId}/status",
        method: "PATCH",
      },
      deactivate: {
        url: "/catalogue/variant-types/{variantTypeId}/deactivate",
        method: "PATCH",
      },
      reactivate: {
        url: "/catalogue/variant-types/{variantTypeId}/reactivate",
        method: "PATCH",
      },
    },
  },
  media: {
    upload: { url: "/media/upload", method: "POST" },
    list: { url: "/media", method: "GET" },
    byUploader: { url: "/media/uploader/{uploadedBy}", method: "GET" },
    get: { url: "/media/{id}", method: "GET" },
    delete: { url: "/media/{id}", method: "DELETE" },
  },
};

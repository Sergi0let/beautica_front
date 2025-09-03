const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
    prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT,
    mail: {
      test: {
        host: process.env.EMAIL_HOST!,
        port: process.env.EMAIL_PORT!,
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
        from: process.env.EMAIL_FROM!,
      },
      prod: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
        from: process.env.EMAIL_FROM!,
        admin: process.env.EMAIL_ADMIN || "s.vashkevych@gmail.com", // Адміністраторська пошта
      },
    },
  },
};

export default config;

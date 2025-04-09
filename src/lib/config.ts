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
    },
  },
}

export default config

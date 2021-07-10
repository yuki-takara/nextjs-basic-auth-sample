module.exports = {
  reactStrictMode: true,
  env: {
    ENABLE_BASIC_AUTH: process.env.ENABLE_BASIC_AUTH,
    BASIC_AUTH_USERNAME: process.env.BASIC_AUTH_USERNAME || 'admin',
    BASIC_AUTH_PASSWORD: process.env.BASIC_AUTH_PASSWORD || 'admin',
  },
}

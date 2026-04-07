export default () => ({
  port: parseInt(process.env.PORT ?? '3000', 10) || 3000,
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/medflow',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'default-secret',
    expiration: process.env.JWT_EXPIRATION || '1h',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'default-refresh-secret',
    refreshExpiration: process.env.JWT_REFRESH_EXPIRATION || '7d',
  },
});

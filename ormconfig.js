console.log('processo', process.env.DATABASE_URL);
module.exports = {
   "type": "postgres",
   "URL":process.env.DATABASE_URL,
   "logging": false,
   "entities": [
      "dist/models/**/*.js"
   ],
   "migrations": [
      "dist/database/migration/**/*.js"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/models",
      "migrationsDir": "src/database/migration",
      "subscribersDir": "src/subscriber"
   }
}
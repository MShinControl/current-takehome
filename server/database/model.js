const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect(err => {
  if (err) return console.error('could not connect to postgres');
  console.log('Connected to postgresql');
});

module.exports = pool;

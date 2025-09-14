import pkg from 'pg'
const { Pool } = pkg

const useConnectionString = Boolean(process.env.DATABASE_URL)

const poolConfig: any = {}

if (useConnectionString) {
  poolConfig.connectionString = process.env.DATABASE_URL
} else {
  poolConfig.host = process.env.DB_HOST || process.env.PGHOST || 'localhost'
  poolConfig.port = Number(process.env.DB_PORT || 5432)
  poolConfig.user = process.env.DB_USER || process.env.PGUSER
  poolConfig.password = process.env.DB_PASS || process.env.PGPASSWORD
  poolConfig.database = process.env.DB_NAME || process.env.PGDATABASE
}

// Enable SSL for managed providers (Neon, Heroku). Allow opt-in via DB_SSL or when DATABASE_URL includes sslmode=require
const dbUrl = process.env.DATABASE_URL || ''
const sslRequested = (process.env.DB_SSL === 'true') || /sslmode=require/i.test(dbUrl)
if (sslRequested) {
  poolConfig.ssl = { rejectUnauthorized: false }
}

const pool = new Pool(poolConfig)

export async function query(text: string, params?: any[]) {
  const client = await pool.connect()
  try {
    const res = await client.query(text, params)
    return res
  } finally {
    client.release()
  }
}

export default {
  query,
}

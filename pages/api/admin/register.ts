import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import db from '@/lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { firstName, lastName, email, password, role } = req.body

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' })
    }

    // Check if email already exists
    const existingUser = await db.query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    )

    if (existingUser.rows.length > 0) {
      return res.status(409).json({ message: 'Email already registered' })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    // Insert new admin user
    const result = await db.query(
      `INSERT INTO users (
        first_name,
        last_name,
        email,
        password_hash,
        role,
        email_verified_at
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, email, role`,
      [
        firstName,
        lastName,
        email,
        passwordHash,
        'admin',
        new Date() // Auto verify admin emails
      ]
    )

    // Return success without sending sensitive data
    return res.status(201).json({
      message: 'Admin registered successfully',
      user: {
        id: result.rows[0].id,
        email: result.rows[0].email,
        role: result.rows[0].role
      }
    })

  } catch (error) {
    console.error('Registration error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
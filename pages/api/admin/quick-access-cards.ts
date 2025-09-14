import { NextApiRequest, NextApiResponse } from 'next'
import db from '@/lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return getQuickAccessCards(req, res)
    case 'POST':
      return createQuickAccessCard(req, res)
    case 'PUT':
      return updateQuickAccessCard(req, res)
    case 'DELETE':
      return deleteQuickAccessCard(req, res)
    default:
      return res.status(405).json({ message: 'Method not allowed' })
  }
}

// Get all quick access cards
async function getQuickAccessCards(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await db.query(
      'SELECT * FROM quick_access_cards WHERE is_active = true ORDER BY display_order ASC'
    )
    return res.status(200).json(result.rows)
  } catch (error) {
    console.error('Error fetching quick access cards:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// Create a new quick access card
async function createQuickAccessCard(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      title,
      description,
      icon,
      link,
      bgColor,
      iconColor,
      isActive,
      displayOrder
    } = req.body

    // Validate required fields
    if (!title || !description || !icon || !link) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const result = await db.query(
      `INSERT INTO quick_access_cards (
        title,
        description,
        icon,
        link,
        bg_color,
        icon_color,
        is_active,
        display_order
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`,
      [
        title,
        description,
        icon,
        link,
        bgColor || 'primary/10',
        iconColor || 'primary',
        isActive,
        displayOrder
      ]
    )

    return res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error creating quick access card:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// Update a quick access card
async function updateQuickAccessCard(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      id,
      title,
      description,
      icon,
      link,
      bgColor,
      iconColor,
      isActive,
      displayOrder
    } = req.body

    if (!id || !title || !description || !icon || !link) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const result = await db.query(
      `UPDATE quick_access_cards
      SET title = $1,
          description = $2,
          icon = $3,
          link = $4,
          bg_color = $5,
          icon_color = $6,
          is_active = $7,
          display_order = $8,
          updated_at = NOW()
      WHERE id = $9
      RETURNING *`,
      [
        title,
        description,
        icon,
        link,
        bgColor || 'primary/10',
        iconColor || 'primary',
        isActive,
        displayOrder,
        id
      ]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Quick access card not found' })
    }

    return res.status(200).json(result.rows[0])
  } catch (error) {
    console.error('Error updating quick access card:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// Delete a quick access card
async function deleteQuickAccessCard(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query

    if (!id) {
      return res.status(400).json({ message: 'Card ID is required' })
    }

    const result = await db.query(
      'DELETE FROM quick_access_cards WHERE id = $1 RETURNING id',
      [id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Quick access card not found' })
    }

    return res.status(200).json({ message: 'Quick access card deleted successfully' })
  } catch (error) {
    console.error('Error deleting quick access card:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
import { NextApiRequest, NextApiResponse } from 'next'
import db from '@/lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return getBanners(req, res)
    case 'POST':
      return createBanner(req, res)
    case 'PUT':
      return updateBanner(req, res)
    case 'DELETE':
      return deleteBanner(req, res)
    default:
      return res.status(405).json({ message: 'Method not allowed' })
  }
}

// Get all banners
async function getBanners(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await db.query(
      'SELECT * FROM banners ORDER BY display_order ASC, created_at DESC'
    );

    const banners = result.rows.map(banner => ({
      id: banner.id,
      title: banner.title,
      subtitle: banner.subtitle,
      ctaPrimaryText: banner.cta_primary_text,
      ctaPrimaryLink: banner.cta_primary_link,
      ctaSecondaryText: banner.cta_secondary_text,
      ctaSecondaryLink: banner.cta_secondary_link,
      displayOrder: banner.display_order,
      isActive: banner.is_active,
      quickAccessCards: [],
      createdAt: banner.created_at,
      updatedAt: banner.updated_at
    }));

    return res.status(200).json(banners);
  } catch (error) {
    console.error('Error fetching banners:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Create a new banner
async function createBanner(req: NextApiRequest, res: NextApiResponse) {
    const {
      title,
      subtitle,
      ctaPrimaryText,
      ctaPrimaryLink,
      ctaSecondaryText,
      ctaSecondaryLink,
      isActive,
      displayOrder,
      quickAccessCards = []
    } = req.body;

    // Validate required fields
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    try {
      // Begin transaction
      await db.query('BEGIN');

      // Create banner
      const bannerResult = await db.query(
        `INSERT INTO banners (
          title,
          subtitle,
          cta_primary_text,
          cta_primary_link,
          cta_secondary_text,
          cta_secondary_link,
          is_active,
          display_order
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *`,
        [
          title,
          subtitle,
          ctaPrimaryText,
          ctaPrimaryLink,
          ctaSecondaryText,
          ctaSecondaryLink,
          isActive,
          displayOrder
        ]
      );

      // Commit transaction
      await db.query('COMMIT');

      const banner = {
        id: bannerResult.rows[0].id,
        title: bannerResult.rows[0].title,
        subtitle: bannerResult.rows[0].subtitle,
        ctaPrimaryText: bannerResult.rows[0].cta_primary_text,
        ctaPrimaryLink: bannerResult.rows[0].cta_primary_link,
        ctaSecondaryText: bannerResult.rows[0].cta_secondary_text,
        ctaSecondaryLink: bannerResult.rows[0].cta_secondary_link,
        isActive: bannerResult.rows[0].is_active,
        displayOrder: bannerResult.rows[0].display_order,
        quickAccessCards: [],
        createdAt: bannerResult.rows[0].created_at,
        updatedAt: bannerResult.rows[0].updated_at
      };

      return res.status(201).json(banner);
    } catch (error) {
      // Rollback on error
      await db.query('ROLLBACK');
      console.error('Error creating banner:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }

}

// Update a banner
async function updateBanner(req: NextApiRequest, res: NextApiResponse) {
    const {
      id,
      title,
      subtitle,
      ctaPrimaryText,
      ctaPrimaryLink,
      ctaSecondaryText,
      ctaSecondaryLink,
      isActive,
      displayOrder,
      quickAccessCards = []
    } = req.body;

    if (!id || !title) {
      return res.status(400).json({ message: 'ID and title are required' });
    }

    try {
      // Begin transaction
      await db.query('BEGIN');

      // Update banner
      const bannerResult = await db.query(
        `UPDATE banners
        SET title = $1,
            subtitle = $2,
            cta_primary_text = $3,
            cta_primary_link = $4,
            cta_secondary_text = $5,
            cta_secondary_link = $6,
            is_active = $7,
            display_order = $8,
            updated_at = NOW()
        WHERE id = $9
        RETURNING *`,
        [
          title,
          subtitle,
          ctaPrimaryText,
          ctaPrimaryLink,
          ctaSecondaryText,
          ctaSecondaryLink,
          isActive,
          displayOrder,
          id
        ]
      );

      if (bannerResult.rows.length === 0) {
        await db.query('ROLLBACK');
        return res.status(404).json({ message: 'Banner not found' });
      }

      // Commit transaction
      await db.query('COMMIT');

      const banner = {
        id: bannerResult.rows[0].id,
        title: bannerResult.rows[0].title,
        subtitle: bannerResult.rows[0].subtitle,
        ctaPrimaryText: bannerResult.rows[0].cta_primary_text,
        ctaPrimaryLink: bannerResult.rows[0].cta_primary_link,
        ctaSecondaryText: bannerResult.rows[0].cta_secondary_text,
        ctaSecondaryLink: bannerResult.rows[0].cta_secondary_link,
        isActive: bannerResult.rows[0].is_active,
        displayOrder: bannerResult.rows[0].display_order,
        quickAccessCards: [],
        createdAt: bannerResult.rows[0].created_at,
        updatedAt: bannerResult.rows[0].updated_at
      };

      return res.status(200).json(banner);
    } catch (error) {
      // Rollback on error
      await db.query('ROLLBACK');
      console.error('Error updating banner:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
}

// Delete a banner
async function deleteBanner(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: 'Banner ID is required' });
  }

  try {
    // Delete the banner
    const result = await db.query(
      'DELETE FROM banners WHERE id = $1 RETURNING id',
      [id]
    );

    if (result.rows.length === 0) {
      await db.query('ROLLBACK');
      return res.status(404).json({ message: 'Banner not found' });
    }



    return res.status(200).json({ message: 'Banner deleted successfully' });
  } catch (error) {
    // Rollback on error
    await db.query('ROLLBACK');
    console.error('Error deleting banner:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
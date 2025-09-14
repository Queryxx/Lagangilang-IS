import { NextApiRequest, NextApiResponse } from 'next'
import db from '@/lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const result = await db.query(
      'SELECT * FROM banners WHERE is_active = true ORDER BY created_at DESC'
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
    console.error('Error fetching active banners:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
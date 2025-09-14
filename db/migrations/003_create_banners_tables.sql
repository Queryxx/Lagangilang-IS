-- Create banners table
CREATE TABLE IF NOT EXISTS public.banners (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    subtitle TEXT,
    cta_primary_text TEXT, -- Call to action primary button text
    cta_primary_link TEXT,
    cta_secondary_text TEXT, -- Call to action secondary button text
    cta_secondary_link TEXT,
    is_active BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create quick access cards table
CREATE TABLE IF NOT EXISTS public.quick_access_cards (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    icon TEXT NOT NULL, -- Store the icon name (e.g., 'Building2', 'Calendar', 'FileText')
    link TEXT NOT NULL,
    bg_color TEXT NOT NULL DEFAULT 'primary/10', -- Store the background color class
    icon_color TEXT NOT NULL DEFAULT 'primary', -- Store the icon color class
    is_active BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add initial quick access cards
INSERT INTO public.quick_access_cards 
(title, description, icon, link, bg_color, icon_color, display_order) 
VALUES 
(
    'Government Services',
    'Access municipal services and applications online',
    'Building2',
    '/services',
    'primary/10',
    'primary',
    1
),
(
    'Community Events',
    'Stay updated with local events and activities',
    'Calendar',
    '/events',
    'accent/10',
    'accent',
    2
),
(
    'Transparency',
    'View public records and government transparency',
    'FileText',
    '/transparency',
    'primary/10',
    'primary',
    3
);
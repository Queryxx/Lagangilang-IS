-- PostgreSQL database schema
-- Safe re-runnable migrations using IF NOT EXISTS where possible

-- Extensions (optional but useful)
CREATE EXTENSION IF NOT EXISTS citext;

-- Users table
CREATE TABLE IF NOT EXISTS public.users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email CITEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'user',
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    email_verified_at TIMESTAMPTZ,
    last_login_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
-- Add check constraint for role to limit it to 'admin' and 'user' only
ALTER TABLE public.users 
DROP CONSTRAINT IF EXISTS users_role_check;

ALTER TABLE public.users 
ADD CONSTRAINT users_role_check 
CHECK (role IN ('admin', 'user'));
-- Trigger to auto-update updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS users_set_updated_at ON public.users;
CREATE TRIGGER users_set_updated_at
BEFORE UPDATE ON public.users
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Messages table (contact messages)
CREATE TABLE IF NOT EXISTS public.messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    body TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new', -- new, read, archived
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- News table
CREATE TABLE IF NOT EXISTS public.news (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    author_name TEXT,
    published_at TIMESTAMPTZ,
    is_published BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS news_set_updated_at ON public.news;
CREATE TRIGGER news_set_updated_at
BEFORE UPDATE ON public.news
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Officials table
CREATE TABLE IF NOT EXISTS public.officials (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    photo_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS officials_set_updated_at ON public.officials;
CREATE TRIGGER officials_set_updated_at
BEFORE UPDATE ON public.officials
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Simple supporting indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON public.users (email);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON public.messages (created_at);
CREATE INDEX IF NOT EXISTS idx_news_published_at ON public.news (published_at);
CREATE INDEX IF NOT EXISTS idx_officials_position ON public.officials (position);

-- Barangays table
CREATE TABLE IF NOT EXISTS public.barangays (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    captain TEXT,
    population INTEGER,
    area_km2 NUMERIC(8,2),
    phone TEXT,
    email CITEXT,
    services TEXT[],
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS barangays_set_updated_at ON public.barangays;
CREATE TRIGGER barangays_set_updated_at
BEFORE UPDATE ON public.barangays
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_barangays_name ON public.barangays (name);

-- Local products table
CREATE TABLE IF NOT EXISTS public.local_products (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    producer TEXT,
    category TEXT,
    description TEXT,
    rating NUMERIC(3,1) CHECK (rating IS NULL OR (rating >= 0 AND rating <= 5)),
    contact TEXT,
    location TEXT,
    price_text TEXT,
    status TEXT,
    image_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS local_products_set_updated_at ON public.local_products;
CREATE TRIGGER local_products_set_updated_at
BEFORE UPDATE ON public.local_products
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_local_products_category ON public.local_products (category);
CREATE INDEX IF NOT EXISTS idx_local_products_status ON public.local_products (status);

-- Livelihood programs table
CREATE TABLE IF NOT EXISTS public.livelihood_programs (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    description TEXT,
    category TEXT,
    budget_amount NUMERIC(14,2),
    beneficiaries INTEGER,
    start_date DATE,
    end_date DATE,
    status TEXT,
    coordinator TEXT,
    contact TEXT,
    location TEXT,
    requirements TEXT[],
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS livelihood_programs_set_updated_at ON public.livelihood_programs;
CREATE TRIGGER livelihood_programs_set_updated_at
BEFORE UPDATE ON public.livelihood_programs
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_livelihood_programs_category ON public.livelihood_programs (category);
CREATE INDEX IF NOT EXISTS idx_livelihood_programs_status ON public.livelihood_programs (status);

-- Bids table
CREATE TABLE IF NOT EXISTS public.bids (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    reference TEXT UNIQUE,
    budget_amount NUMERIC(14,2),
    budget_text TEXT,
    deadline DATE,
    category TEXT,
    status TEXT,
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS bids_set_updated_at ON public.bids;
CREATE TRIGGER bids_set_updated_at
BEFORE UPDATE ON public.bids
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_bids_status ON public.bids (status);
CREATE INDEX IF NOT EXISTS idx_bids_deadline ON public.bids (deadline);

-- Awards table
CREATE TABLE IF NOT EXISTS public.awards (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    reference TEXT,
    winner TEXT,
    amount NUMERIC(14,2),
    amount_text TEXT,
    award_date DATE,
    category TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS awards_set_updated_at ON public.awards;
CREATE TRIGGER awards_set_updated_at
BEFORE UPDATE ON public.awards
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_awards_award_date ON public.awards (award_date);

-- Tourism attractions table
CREATE TABLE IF NOT EXISTS public.tourism_attractions (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    description TEXT,
    category TEXT,
    rating NUMERIC(2,1) CHECK (rating IS NULL OR (rating >= 0 AND rating <= 5)),
    location TEXT,
    status TEXT,
    visitors INTEGER,
    image_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS tourism_attractions_set_updated_at ON public.tourism_attractions;
CREATE TRIGGER tourism_attractions_set_updated_at
BEFORE UPDATE ON public.tourism_attractions
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_tourism_attractions_category ON public.tourism_attractions (category);
CREATE INDEX IF NOT EXISTS idx_tourism_attractions_status ON public.tourism_attractions (status);

-- Tourism events table
CREATE TABLE IF NOT EXISTS public.tourism_events (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    date_text TEXT,
    description TEXT,
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS tourism_events_set_updated_at ON public.tourism_events;
CREATE TRIGGER tourism_events_set_updated_at
BEFORE UPDATE ON public.tourism_events
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Transparency documents table
CREATE TABLE IF NOT EXISTS public.transparency_documents (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    doc_type TEXT,
    doc_date DATE,
    size_text TEXT,
    format TEXT,
    file_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS transparency_documents_set_updated_at ON public.transparency_documents;
CREATE TRIGGER transparency_documents_set_updated_at
BEFORE UPDATE ON public.transparency_documents
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_transparency_documents_doc_date ON public.transparency_documents (doc_date);
CREATE INDEX IF NOT EXISTS idx_transparency_documents_doc_type ON public.transparency_documents (doc_type);

-- Projects table
CREATE TABLE IF NOT EXISTS public.projects (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT,
    progress INTEGER CHECK (progress IS NULL OR (progress >= 0 AND progress <= 100)),
    budget_amount NUMERIC(14,2),
    budget_text TEXT,
    start_date DATE,
    end_date DATE,
    category TEXT,
    location TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS projects_set_updated_at ON public.projects;
CREATE TRIGGER projects_set_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects (status);
CREATE INDEX IF NOT EXISTS idx_projects_category ON public.projects (category);

-- About sections table
CREATE TABLE IF NOT EXISTS public.about_sections (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    section_type TEXT NOT NULL,
    updated_by TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS about_sections_set_updated_at ON public.about_sections;
CREATE TRIGGER about_sections_set_updated_at
BEFORE UPDATE ON public.about_sections
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_about_sections_type ON public.about_sections (section_type);

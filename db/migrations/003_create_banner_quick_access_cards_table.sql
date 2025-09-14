CREATE TABLE IF NOT EXISTS banner_quick_access_cards (
  banner_id INTEGER NOT NULL REFERENCES banners(id) ON DELETE CASCADE,
  quick_access_card_id INTEGER NOT NULL REFERENCES quick_access_cards(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (banner_id, quick_access_card_id)
);
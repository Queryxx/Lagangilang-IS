export interface Banner {
  id: number;
  title: string;
  subtitle?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  isActive: boolean;
  displayOrder: number;
  quickAccessCards?: number[];
  createdAt: string;
  updatedAt: string;
}

export interface QuickAccessCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
  bgColor: string;
  iconColor: string;
  isActive: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}
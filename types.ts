import React from 'react';

export type Role = 'customer' | 'farmer' | 'logistics' | 'vendor' | 'admin';

export interface User {
  id: string;
  created_at: string;
  phone: string;
  name: string;
  role: Role;
  latitude?: number;
  longitude?: number;
  address?: string;
  avatar_url?: string;

  // Trust & Identity
  is_verified?: boolean;
  rating?: number;
  reputation_score?: number;
  badges?: string[];
  bio?: string;
  total_volume_kg?: number;
  joined_at?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image_url?: string;
  base_price_min?: number;
  base_price_max?: number;
}

export interface Listing {
  id: string;
  created_at: string;
  farmer_id: string;
  product_id: string;
  quantity_kg: number;
  price_per_kg: number;
  grade: 'A' | 'B' | 'C';
  harvest_date?: string;
  description?: string;
  status: 'active' | 'sold' | 'cancelled';
  image_url?: string;

  // Joins
  farmer?: User;
  product?: Product;
}

export interface Order {
  id: string;
  created_at: string;
  buyer_id: string;
  listing_id: string;
  quantity_kg: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';

  // Joins
  buyer?: User;
  listing?: Listing;
}

// UI Types
export interface NavItem {
  label: string;
  href: string;
}

export interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  isPositive?: boolean;
  icon?: React.ReactNode;
}

import React from 'react';

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

export interface FruitData {
  id: string;
  name: string;
  sugarContent: number;
  diameter: number;
  grade: 'A' | 'B' | 'C';
  acidity: number;
  origin: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

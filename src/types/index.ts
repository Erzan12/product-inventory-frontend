// src/types/index.ts
export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  categoryId: number;
  category?: {
    id: number;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}
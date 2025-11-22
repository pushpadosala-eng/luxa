export enum Brand {
  NIKE = 'Nike',
  ADIDAS = 'Adidas',
  CK = 'Calvin Klein',
  US_POLO = 'US Polo Assn',
  OTHER = 'Other'
}

export enum Category {
  SHOES = 'Shoes',
  JACKETS = 'Jackets',
  SHIRTS = 'Shirts',
  ACCESSORIES = 'Accessories'
}

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  category: Category;
  price: number; // In INR
  description: string;
  image: string;
  deliveryEstimateDays: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
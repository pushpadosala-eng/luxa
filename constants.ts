import { Brand, Category, Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Air Zoom Pegasus 40',
    brand: Brand.NIKE,
    category: Category.SHOES,
    price: 11895,
    description: 'A springy ride for every run, the Peg returns with a familiar feel just for you.',
    image: 'https://picsum.photos/id/103/500/500',
    deliveryEstimateDays: 3
  },
  {
    id: '2',
    name: 'Ultraboost Light',
    brand: Brand.ADIDAS,
    category: Category.SHOES,
    price: 16999,
    description: 'Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever.',
    image: 'https://picsum.photos/id/21/500/500',
    deliveryEstimateDays: 2
  },
  {
    id: '3',
    name: 'CK Bomber Jacket',
    brand: Brand.CK,
    category: Category.JACKETS,
    price: 12500,
    description: 'Classic bomber jacket featuring a sleek design and premium materials for cold weather.',
    image: 'https://picsum.photos/id/1005/500/500',
    deliveryEstimateDays: 5
  },
  {
    id: '4',
    name: 'USPA Classic Polo',
    brand: Brand.US_POLO,
    category: Category.SHIRTS,
    price: 2499,
    description: 'The authentic polo shirt, synonymous with comfort and style.',
    image: 'https://picsum.photos/id/1011/500/500',
    deliveryEstimateDays: 3
  },
  {
    id: '5',
    name: 'Leather Reversible Belt',
    brand: Brand.US_POLO,
    category: Category.ACCESSORIES,
    price: 1899,
    description: 'Genuine leather belt with a reversible buckle for versatile styling.',
    image: 'https://picsum.photos/id/106/500/500',
    deliveryEstimateDays: 4
  },
  {
    id: '6',
    name: 'Nike Sportswear Club Fleece',
    brand: Brand.NIKE,
    category: Category.SHIRTS,
    price: 3295,
    description: 'Soft comfort. Simple style. Everyday staple.',
    image: 'https://picsum.photos/id/1012/500/500',
    deliveryEstimateDays: 3
  },
  {
    id: '7',
    name: 'Adidas Adilette Comfort Slides',
    brand: Brand.ADIDAS,
    category: Category.SHOES,
    price: 2999,
    description: 'Slides with a contoured footbed for cloud-like energy.',
    image: 'https://picsum.photos/id/1025/500/500',
    deliveryEstimateDays: 2
  },
  {
    id: '8',
    name: 'CK Logo Hoodie',
    brand: Brand.CK,
    category: Category.JACKETS,
    price: 8999,
    description: 'Cotton terry hoodie with the iconic Calvin Klein logo.',
    image: 'https://picsum.photos/id/338/500/500',
    deliveryEstimateDays: 4
  },
  {
    id: '9',
    name: 'USPA Cotton Socks (Pack of 3)',
    brand: Brand.US_POLO,
    category: Category.ACCESSORIES,
    price: 699,
    description: 'Premium combed cotton socks for all-day breathability.',
    image: 'https://picsum.photos/id/1072/500/500',
    deliveryEstimateDays: 2
  }
];

export const DELIVERY_FEE = 99;
export const FREE_DELIVERY_THRESHOLD = 5000;
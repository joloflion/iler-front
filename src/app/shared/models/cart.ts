import { Product } from './product';
export interface Cart {
  id?: string;
  product: Product;
  quantity: 1;
  total?: 0;
}

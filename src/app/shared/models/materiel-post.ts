import { Materiel } from './materiel';
import { User } from './user';
export interface MaterielPost {
  id: string,
  materiel: Materiel,
  prop: User,
  prix: number;
}

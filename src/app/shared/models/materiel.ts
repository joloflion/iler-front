export interface Materiel {
  id?: string,
  titre: string,
  desc: string,
  image: string,
  marque: string,
  puissance: string,
  position: {
    lat: number,
    lng: number
  },
  disponible: boolean,
  proprietaire?: {
    nom: string,
    tel: string
  },
  price: string;
}

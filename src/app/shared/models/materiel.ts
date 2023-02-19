export interface Materiel {
  titre: string
  desc: string
  image: string
  marque: string
  puissance: string
  position: {
    lat: number
    lng: number
  },
  disponible: boolean;
}

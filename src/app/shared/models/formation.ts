export interface Formation {
  titre: string,
  introduction: string,
  image: string;
  chapitres: Chapitre[],
  author: string,
  commentaires: string[],
  dispo: boolean

}

export interface Chapitre{
  titre: string,
  image: string,
  contenu: string,
  video: string
}

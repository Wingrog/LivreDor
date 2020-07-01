export class LivreDor {
  id: number;
  titre: string;
  description: string;
  image: string;
  dateAjout: Date;

  constructor(id: number = null, titre: string = null, description: string = null, image: string = 'https://transfert-exam.s3.eu-central-1.amazonaws.com/charlene.jpg', dateAjout: Date = new Date()) {
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.image = image;
    this.dateAjout = dateAjout;
  }

}

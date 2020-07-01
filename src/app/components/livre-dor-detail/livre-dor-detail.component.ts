import { Component, OnInit } from '@angular/core';
import { LivreDor } from 'src/app/models/livre-dor';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreDorService } from 'src/app/services/livre-dor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-livre-dor-detail',
  templateUrl: './livre-dor-detail.component.html',
  styleUrls: ['./livre-dor-detail.component.css']
})
export class LivreDorDetailComponent implements OnInit {

  livres: LivreDor;
  isloading: boolean;
  message: LivreDor[];

  constructor(private route: ActivatedRoute, private livreDorService: LivreDorService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    // METHODE SERVEUR BACK END POUR AFFICHER LE MESSAGE SELON SON ID
    this.isloading = true;
    this.livreDorService.getOneMessage(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe((data: LivreDor) => {
      this.livres = data;
      this.isloading = false;
    });
  }

  // Fonction déclenchée au clic via le formulaire

  deleteMessage(id: number): void {
    this.isloading = true;
    this.livreDorService.deleteMessage(id).subscribe(then => {
      this.livreDorService.getMessages().subscribe((data: LivreDor[]) => {
        this.message = data;
        this.isloading = false;
        this.router.navigate(['/home']); // Redirection de l'utilisateur
        this.toastr.error("Le message à été supprimée !"); //on affiche la notification
      });
    })
  }

}

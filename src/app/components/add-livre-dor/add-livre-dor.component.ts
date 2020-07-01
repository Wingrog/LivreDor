import { Component, OnInit } from '@angular/core';
import { LivreDor } from 'src/app/models/livre-dor';
import { LivreDorService } from 'src/app/services/livre-dor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-livre-dor',
  templateUrl: './add-livre-dor.component.html',
  styleUrls: ['./add-livre-dor.component.css']
})
export class AddLivreDorComponent implements OnInit {

  isLoading: boolean;
  livres = new LivreDor();


  constructor(private livreDorService: LivreDorService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  // ENVOI DES DONNEES SUR SERVEUR BACK END
  submitMessage(): void {
    this.isLoading = true;
    this.livreDorService.addMessage(this.livres).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/home']); // Redirection de l'utilisateur
      this.toastr.success("Le message à bien été ajoutée !"); // On affiche une notification
    });
  }

}

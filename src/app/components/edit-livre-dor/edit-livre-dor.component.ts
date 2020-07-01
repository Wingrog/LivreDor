import { Component, OnInit } from '@angular/core';
import { LivreDor } from 'src/app/models/livre-dor';
import { LivreDorService } from 'src/app/services/livre-dor.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-edit-livre-dor',
  templateUrl: './edit-livre-dor.component.html',
  styleUrls: ['./edit-livre-dor.component.css']
})
export class EditLivreDorComponent implements OnInit {

  livres: LivreDor;

  isLoading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private livreDorService: LivreDorService, private router: Router, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.isLoading = true;
    this.livreDorService.getOneMessage(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe((data: LivreDor) => {
      this.livres = data;
      this.isLoading = false;
    });
  }


  // JE MODIFIE MA CHAUSSURE

  editMessage(): void {
    this.isLoading = true;
    this.livreDorService.editMessage(this.livres).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/home']); // Redirection de l'utilisateur
      this.toastr.success("Le message à bien été modifié !"); // On affiche une notification
    })
  }

}

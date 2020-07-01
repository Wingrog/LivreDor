import { Component, OnInit } from '@angular/core';
import { LivreDorService } from 'src/app/services/livre-dor.service';
import { ToastrService } from 'ngx-toastr';
import { LivreDor } from 'src/app/models/livre-dor';


@Component({
  selector: 'app-livre-dor',
  templateUrl: './livre-dor.component.html',
  styleUrls: ['./livre-dor.component.css']
})
export class LivreDorComponent implements OnInit {

  livres: LivreDor[];
  isLoading: boolean;

  constructor(private livredorService: LivreDorService, private toastr: ToastrService) { }

  ngOnInit(): void {


    this.isLoading = true;
    this.livredorService.getMessages().subscribe((data: LivreDor[]) => {
      this.livres = data;
      this.isLoading = false;
    });
  }

}

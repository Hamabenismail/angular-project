import { Component, OnInit } from '@angular/core';
import {Candidat} from "../classes/candidat";
import { ActivatedRoute, Router } from '@angular/router';
import {CandidatService} from "./../services/candidat.service";
import { Subscription } from 'rxjs';



declare var swal: any;

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {

  candidat: Candidat = new Candidat();
  busy: Subscription;

  
  constructor(private router:Router ,
              private candidatService: CandidatService,
    ) { }

  ngOnInit(): void {
  }


  addCandidat(){
    this.busy =  this.candidatService.addCandidat(this.candidat).subscribe((data)=>
    {      
      swal('Succées', ' Candidat ajouté', 'success').then(() => {
        this.router.navigate(['/list-candidat']);
      });
     
    }, error => {
        swal('Erreur', 'Erreur lors de l\'ajout du candidat ', 'error');
    })
    }



}

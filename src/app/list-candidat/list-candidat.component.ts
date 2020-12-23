import { Component, OnInit } from '@angular/core';
import {Candidat} from "../classes/candidat";


@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.css']
})
export class ListCandidatComponent implements OnInit {

  candidats: Candidat  [] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diertiva-ngclass',
  templateUrl: './diertiva-ngclass.component.html',
  styleUrls: ['./diertiva-ngclass.component.css']
})
export class DiertivaNgclassComponent implements OnInit {
  meuFavorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

}
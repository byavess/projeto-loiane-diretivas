import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diertivas-ngstyle',
  templateUrl: './diertivas-ngstyle.component.html',
  styleUrls: ['./diertivas-ngstyle.component.css']
})
export class DiertivasNgstyleComponent implements OnInit {
  ativo: boolean=false;
  tamanhoFonte:number= 10;

  constructor() { }

  ngOnInit(): void {
  }

  mudarAtivo () {
    this.ativo= !this.ativo
  }
}

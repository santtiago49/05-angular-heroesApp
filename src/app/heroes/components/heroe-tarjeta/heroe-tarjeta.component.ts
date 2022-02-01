import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
    .mt-10{
      margin-top: 10px;
    }
  `
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() heroe!: Heroe;


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {


  heroe!: Heroe;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private heroeRouter: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroePorId( id ))
      )
      .subscribe( heroe => this.heroe = heroe )
  }

  regresar(){
    this.heroeRouter.navigate(['/heroes/listado'])
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string = '';
  index: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private _route: Router) {

               }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe( params['termino'] );

      console.log(this.heroes);
    })
    
  }

  verHeroe(){
    console.log( this.index )
  }

}

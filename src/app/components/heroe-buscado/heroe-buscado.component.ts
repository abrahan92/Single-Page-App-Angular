import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe-buscado',
  templateUrl: './heroe-buscado.component.html'
})
export class HeroeBuscadoComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService,
               private router:Router
  ) { }

  verHeroe(idx:number){
    this.router.navigate( ['/heroe', idx] );
  }

  ngOnInit() {

      this.activatedRoute.params.subscribe(params => {
      this.termino = params["termino"];
      this.heroes = this._heroesService.buscarHeroes(params["termino"]);
      console.log(this.heroes);
    });
  }

}

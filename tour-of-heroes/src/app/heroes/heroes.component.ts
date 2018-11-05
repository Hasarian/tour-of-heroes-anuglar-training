import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero:Hero;
  daoHero:HeroService;
  constructor(private heroService:HeroService) {
      this.daoHero=heroService;
   }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
  getHeroes():void{
      this.daoHero.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }
}

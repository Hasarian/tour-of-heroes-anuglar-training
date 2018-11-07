import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Hero} from './hero';

export class InMemoryDataService implements InMemoryDbService
{
  createDb(){
    const heroes=[
      {id:1,name:"Mr. Nice"},
      {id:2,name:"All Might"},
      {id:3,name:"Midorya"},
      {id:4,name:"Nicolas"},
      {id:5,name:"Thas Mock"},
      {id:6,name:"giua"}
    ];
    return {heroes};
  }
  genId(heroes:Hero[]):number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero=>hero.id))+1:1;
  }
  constructor() { }
}

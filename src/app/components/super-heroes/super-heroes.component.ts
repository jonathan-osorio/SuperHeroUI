import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../../service/superhero.service';
import { Observable } from 'rxjs';
import { SuperHero } from '../../Interfaces/superhero.interface';


@Component({
  selector: 'app-super-heroes',
  standalone: true,
  imports: [CommonModule  ],
  templateUrl: './super-heroes.component.html',
  styleUrl: './super-heroes.component.css'
})
export class SuperHeroesComponent implements OnInit {
  superHeroList!: Observable<SuperHero[]>
 
  constructor(private superHeroService: SuperheroService){}

  ngOnInit(): void {
      this.loadSuperHeroes();
  }

  loadSuperHeroes(){
    this.superHeroList = this.superHeroService.getSuperHeroes();
    this.superHeroList.subscribe();
  }

}

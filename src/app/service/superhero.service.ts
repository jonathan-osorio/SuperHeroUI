import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuperHero } from '../Interfaces/superhero.interface';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private apiUrl: string = 'http://localhost:5190/api/SuperHero';

  constructor(private http: HttpClient) { }

  //fetch Super Heroes
  getSuperHeroes(): Observable<SuperHero[]>{
    return this.http.get<SuperHero[]>(`${this.apiUrl}`)
  }

  //fetch 1 Super Hero using the id
  getSuperHeroById(id: number = 1): Observable<SuperHero>{
    return this.http.get<SuperHero>(`${this.apiUrl}/?id=${id}`)
  }


}

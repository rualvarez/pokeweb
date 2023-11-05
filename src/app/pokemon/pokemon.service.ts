import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiURLById: string = 'http://localhost:1234/pokemon'

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any> {
    const url: string = `${this.apiURLById}/${id}`
    return this.http.get(url).pipe()
  }
}

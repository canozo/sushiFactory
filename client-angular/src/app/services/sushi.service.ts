import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sushi } from '../models/Sushi';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SushiService {
  // sushiUrl: string = 'https://vanguardia-sushi-factory.herokuapp.com/api/sushi';
  sushiUrl: string = 'http://localhost:5000/api/sushi';
  types: string = '/types';

  constructor(private http: HttpClient) { }

  getSushis(): Observable<Sushi[]> {
    return this.http.get<Sushi[]>(this.sushiUrl);
  }

  delete(id: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: {
        id: id
      },
    };
    return this.http.delete(this.sushiUrl, options);
  }
}

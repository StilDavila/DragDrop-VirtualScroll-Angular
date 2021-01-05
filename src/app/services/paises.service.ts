import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  URL = 'https://restcountries.eu/rest/v2/lang/es';

  constructor(private http: HttpClient) { }

  getPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.URL);
  }
}

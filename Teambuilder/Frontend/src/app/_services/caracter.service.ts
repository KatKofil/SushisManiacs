import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Caracter } from '../_model';

@Injectable({ providedIn: 'root' })
export class CaracterService {
    constructor(private http: HttpClient) {}

    caracterList() {
        console.log("on y passe bien")
        return this.http.get(`${environment.apiUrl}/caracter`) as Observable<Caracter[]>;
    }


  getCaracter(id: number){
    return this.http.post(`${environment.apiUrl}/caracter/detail`, { id }) as Observable<Caracter[]>;
  }
}
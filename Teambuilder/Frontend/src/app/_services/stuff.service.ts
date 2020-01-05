import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Stuff } from '../_model';

@Injectable({ providedIn: 'root' })
@Injectable({
  providedIn: 'root'
})
export class StuffService {

  constructor(private http: HttpClient) {}

  stuffList() {
      return this.http.get(`${environment.apiUrl}/stuff`) as Observable<Stuff[]>;
  }

  getStuff(id: number){
    return this.http.post(`${environment.apiUrl}/stuff/detail`, { id }) as Observable<Stuff[]>;
  }
}

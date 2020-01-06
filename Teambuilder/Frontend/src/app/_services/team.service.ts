import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Team, TeamCaracter } from "../_model";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams(idUser: number){
    return this.http.post(`${environment.apiUrl}/teams`, { idUser }) as Observable<Team[]>;
  }

  getTeam(idTeam: number){
    return this.http.post(`${environment.apiUrl}/team`, { idTeam }) as Observable<TeamCaracter[]>;
  }

  saveTeam(newTeam: string){
    return this.http.post(`${environment.apiUrl}/team/upload`, { newTeam })
  }
}

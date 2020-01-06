import { Component, OnInit, Input } from '@angular/core';
import { Team } from "../../_model";
import { TeamService, AuthenticationService } from "../../_services";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() teams: Team[];
  @Input() idUser: number;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private authenticationService: AuthenticationService,
    private location: Location) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe((user) => this.idUser = user.idUser);
    this.getTeams();
  }

  getTeams() {
    this.teamService.getTeams(this.idUser).subscribe((teams) => {
      console.log(teams);
      this.teams = teams;
    });
  }

  cons(){
    console.log(this.teams);
    console.log(this.idUser);
  }
}

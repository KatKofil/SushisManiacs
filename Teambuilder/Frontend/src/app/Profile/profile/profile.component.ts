import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../_services";
import { User } from '../../_model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private authenticationService: AuthenticationService) {

    }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe((user) => this.user = user)
  }

  cons(){
    console.log(this.user)
  }

}

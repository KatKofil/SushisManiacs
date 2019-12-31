import { Component, OnInit } from '@angular/core';
import { MenuItem, MENUITEMS } from './_model/item-menu';
import { MenuLogItems, MENULOGITEMS } from './_model/item-logmenu';
import { ContactItem, CONTACTITEMS } from './_model/item-contact'
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { User } from './_model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SushisManiacs';
  items: MenuItem[];
  logItems: MenuLogItems[];
  contacts: ContactItem[];
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  isLog(){
    if (this.currentUser){
      return true;
    }
    return false;
  }

  ngOnInit() {
    this.getItems();
  }
  getItems(): void {
    this.items = MENUITEMS;
    this.contacts = CONTACTITEMS;
    this.logItems = MENULOGITEMS;
  }
  filtreItemsReseaux() {
    return this.contacts.filter((item) => item.selector === 1);
  }
  filtreItemsContact() {
    return this.contacts.filter((item) => item.selector === 2);
  }
  logout(){
    console.log("on est passer")
    this.authenticationService.logout();
    this.router.navigate(['/login'])
  }
}

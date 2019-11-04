import { Component, OnInit } from '@angular/core';
import { MenuItem, MENUITEMS } from './items/item-menu';
import { ContactItem, CONTACTITEMS } from './items/item-contact'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SushisManiacs';
  items: MenuItem[];
  contacts: ContactItem[];

  ngOnInit() {
    this.getItems();
  }
  getItems(): void {
    this.items = MENUITEMS;
    this.contacts = CONTACTITEMS;
  }
  filtreItemsReseaux() {
    return this.contacts.filter((item) => item.selector === 1);
  }
  filtreItemsContact() {
    return this.contacts.filter((item) => item.selector === 2);
  }
}

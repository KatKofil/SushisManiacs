import { Component, OnInit, Input } from '@angular/core';
import { Stuff } from '../../_model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StuffService }  from '../../_services';
@Component({
  selector: 'app-stuffdetail',
  templateUrl: './stuffdetail.component.html',
  styleUrls: ['./stuffdetail.component.scss']
})
export class StuffdetailComponent implements OnInit {

  @Input() stuff: Stuff[];

  constructor(
    private route: ActivatedRoute,
    private stuffService: StuffService,
    private location: Location
  ) { }

  ngOnInit(): void{
    this.getStuff();
  }

  getStuff(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.stuffService.getStuff(id)
      .subscribe(stuff => this.stuff = stuff);
  }
  cons(){
    console.log(this.stuff);
  }
}

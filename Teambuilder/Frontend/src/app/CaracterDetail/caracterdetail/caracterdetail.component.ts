import { Component, OnInit, Input } from '@angular/core';
import { Caracter } from '../../_model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CaracterService }  from '../../_services';
@Component({
  selector: 'app-caracterdetail',
  templateUrl: './caracterdetail.component.html',
  styleUrls: ['./caracterdetail.component.scss']
})
export class CaracterdetailComponent implements OnInit {

  @Input() caracter: Caracter[];

  constructor(
    private route: ActivatedRoute,
    private caracterService: CaracterService,
    private location: Location
  ) { }

  ngOnInit(): void{
    this.getCaracter();
  }

  getCaracter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.caracterService.getCaracter(id)
      .subscribe(caracter => this.caracter = caracter);
  }
  cons(){
    console.log(this.caracter);
  }
}

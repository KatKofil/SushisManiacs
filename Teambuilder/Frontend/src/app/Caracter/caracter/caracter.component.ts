import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CaracterService } from '../../_services';
import { Caracter } from '../../_model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caracter',
  templateUrl: './caracter.component.html',
  styleUrls: ['./caracter.component.scss']
})

export class CaracterComponent implements OnInit {

  private sub: any;
  id: number;
  caracter: Caracter[];
  displayedColumns: string[] = ['idCaracter', 'name', 'description'];
  value: string ='';

  constructor(
    private caracterService: CaracterService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {    
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
    this.getCaracter();
  })}

  getCaracter(): void{
    this.caracterService.caracterList().subscribe((caracter) => {
      this.caracter = caracter;
    });
  }

  console(): void {
    console.log(this.caracter);
    console.log(this.value);
  }

}

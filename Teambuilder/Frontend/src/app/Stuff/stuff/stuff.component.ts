import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StuffService } from '../../_services';
import { Stuff } from '../../_model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.scss']
})
export class StuffComponent implements OnInit {
  private sub: any;
  id: number;
  stuff: Stuff[];
  displayedColumns: string[] = ['idStuff', 'name', 'description'];
  value: string ='';

  constructor(
    private caracterService: StuffService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {    
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
    this.getCaracter();
  })}

  getCaracter(): void{
    this.caracterService.stuffList().subscribe((stuff) => {
      this.stuff = stuff;
    });
  }

  console(): void {
    console.log(this.stuff);
    console.log(this.value);
  }

}

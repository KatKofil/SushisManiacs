import { Component, OnInit, Input, AfterViewInit, OnDestroy, ViewChild} from '@angular/core';
import { TeamCaracter, Caracter, Stuff } from "../../_model";
import { TeamService, CaracterService, StuffService } from "../../_services";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-teamdetail',
  templateUrl: './teamdetail.component.html',
  styleUrls: ['./teamdetail.component.scss']
})
export class TeamdetailComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() team: TeamCaracter[];
  @Input() caracters: Caracter[];
  @Input() stuffs: Stuff[];

  public newCaracter: number[] = [];
  public newStuff: number[] = [];
  public newTeam: TeamCaracter[] = [];

  public caracterCtrl: FormControl = new FormControl();
  public caracterFilterCtrl: FormControl = new FormControl();
  public filtredCaracter: ReplaySubject<Caracter[]> = new ReplaySubject<Caracter[]>(1);

  public stuffCtrl: FormControl = new FormControl();
  public stuffFilterCtrl: FormControl = new FormControl();
  public filtredStuff: ReplaySubject<Stuff[]> = new ReplaySubject<Stuff[]>(1);

  @ViewChild('caracterSelect', { static: true }) caracterSelect: MatSelect;
  @ViewChild('stuffSelect', { static: true }) stuffSelect: MatSelect;

  protected _onDestroy = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private caracterService: CaracterService,
    private stuffService: StuffService,
    private location: Location) { }

  ngOnInit() {
    this.getTeam();
    this.getStuffs();
    this.getCaracters();
  }


  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  protected setInitialValue() {
    this.filtredCaracter
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.caracterSelect.compareWith = (a: Caracter, b: Caracter) => a && b && a.idCaracter === b.idCaracter;
      });


    this.filtredStuff
    .pipe(take(1), takeUntil(this._onDestroy))
    .subscribe(() => {
      // setting the compareWith property to a comparison function
      // triggers initializing the selection according to the initial value of
      // the form control (i.e. _initializeSelection())
      // this needs to be done after the filteredBanks are loaded initially
      // and after the mat-option elements are available
      this.stuffSelect.compareWith = (a: Stuff, b: Stuff) => a && b && a.idStuff === b.idStuff;
    });
  }

  protected filterCaracter() {
    if (!this.caracters) {
      return;
    }
    // get the search keyword
    let search = this.caracterFilterCtrl.value;
    console.log(this.caracterFilterCtrl.value)
    if (!search) {
      this.filtredCaracter.next(this.caracters.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filtredCaracter.next(
      this.caracters.filter(Caracter => Caracter.name.toLowerCase().indexOf(search) > -1)
    );
  }

  protected filterStuff() {
    if (!this.stuffs) {
      return;
    }
    // get the search keyword
    let search = this.stuffFilterCtrl.value;
    console.log(this.stuffFilterCtrl.value)
    if (!search) {
      this.filtredStuff.next(this.stuffs.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filtredStuff.next(
      this.stuffs.filter(Stuff => Stuff.name.toLowerCase().indexOf(search) > -1)
    );
  }

  getTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team);
  }

  getStuffs(){
    this.stuffService.stuffList().subscribe((stuffs) => this.stuffs = stuffs)
  }

  getCaracters() {
    this.caracterService.caracterList().subscribe((caracters) => this.caracters = caracters)
  }

  addCaracter() {
    this.newCaracter.push(this.caracterCtrl.value.idCaracter)
  }

  addStuff() {
    this.newStuff.push(this.stuffCtrl.value.idStuff)
  }

  initAll(){
    this.caracterCtrl.setValue(this.caracters[0]);
    this.filtredCaracter.next(this.caracters.slice());
    this.caracterFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCaracter();
      });


    this.stuffCtrl.setValue(this.stuffs[0]);
    this.filtredStuff.next(this.stuffs.slice());
    this.stuffFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterStuff();
      });
  }

  save() {
    if (this.newCaracter.length != 6 || this.newStuff.length != 6){
      console.log("error veuiller saisir exactement 6 caracter et equipement");
      return;
    }
    const id = +this.route.snapshot.paramMap.get('id');
    this.newCaracter.forEach((element, index) => {
      this.newTeam.push({idTeam: id, idCaracter: element, idStuff: this.newStuff[index]})
    });
    console.log(this.newTeam);
    this.teamService.saveTeam(this.newTeam);
  }

  cons(){
    console.log(this.team)
    console.log(this.newCaracter)
    console.log(this.newStuff)
    console.log(this.caracters)
    console.log(this.caracterCtrl.value.name)
  }
}

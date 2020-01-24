import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CaracterService } from '../../_services';
import { Caracter } from '../../_model';
import { ActivatedRoute } from '@angular/router';
import { I18nSelectPipe } from '@angular/common';

@Component({
  selector: 'app-caracter',
  templateUrl: './caracter.component.html',
  styleUrls: ['./caracter.component.scss']
})

export class CaracterComponent implements OnInit {

  private sub: any;
  caracterList: any = [{
    "name": "Roger",
    "describeCaracter": "",
    "sushieTime": 1.5,
    "makiTime": 1,
    "brochetteTime": 0.5,
    "sashimiTime": 0.5,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Sun",
    "describeCaracter": "description du personnage",
    "sushieTime": 1,
    "makiTime": 0.5,
    "brochetteTime": 0.5,
    "sashimiTime": 0.5,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Bjorn",
    "describeCaracter": "description du personnage",
    "sushieTime": 0.5,
    "makiTime": 0.5,
    "brochetteTime": 1,
    "sashimiTime": 0.5,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "yumme",
    "describeCaracter": "description du personnage",
    "sushieTime": 0.5,
    "makiTime": 0.5,
    "brochetteTime": 0.5,
    "sashimiTime": 1,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Mysha",
    "describeCaracter": "description du personnage",
    "sushieTime": 0.75,
    "makiTime": 0.75,
    "brochetteTime": 0.75,
    "sashimiTime": 1.25,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Akyo",
    "describeCaracter": "description du personnage",
    "sushieTime": 0.75,
    "makiTime": 0.75,
    "brochetteTime": 1.25,
    "sashimiTime": 0.75,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Roman",
    "describeCaracter": "description du personnage",
    "sushieTime": 1.25,
    "makiTime": 0.75,
    "brochetteTime": 0.75,
    "sashimiTime": 0.75,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Demba",
    "describeCaracter": "description du personnage",
    "sushieTime": 0.75,
    "makiTime": 1.25,
    "brochetteTime": 0.75,
    "sashimiTime": 0.75,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Takemi",
    "describeCaracter": "Spécialiste sushie",
    "sushieTime": 2,
    "makiTime": 1,
    "brochetteTime": 1,
    "sashimiTime": 1,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Doloresse",
    "describeCaracter": "Spécialiste brochetteTime",
    "sushieTime": 1,
    "makiTime": 1,
    "brochetteTime": 2,
    "sashimiTime": 1,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Liv",
    "describeCaracter": "Spécialiste Sashimie",
    "sushieTime": 1,
    "makiTime": 1,
    "brochetteTime": 1,
    "sashimiTime": 2,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Hyun-Su",
    "describeCaracter": "Spécialiste Maki",
    "sushieTime": 1,
    "makiTime": 2,
    "brochetteTime": 1,
    "sashimiTime": 1,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Chronos",
    "describeCaracter": "Maitre Du Temps",
    "sushieTime": 1.25,
    "makiTime": 1.25,
    "brochetteTime": 1.25,
    "sashimiTime": 1.25,
    "actifDescription": "PeutManger2fois+vitePendant30Seconde"
},
{
    "name": "Poseidon",
    "describeCaracter": "Maitre Poisson",
    "sushieTime": 1.75,
    "makiTime": 1.75,
    "brochetteTime": 1.75,
    "sashimiTime": 1.75,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Hades",
    "describeCaracter": "Maitre Charbonnier",
    "sushieTime": 0.5,
    "makiTime": 0.5,
    "brochetteTime": 4,
    "sashimiTime": 0.5,
    "actifDescription": "description de l'actif du personnage"
},
{
    "name": "Dionysos",
    "describeCaracter": "Maitre Des Liqueur",
    "sushieTime": 1,
    "makiTime": 1,
    "brochetteTime": 1,
    "sashimiTime": 1,
    "actifDescription": "quandboisunliquidedoubleLaConsomation"
},
{
    "name": "Odin",
    "describeCaracter": "Créateur Des Hommes",
    "sushieTime": 1,
    "makiTime": 1,
    "brochetteTime": 1,
    "sashimiTime": 1,
    "actifDescription": "quandSeulDivinitéGagnex3/seconde"
},
{
    "name": "Freya",
    "describeCaracter": "Déesse De La Beauté",
    "sushieTime": 1,
    "makiTime": 1,
    "brochetteTime": 1,
    "sashimiTime": 1,
    "actifDescription": "QuandSeulPersoFémininGagne x2,5/seconde"
},
{
    "name": "Saga",
    "describeCaracter": "Déesse Poétique",
    "sushieTime": 1.5,
    "makiTime": 1.5,
    "brochetteTime": 1.5,
    "sashimiTime": 1.5,
    "actifDescription": "Donne1coupeDeSakeAchaquePerso"
},
{
    "name": "Ran",
    "describeCaracter": "Ame Tempétueuse",
    "sushieTime": 2.5,
    "makiTime": 2.5,
    "brochetteTime": 1,
    "sashimiTime": 2.5,
    "actifDescription": "gagnex1.5QuandAvecPoissonier"
}];

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

  postCaracter(){
    this.caracterService.postCaracter(this.caracterList[0]);
    // this.caracterList.forEach(caracter => {
    //   console.log(caracter.name);
    //   this.caracterService.postCaracter(caracter);
    // });
  }

  console(): void {
    console.log(this.caracter);
    console.log(this.value);
  }

}

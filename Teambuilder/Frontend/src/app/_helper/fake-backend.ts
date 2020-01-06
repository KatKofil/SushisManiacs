import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User, Caracter, Stuff, Team, TeamCaracter } from '../_model';
import { registerLocaleData } from '@angular/common';

const users: User[] = [
    { idUser: 1, username: 'test', password: 'test', email: 'User', lvlRole:0 },
    { idUser: 2, username: 'test2', password: 'test', email: 'User', lvlRole:0 },

];
const caracters: Caracter[] = [{
    "idCaracter": 0,
    "name": "Roger",
    "describeCaracter": "",
    "sushieTime": 1.5,
    "makiTime": 1,
    "brochetteTime": 0.5,
    "sashimiTime": 0.5,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 1,
    "name": "Sun",
    "describeCaracter": "description du personnage",
    "sushieTime": 1,
    "makiTime": 0.5,
    "brochetteTime": 0.5,
    "sashimiTime": 0.5,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 2,
    "name": "Bjorn",
    "describeCaracter": "description du personnage",
    "sushieTime": 0.5,
    "makiTime": 0.5,
    "brochetteTime": 1,
    "sashimiTime": 0.5,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 3,
    "name": "yumme",
    "describeCaracter": "description du personnage",
    "sushieTime": 0.5,
    "makiTime": 0.5,
    "brochetteTime": 0.5,
    "sashimiTime": 1,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 4,
    "name": "Mysha",
    "describeCaracter": "description du personnage",
    "sushieTime": 0.75,
    "makiTime": 0.75,
    "brochetteTime": 0.75,
    "sashimiTime": 1.25,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 5,
    "name": "Akyo",
    "describeCaracter": "description du personnage",
    "sushieTime": 0.75,
    "makiTime": 0.75,
    "brochetteTime": 1.25,
    "sashimiTime": 0.75,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 6,
    "name": "Roman",
    "describeCaracter": "description du personnage",
    "sushieTime": 1.25,
    "makiTime": 0.75,
    "brochetteTime": 0.75,
    "sashimiTime": 0.75,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 7,
    "name": "Demba",
    "describeCaracter": "description du personnage",
    "sushieTime": 0.75,
    "makiTime": 1.25,
    "brochetteTime": 0.75,
    "sashimiTime": 0.75,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 8,
    "name": "Takemi",
    "describeCaracter": "Spécialiste sushie",
    "sushieTime": 2,
    "makiTime": 1,
    "brochetteTime": 1,
    "sashimiTime": 1,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 9,
    "name": "Doloresse",
    "describeCaracter": "Spécialiste brochetteTime",
    "sushieTime": 1,
    "makiTime": 1,
    "brochetteTime": 2,
    "sashimiTime": 1,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 10,
    "name": "Liv",
    "describeCaracter": "Spécialiste Sashimie",
    "sushieTime": 1,
    "makiTime": 1,
    "brochetteTime": 1,
    "sashimiTime": 2,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 11,
    "name": "Hyun-Su",
    "describeCaracter": "Spécialiste Maki",
    "sushieTime": 1,
    "makiTime": 2,
    "brochetteTime": 1,
    "sashimiTime": 1,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 12,
    "name": "Chronos",
    "describeCaracter": "Maitre Du Temps",
    "sushieTime": 1.25,
    "makiTime": 1.25,
    "brochetteTime": 1.25,
    "sashimiTime": 1.25,
    "actifDescription": "PeutManger2fois+vitePendant30Seconde"
},
{
    "idCaracter": 13,
    "name": "Poseidon",
    "describeCaracter": "Maitre Poisson",
    "sushieTime": 1.75,
    "makiTime": 1.75,
    "brochetteTime": 1.75,
    "sashimiTime": 1.75,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 14,
    "name": "Hades",
    "describeCaracter": "Maitre Charbonnier",
    "sushieTime": 0.5,
    "makiTime": 0.5,
    "brochetteTime": 4,
    "sashimiTime": 0.5,
    "actifDescription": "description de l'actif du personnage"
},
{
    "idCaracter": 15,
    "name": "Dionysos",
    "describeCaracter": "Maitre Des Liqueur",
    "sushieTime": 1,
    "makiTime": 1,
    "brochetteTime": 1,
    "sashimiTime": 1,
    "actifDescription": "quandboisunliquidedoubleLaConsomation"
},
{
    "idCaracter": 16,
    "name": "Odin",
    "describeCaracter": "Créateur Des Hommes",
    "sushieTime": 1,
    "makiTime": 1,
    "brochetteTime": 1,
    "sashimiTime": 1,
    "actifDescription": "quandSeulDivinitéGagnex3/seconde"
},
{
    "idCaracter": 17,
    "name": "Freya",
    "describeCaracter": "Déesse De La Beauté",
    "sushieTime": 1,
    "makiTime": 1,
    "brochetteTime": 1,
    "sashimiTime": 1,
    "actifDescription": "QuandSeulPersoFémininGagne x2,5/seconde"
},
{
    "idCaracter": 18,
    "name": "Saga",
    "describeCaracter": "Déesse Poétique",
    "sushieTime": 1.5,
    "makiTime": 1.5,
    "brochetteTime": 1.5,
    "sashimiTime": 1.5,
    "actifDescription": "Donne1coupeDeSakeAchaquePerso"
},
{
    "idCaracter": 19,
    "name": "Ran",
    "describeCaracter": "Ame Tempétueuse",
    "sushieTime": 2.5,
    "makiTime": 2.5,
    "brochetteTime": 1,
    "sashimiTime": 2.5,
    "actifDescription": "gagnex1.5QuandAvecPoissonier"
}]

const stuffs: Stuff[] = [{
    "idStuff": 0,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi":1.4,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 1,
    "name": "BaguetteBoisEbene",
    "describStuff": "descripion du stuff",
    "pointMaki": 1.4,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 2,
    "name": "BaguetteBoisBambou",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1.4,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 3,
    "name": "BaguetteAcier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1.4,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 4,
    "name": "BaguetteIvoire",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1.4,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 5,
    "name": "BaguetteEcaille",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1.4,
    "saturation": 1,
},
{
    "idStuff": 6,
    "name": "BaguetteFourure",
    "describStuff": "Elle semble bouger de tant a autre",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 0.8,
},
{
    "idStuff": 7,
    "name": "BaguetteEmeraude",
    "describStuff": "1 medikit anti maladie a nimporte quelle perso pendant la run",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 8,
    "name": "BaguetteBonbon",
    "describStuff": "Applique changement quand sauce consommé",
    "pointMaki": 1.3,
    "pointBrochette": 1.3,
    "pointSushi": 1.3,
    "pointSashimi": 1.3,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 9,
    "name": "BaguetteRubie",
    "describStuff": "Applique changement quand wazabi consommé",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 0.6,
},
{
    "idStuff": 10,
    "name": "BaguettePlastique",
    "describStuff": "nouriture rend malade 2.5% chance par bouché",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 0,
},
{
    "idStuff": 11,
    "name": "BaguetteBicephale",
    "describStuff": "30% de chance de doubler les point obtenue de toute les nouritures mais double aussi la saturation",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 12,
    "name": "Relique Bouda",
    "describStuff": "maladie impossible(esprit saint coprs saint)",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 13,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 14,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 15,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 16,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 17,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 18,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 19,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 20,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 21,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 22,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 23,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 24,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 25,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 26,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 27,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 28,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 29,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 30,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 31,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 32,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 33,
    "name": "BaguetteBoisCerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
},
{
    "idStuff": 34,
    "name": "Baguette Bois Cerisier",
    "describStuff": "descripion du stuff",
    "pointMaki": 1,
    "pointBrochette": 1,
    "pointSushi": 1,
    "pointSashimi": 1,
    "timeMaki": 1,
    "timeBrochette": 1,
    "timeSushi": 1,
    "timeSashimi":  1,
    "saturation": 1,
}
]

const teamsList: Team[] =[
    {
        "idTeam": 230,
        "idUser": 1
    },
    {
        "idTeam": 231,
        "idUser": 1
    },
    {
        "idTeam": 232,
        "idUser": 1
    },
    {
        "idTeam": 233,
        "idUser": 1
    },    {
        "idTeam": 234,
        "idUser": 2
    },
    {
        "idTeam": 235,
        "idUser": 2
    },
    {
        "idTeam": 236,
        "idUser": 2
    },
    {
        "idTeam": 237,
        "idUser": 2
    },
]

const teamCaracterList: TeamCaracter[] = [
    {
        "idTeam": 230,
        "idCaracter": 6,
        "idStuff": 3
    },
    {
        "idTeam": 230,
        "idCaracter": 1,
        "idStuff": 7
    },    
    {
        "idTeam": 230,
        "idCaracter": 3,
        "idStuff": 9
    },   
    {
        "idTeam": 230,
        "idCaracter": 1,
        "idStuff": 3
    },    
    {
        "idTeam": 230,
        "idCaracter": 1,
        "idStuff": 2
    },    
    {
        "idTeam": 230,
        "idCaracter": 2,
        "idStuff": 3
    },    
    {
        "idTeam": 231,
        "idCaracter": 1,
        "idStuff": 3
    },    
    {
        "idTeam": 231,
        "idCaracter": 1,
        "idStuff": 3
    },
    {
        "idTeam": 231,
        "idCaracter": 1,
        "idStuff": 3
    },    
    {
        "idTeam": 231,
        "idCaracter": 1,
        "idStuff": 3
    },   
    {
        "idTeam": 231,
        "idCaracter": 1,
        "idStuff": 3
    },    
    {
        "idTeam": 231,
        "idCaracter": 1,
        "idStuff": 3
    },    
    {
        "idTeam": 232,
        "idCaracter": 1,
        "idStuff": 3
    },    
    {
        "idTeam": 232,
        "idCaracter": 1,
        "idStuff": 3
    },
]


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/caracter') && method === 'GET':
                    return caracterList();
                case url.endsWith('/stuff') && method === 'GET':
                    return stuffList();
                case url.endsWith('/stuff/detail') && method === 'POST':
                    return getStuff();
                case url.endsWith('/teams') && method === 'POST':
                    return getTeams();
                case url.endsWith('/team') && method === 'POST':
                    return getTeam();
                case url.endsWith('/caracter/detail') && method === 'POST':
                    return getCaracter();
                // case url.endsWith('/team/upload') && method === 'POST':
                //     return uploadTeam();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function authenticate() {
            const { username, password } = body;
            console.log(body);
            const user = users.find(x => x.username === username && x.password === password);
            console.log(user);
            if (!user) return error('Username or password is incorrect');
            return ok({
                idUser: user.idUser,
                username: user.username,
                email: user.email,
                lvlRole: 0,
                token: 'fake-jwt-token'
            })
        }

        function uploadTeam() {
            const {team} = body;
            console.log(body)
            // teamCaracterList.forEach((element, index) => {
            //     if (element.idTeam === team[0].idTeam)
            //     teamCaracterList.splice(index, 1);
            // });
            console.log(team)
            console.log(teamCaracterList);
        }

        function getStuff() {
            const { id } = body;
            const stuff = stuffs.find(x => x.idStuff === id);
            if (!stuff) return error('Stuff non trouvé');
            return ok({stuff});
        }

        function getCaracter() {
            const { id } = body;
            const caracter = caracters.find(x => x.idCaracter === id);
            if (!caracter) return error('Stuff non trouvé');
            return ok({caracter});
        }

        function getTeams() {
            const { idUser } = body;
            const teams = teamsList.filter(x => x.idUser === idUser);
            if (!teams) return error('Teams non trouvé');
            return ok({teams});
        }
        
        function getTeam() {
            const { idTeam } = body;
            const team = teamCaracterList.filter(x => x.idTeam === idTeam);
            console.log(idTeam)
            if (!team) return error('Team non trouvé');
            return ok({team});
        }


        function caracterList() {
            console.log(caracters)
            return ok(caracters)
        }

        function stuffList() {
            console.log(stuffs)
            return ok(stuffs)
        }

        function register() {
            const {username, password, email} = body
            const user: User = {idUser : 2, username: username, password : password, email: email, lvlRole: 1};
            users.push(user)
            console.log(users)
            return ok({
                idUser: user.idUser,
                username: user.username,
                email: user.email,
                lvlRole: user.lvlRole,
                token: 'fake-jwt-token'
            })
        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
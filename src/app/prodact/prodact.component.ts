import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-prodact',
  templateUrl: './prodact.component.html',
  styleUrls: ['./prodact.component.css']
})
export class ProdactComponent implements OnInit {
  chackeAddCountry: Boolean = false;
  chackeAddCity: Boolean = false;
  chackeAddProdact: Boolean = false;
  messageErrorCountry: any
  messageErrorCity: any
  messageErrorProdacts: any
  public business: any[] = [
    {
      id: 1, name: "abdo", images: [{ path: "upload/imag.jpg" }, { path: "upload/imag.jpg" }], description: "this is frist prodact", lat: 3033.0, lang: 363696.1, country: "Egypt", city: "cairo", status: true, location: {
        coordinates: [3033.0, 363696.1], country: "Egypt", city: "cario", formattedAddress: "Egypt cairo "
      }
    },
    {
      id: 2, name: "mody", images: [{ path: "upload/imag.jpg" }, { path: "upload/imag.jpg" }], description: "this is frist prodact", lat: 3033.0, lang: 363696.1, country: "AU", city: "Read", status: true, location: {
        coordinates: [3033.0, 363696.1], country: "AU", city: "Read", formattedAddress: "AU Read "
      }
    },
    {
      id: 3, name: "bs", images: [{ path: "upload/imag.jpg" }, { path: "upload/imag.jpg" }], description: "this is frist prodact", lat: 3033.0, lang: 363696.1, country: "US", city: "New", status: true, location: {
        coordinates: [3033.0, 363696.1], country: "US", city: "New", formattedAddress: "US New "
      }, dataOut: Date.now()
    }
  ];
  prodactsFilter:any = []
  filterCity:any;
  filtercountry:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  public countries: any[] = [
    { name: "Egypt", id: 1 },
    { name: "US", id: 2 },
    { name: "AU", id:3 },
  ]

  public cities = [{ name: "cairo", id: 1, NameCountry: "Egypt" },{ name: "New", id: 1, NameCountry: "US" },{ name: "Read", id: 1, NameCountry: "AU" }]

  Countries: any = {
    name: "",
    id: ';'
  }
  Cities: any = {
    id: '',
    name: '',
    NameCountry: ''
  }
  Prodacts: any = {
    id: '', name: '', country: '', city: '', description: '', location: {
      country: '', city: '', formattedAddress: '', coordinates: []
    }, images: [{ path: '' }], status: '', lat: '', lang: ''
  }
  citesByCountry: any = []
  add() {
    return this.chackeAddCountry = true
  }
  addCitChack() {
    return this.chackeAddCity = true
  }
  addProdactChack() {
    return this.chackeAddProdact = true
  }
  addCountry() {
    for (let index = 0; index < this.countries.length; index++) {
      const element = this.countries[index];
      let chack = false

      if (this.Countries.name == '') {
        chack = true
        index = this.cities.length - 1
        return this.messageErrorCountry = `you must add  value for Country , you can't leave this input is empty `
      }
      else if (this.Countries.id == '') {
        chack = true
        index = this.cities.length - 1
        return this.messageErrorCountry = `you must add  value for id , you can't leave this input is empty `
      }

      else if (element.name == this.Countries.name) {
        return this.messageErrorCountry = `you must add uinq name for Country this name country : ${this.Countries.name} already take befor `
      }
      else if (element.id == this.Countries.id) {
        return this.messageErrorCountry = `you must add uinq id for Country this id : ${this.Countries.id} already take befor `

      }
      if (chack == false) {
        index = this.cities.length - 1
        this.countries.push({ name: this.Countries.name, id: this.Countries.id })
        this.Countries = {
          name: "",
          id: ''
        }
        this.messageErrorCountry = ''
        return this.chackeAddCountry = false;
      }
    }
    return;
  }
  addCity() {
    for (let index = 0; index < this.cities.length; index++) {
      let chack = false
      const element = this.cities[index];
      if (this.Cities.name == '') {
        chack = true
        index = this.cities.length - 1
        return this.messageErrorCity = `you must add  value for City , you can't leave this input is empty `
      }
      else if (this.Cities.id == '') {
        index = this.cities.length - 1
        chack = true
        return this.messageErrorCity = `you must add  value for id , you can't leave this input is empty `
      }
      else if (this.Cities.NameCountry == '') {
        index = this.cities.length - 1
        chack = true
        return this.messageErrorCity = `you must choose country for this city , you can't leave this input is empty `
      }
      else if (element.name == this.Cities.name) {
        index = this.cities.length - 1
        chack = true
        return this.messageErrorCity = `you must add uinq name for City this name country : ${this.Cities.name} already take befor `
      }
      else if (element.id == this.Cities.id) {
        index = this.cities.length - 1
        chack = true
        return this.messageErrorCity = `you must add uinq id for City this id : ${this.Cities.id} already take befor `
      }
      if (chack == false) {
        this.cities.push({ name: this.Cities.name, id: this.Cities.id, NameCountry: this.Cities.NameCountry })
        this.Cities = {
          name: "",
          id: '',
          NameCountry: ''
        }
        this.messageErrorCity = ""
        return this.chackeAddCity = false;
      }

    }
    return;
  }
  addProdact() {
    for (let index = 0; index < this.business.length; index++) {
      let chcke = false
      const element = this.business[index];
      if (this.Prodacts.name == "" || this.Prodacts.id == '' || this.Prodacts.location.country == "" || this.Prodacts.location.city == "" || this.Prodacts.lang == "" || this.Prodacts.lat == "") {
        index = this.business.length - 1
        chcke = true
        return this.messageErrorProdacts = "please do not leave those inputs are empty"
      }
      else if (element.id == this.Prodacts.id) {
        chcke = true
        index = this.business.length - 1
        return this.messageErrorProdacts = `you must add uinq name for prodact this name prodact : ${this.Prodacts.id} already take befor`
      }
      else if (element.name == this.Prodacts.name) {
        index = this.business.length - 1
        chcke = true
        return this.messageErrorProdacts = `you must add uinq id for prodact this id prodact : ${this.Prodacts.name} already take befor`
      }
      if (chcke == false) {
        index = this.business.length - 1
        this.business.push({
          id: this.Prodacts.id, country: this.Prodacts.location.country, city: this.Prodacts.location.city, name: this.Prodacts.name, description: this.Prodacts.description, images: [{ path: 'http://lcoalhost:4200' }],
          status: this.Prodacts.status, location: {
            country: this.Prodacts.location.country, city: this.Prodacts.location.city, formattedAddress: `${this.Prodacts.location.country} ${this.Prodacts.location.city}`,
            coordinates: [this.Prodacts.lat, this.Prodacts.lang]
          }
        })
        console.log(this.business);

        return this.chackeAddProdact = false
      }
    }
    return;
  }
  deletCountry(index: any) {
    if (index > -1) {
      this.countries.splice(index, 1);
    }
  }
  deletCity(index: any) {
    if (index > -1) {
      this.cities.splice(index, 1);
    }
  }
  deletProdact(index: any) {
    if (index > -1) {
      this.business.splice(index, 1);
    }
  }
  findCitiesByCountry(country: string) {
    this.cities.find((city: any) => {
      if (country == city.NameCountry) {
        console.log(this.citesByCountry);
        this.citesByCountry.push({ name: city.name })
        console.log(this.citesByCountry);
      }
      return;
    })
  }
  filterProdactsByCity(city: string) {
    const result = this.business.filter((prodact: any) => {
      return city == prodact.city
    })
    this.prodactsFilter = result
  }
  filterProdactsByCountry(country: string) {        
    const result = this.business.filter((prodact: any) => {
      return country == prodact.country
    })
    this.prodactsFilter = result
  }
  constructor() { }
  ngOnInit(): void {
    this.filterCity ='';
    this.filtercountry = '';
    this.prodactsFilter = this.business
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}

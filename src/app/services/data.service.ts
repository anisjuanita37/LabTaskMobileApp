import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public negeri: any = [];
  
  constructor() {
    this.negeri = [
      { name: "kelantan", no:"1111" , image:"assets/nugget.jpg", page: "terengganu"},
      { name: "terengganu", no:"2112", image: "assets/favicon.png", page : "terengganu"},
      { name: "perak", no :"3112" ,  image: "assets/shapes.svg", page: "perak"},
      { name: "selangor", no: "4343", image: "assets/nugget.jpg", page: "perak"}
    ];
  }

  filterItems(searchTerm: string){
    return this.negeri.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1;
    });
  }

}

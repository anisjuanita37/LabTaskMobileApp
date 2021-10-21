import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {
  public searchTerm: string = "";
  public items: any;

  constructor(private dataService: DataService, private route:Router) { }

  ngOnInit() { this.setFilteredItems() }

  setFilteredItems() {
     this.items = this.dataService.filterItems(this.searchTerm);
  }

  onDirectPage(items){
this.route.navigate(['/',items.page])
  }
    
}

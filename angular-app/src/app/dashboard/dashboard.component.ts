import { Component } from '@angular/core';
import { DashBoardService } from './dashboard.service';
import { ResponseDetailsResult, VehicleSearch } from './dashboard.models';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent {
  title = 'Customer Vehicles Dashboard';
  constructor(private dashboardService: DashBoardService) { }
  heroes: ResponseDetailsResult = { itemsList: [] };
  searchTag = "";
  public loading = false;
  ngOnInit() {
    this.loadAllVehicles();
  }
  loadAllVehicles(): void {
    
    this.loading = true;
    this.dashboardService.search(this.searchTag).subscribe(heroes => {
      //console.table(heroes.itemsList);
      this.heroes = heroes
      this.loading = false;
      this.refreshData();
    });
  }
  refreshData() {
    interval(10000).pipe(
      map((x) => {

        this.loadAllVehicles();
      })
    );
  }
  search(): void {
    this.loadAllVehicles();
  }

  keyDownFunction($event: any): void {
    if (event["keyCode"] == 13) {
      this.loadAllVehicles();
    }
  }
}



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Client } from '../model/client.model';

// @Injectable()
// export class ClientService {
//   constructor(private http: HttpClient) { }
//   url = 'http://localhost:8080/api/clients';

//   getAll() {
//     return this.http.get<Client[]>(this.url);
//   }

//   getById(id: number) {
//     return this.http.get<Client>(this.url + '/' + id);
//   }

//   create(Client: Client) {
//     return this.http.post(this.url, Client);
//   }

//   update(Client: Client) {
//     return this.http.put(this.url + '/' + Client.id, Client);
//   }

//   delete(id: number) {
//     return this.http.delete(this.url + '/' + id);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 import {ResponseDetailsResult,VehicleSearch} from './dashboard.models'
@Injectable({
providedIn: 'root',
})
export class DashBoardService {
 
constructor(private http: HttpClient) { }

    public search(search): Observable<any> {
         if(search=='')
         search='all' ;
        return this.http.get(`https://alten-customer-apis.azurewebsites.net/api/customer/GetAllVehicles/${search}`);
         
    }
} 
 
 
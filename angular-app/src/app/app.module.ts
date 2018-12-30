import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import {DashBoardService} from './dashboard/dashboard.service' ;
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [DashBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

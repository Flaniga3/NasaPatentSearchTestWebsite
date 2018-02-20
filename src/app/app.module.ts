import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { NasaPatentService } from './Services/nasa-patent.service';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    HttpClientModule,
    FormsModule,
    Angular2FontawesomeModule,
    PaginationModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    NasaPatentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

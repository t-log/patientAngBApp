import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { SearchandDeleteComponent } from './searchand-delete/searchand-delete.component';

const myRoute:Routes=[{path:"",component:AddPatientComponent},
                      {path:"add",component:AddPatientComponent},
                      {path:"view",component:ViewAllComponent},
                      {path:"search",component:SearchandDeleteComponent},]

@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    NavBarComponent,
    ViewAllComponent,
    SearchandDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ModalComponent} from "./modal/modal.component";


const appRoutes : Routes = [{
  path: 'search', component: SearchResultsComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchResultsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

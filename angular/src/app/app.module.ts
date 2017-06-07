import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

// One for each route
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [ BrowserModule, RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent }
  ]) ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, NavbarComponent ]
})
export class AppModule { }

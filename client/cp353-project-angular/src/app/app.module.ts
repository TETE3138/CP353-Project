import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {RouterModule , Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';


export const routes:Routes = [
  {path: '',component: HomeComponent},
  {path: 'aboutus',component: AboutusComponent},
  {path: 'signup',component: SignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
  BrowserModule,
   RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

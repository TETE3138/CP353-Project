import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import {UserManagementService} from './services/user-management.service';
import { GetNotebookService } from './services/getnotebook.service'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

export const routes:Routes = [
  {path: '',component: HomeComponent},
  {path: 'aboutus',component: AboutusComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'signin',component: SigninComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [GetNotebookService,UserManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
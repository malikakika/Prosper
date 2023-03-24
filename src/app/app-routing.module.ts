import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import{ LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { QcmComponent } from './qcm/qcm.component';
import { BrowserModule } from  '@angular/platform-browser'; 
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { GestionprofileComponent } from './gestionprofile/gestionprofile.component';
import { GestionlicenseComponent } from './gestionlicense/gestionlicense.component';
import { GestioncategorieComponent } from './gestioncategorie/gestioncategorie.component';
import { GestionqcmComponent } from './gestionqcm/gestionqcm.component';
import { InterfaceCandidatComponent } from './interface-candidat/interface-candidat.component';
import { LicenseComponent } from './license/license.component';
import {TesteComponent} from "./teste/teste.component";
import { UmlComponent } from './uml/uml.component';

const routes: Routes = [

  { path: '', redirectTo:'home',pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'teste', component: TesteComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'qcm', component: QcmComponent },
  { path: 'gestionprofile', component: GestionprofileComponent },
  { path: 'gestionlicense', component: GestionlicenseComponent },
  { path: 'gestioncategorie', component: GestioncategorieComponent },
  { path: 'gestionqcm', component: GestionqcmComponent },
  { path: 'interface-admin', component: InterfaceAdminComponent },
  {path :'interface-candidat',component:InterfaceCandidatComponent},
  {path :'uml',component:UmlComponent},
  
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

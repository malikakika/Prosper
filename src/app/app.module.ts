import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {LoginComponent} from './login/login.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SigninComponent } from './signin/signin.component';
import {MatRadioModule} from '@angular/material/radio';
import { QcmComponent } from './qcm/qcm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { QcmElementComponent } from './qcm-element/qcm-element.component';
import { GestionqcmComponent } from './gestionqcm/gestionqcm.component';
import { GestionprofileComponent } from './gestionprofile/gestionprofile.component';
import { GestionlicenseComponent } from './gestionlicense/gestionlicense.component';
import { GestioncategorieComponent } from './gestioncategorie/gestioncategorie.component';
import { InterfaceInstructeurComponent } from './interface-instructeur/interface-instructeur.component';
import { InterfaceCandidatComponent } from './interface-candidat/interface-candidat.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SujetComponent } from './sujet/sujet.component';
import { NotifierModule } from 'angular-notifier';
import { LicenseComponent } from './license/license.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TesteComponent } from './teste/teste.component';
import {HttpClientModule} from "@angular/common/http";
import { UmlComponent } from './uml/uml.component';









@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SigninComponent,
    QcmComponent,
    InterfaceAdminComponent,
    QcmElementComponent,
    GestionqcmComponent,
    GestionprofileComponent,
    GestionlicenseComponent,
    GestioncategorieComponent,
    InterfaceInstructeurComponent,
    InterfaceCandidatComponent,
    SujetComponent,
    LicenseComponent,
    TesteComponent,
    UmlComponent,
    
  ],
  imports: [
    HttpClientModule,
    FontAwesomeModule,
    FlexLayoutModule,
    NotifierModule,
    RouterModule,
    MatGridListModule,
    MatToolbarModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularMaterialModule } from '../angular-material.module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { EditGamehouseComponent } from './pages/edit-gamehouse/edit-gamehouse.component';
import { GamehouseComponent } from './pages/gamehouse/gamehouse.component';
import { LoginComponent } from './pages/login/login.component';
import { RegristasiComponent } from './pages/regristasi/regristasi.component';
import { TambahGamehouseComponent } from './pages/tambah-gamehouse/tambah-gamehouse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditGamehouseComponent,
    TambahGamehouseComponent,
    GamehouseComponent,
    LoginComponent,
    RegristasiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

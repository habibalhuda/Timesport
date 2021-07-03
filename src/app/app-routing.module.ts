import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { EditGamehouseComponent } from './pages/edit-gamehouse/edit-gamehouse.component';
import { GamehouseComponent } from './pages/gamehouse/gamehouse.component';
import { LoginComponent } from './pages/login/login.component';
import { RegristasiComponent } from './pages/regristasi/regristasi.component';
import { TambahGamehouseComponent } from './pages/tambah-gamehouse/tambah-gamehouse.component';

const routes: Routes = [
  { path: 'index', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gamehouse', component: GamehouseComponent },
  { path: 'edit-gamehouse/:id', component: EditGamehouseComponent },
  { path: 'tambah-gamehouse', component: TambahGamehouseComponent },
  { path: 'regristasi', component: RegristasiComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

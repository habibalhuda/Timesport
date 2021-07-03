import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { GamehouseService } from 'src/app/services/gamehouse.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  data!: Login;

  constructor(
    public gamehouseService: GamehouseService,
    public router: Router
  ) {
    this.data = new Login();
  }

  ngOnInit(): void {}

  login() {
    this.router.navigate(['home']);
  }

  daftar() {
    this.router.navigate(['registrasi']);
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, Validators } from '@angular/forms';
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
  user: any = {};

  constructor(
    public gamehouseService: GamehouseService,
    public router: Router,
    public auth: AngularFireAuth
  ) {
    this.data = new Login();
  }

  ngOnInit(): void {}

  hide: boolean = true;

  // form validation
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.minLength(6),
    Validators.required,
  ]);

  // register
  loading!: boolean;
  login(user: any) {
    this.loading = true;
    alert('Login berhasil');
    this.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        this.loading = false;
        this.router.navigate(['home']);
      })
      .catch((err) => {
        this.loading = false;
        alert('Tidak dapat login');
      });
  }
}

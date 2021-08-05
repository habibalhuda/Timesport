import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regristasi',
  templateUrl: './regristasi.component.html',
  styleUrls: ['./regristasi.component.css'],
})
export class RegristasiComponent implements OnInit {
  user: any = {};
  constructor(private router: Router, public auth: AngularFireAuth) {}

  ngOnInit(): void {}

  hide: boolean = true;

  // form validation
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.minLength(6),
    Validators.required,
  ]);

  //register
  loading!: boolean;
  register(user: any) {
    this.loading = true;
    alert('Regristasi berhasil');
    this.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        this.loading = false;
        alert('Regristrasi berhasil');
        this.router.navigate(['auth/login']);
      })
      .catch((err) => {
        this.loading = false;
        alert('Ada masalah..');
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regristasi',
  templateUrl: './regristasi.component.html',
  styleUrls: ['./regristasi.component.css'],
})
export class RegristasiComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate(['login']);
  }

  daftar() {
    this.router.navigate(['registrasi']);
  }
}

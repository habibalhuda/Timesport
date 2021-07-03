import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GHS } from 'src/app/models/GHS';
import { GamehouseService } from 'src/app/services/gamehouse.service';

@Component({
  selector: 'app-tambah-gamehouse',
  templateUrl: './tambah-gamehouse.component.html',
  styleUrls: ['./tambah-gamehouse.component.css'],
})
export class TambahGamehouseComponent implements OnInit {
  data: GHS;
  dialogRef: any;

  constructor(
    public mahasiswaService: GamehouseService,
    public router: Router,
    public dialog: MatDialog
  ) {
    this.data = new GHS();
  }

  ngOnInit() {}
  submitForm() {
    const dialogRef = this.dialog;
    this.mahasiswaService.create(this.data).subscribe((res) => {
      console.log(res);
      alert('Berhasil Menambahkan Data Mahasiswa');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GamehouseService } from 'src/app/services/gamehouse.service';
import { TambahGamehouseComponent } from '../tambah-gamehouse/tambah-gamehouse.component';

@Component({
  selector: 'app-gamehouse',
  templateUrl: './gamehouse.component.html',
  styleUrls: ['./gamehouse.component.css'],
})
export class GamehouseComponent implements OnInit {
  data!: any;
  id!: number;

  getdata: any = [];
  getData() {
    this.gamehouseService.findAll().subscribe((res) => {
      this.data = res;
    });
  }

  constructor(
    public gamehouseService: GamehouseService,
    public dialog: MatDialog,
    public router: Router
  ) {
    this.getData();
  }

  ngOnInit() {}

  find() {
    this.gamehouseService.find(this.id).subscribe((res) => {
      this.data = res;
    });
  }
  tambahGHS(data: any, id: any) {
    const dialogRef = this.dialog.open(TambahGamehouseComponent, {
      width: '450px',
      data: data,
      id,
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.data = res;
    });
  }

  edit() {
    const dialogRef = this.dialog.open(TambahGamehouseComponent, {
      width: '450px',
      data: this.id,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.find();
    });
  }

  delete(id: any) {
    //hapus data mahasiswa sesuai nim
    var r = confirm('Anda yakin ingin menghapus data ini secara permanen ?');
    if (r == true) {
      this.gamehouseService.delete(id).subscribe((res) => {
        console.log(res);
        this.data = res;
      });

      //memuat ulang data setelah berhasil hapus data
    } else {
      return;
    }
  }
}

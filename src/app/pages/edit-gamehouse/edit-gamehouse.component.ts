import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GHS } from 'src/app/models/GHS';
import { GamehouseService } from 'src/app/services/gamehouse.service';
@Component({
  selector: 'app-edit-gamehouse',
  templateUrl: './edit-gamehouse.component.html',
  styleUrls: ['./edit-gamehouse.component.css'],
})
export class EditGamehouseComponent implements OnInit {
  data!: GHS;
  id!: number;
  form!: FormGroup;
  isAddMode!: boolean;
  loading = false;
  sumbit = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gamehouseService: GamehouseService,
    private location: Location,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nama: new FormControl('', [Validators.required]),
      alamat: new FormControl(''),
      region: new FormControl(''),
      pemilik: new FormControl(''),
      open: new FormControl(''),
      regristasi: new FormControl(''),
      jumlahslot: new FormControl(''),
    });

    this.data = new GHS();
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = parseInt(params.get('id') || '{}');
      if (params) {
        this.gamehouseService
          .find(params.get('id') || '{}')
          .subscribe((res) => {
            if (res) {
              let data: any = res;
              this.form = this.fb.group({
                id: data.id,
                nama: [data.nama, Validators.required],
                alamat: data.alamat,
                region: data.region,
                pemilik: data.pemilik,
                open: data.open,
                regristasi: data.regristasi,
                jumlahslot: data.jumlahslot,
              });
            }
          });
      }
    });
  }

  parseData(res: any) {
    for (var i = 0; i < res.length; i++) {
      if (res) {
        console.log(res.get('id'));
      }
    }
  }

  find(id: number): void {
    this.gamehouseService.find(id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  update(id: number) {
    let mobile: GHS = this.form.value;
    this.gamehouseService.update(mobile).subscribe((res) => {
      res = id;
    });
    this.route.navigate(['gamehouse']);
  }
}

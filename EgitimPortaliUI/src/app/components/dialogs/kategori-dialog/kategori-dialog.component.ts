import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Kategori } from 'src/app/models/Kategori';


@Component({
  selector: 'app-alert-dialog',
  templateUrl: './kategori-dialog.component.html',
  styleUrls: ['./kategori-dialog.component.css']
})
export class kategoriDialogComponent implements OnInit {
  dialogbaslik: string;
  yeniKayit:Kategori;
  islem: string;
  frm: FormGroup;
  constructor(
    public dialogref: MatDialogRef<kategoriDialogComponent>,
    public frmBuild:FormBuilder,
    
    
  ) { 
    
    if(this.islem=="ekle"){
      this.dialogbaslik="Kategori Ekle"
      this.yeniKayit=new Kategori ();
    }
    if(this.islem=="duzenle"){
      this.dialogbaslik="Kategori duzenle"
      
    }
    this.frm=this.formOlustur();
  }

  ngOnInit() {
  }

  formOlustur(){
    return this.frmBuild.group({
      kategoriAdi:[this.yeniKayit.KategoriAdi]
    });
  }

}

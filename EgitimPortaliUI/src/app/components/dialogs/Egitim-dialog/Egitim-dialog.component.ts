import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Egitim } from 'src/app/models/Egitim';
import { Kategori } from 'src/app/models/Kategori';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-Egitim-dialog',
  templateUrl: './Egitim-dialog.component.html',
  styleUrls: ['./Egitim-dialog.component.css']
})
export class EgitimDialogComponent implements OnInit {
  dialogbaslik: string;
  yeniKayit:Egitim;
  islem: string;
  frm: FormGroup;
  kategori : Kategori[];
  kategoriler: any;
  dialogMesaj: string;
  constructor(
    public dialogref: MatDialogRef<EgitimDialogComponent>,
    public frmBuild:FormBuilder,
    public apiServis:ApiService,
    
  ) { 
    
    if(this.islem=="ekle"){
      this.dialogbaslik="Egitim Ekle"
      this.yeniKayit=new Egitim ();
    }
    if(this.islem=="duzenle"){
      this.dialogbaslik="Egitim duzenle"
      
    }
    this.frm=this.formOlustur();
  }

  ngOnInit() {
  }

  formOlustur(){
    return this.frmBuild.group({
      Baslik:[this.yeniKayit.Baslik],
      Icerik:[this.yeniKayit.Icerik],
      kategoriId:[this.yeniKayit.KategoriId],
    });
  }

}

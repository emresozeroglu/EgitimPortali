import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { EgitimDialogComponent } from 'src/app/components/dialogs/Egitim-dialog/Egitim-dialog.component';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { kategoriDialogComponent } from 'src/app/components/dialogs/kategori-dialog/kategori-dialog.component';
import { Egitim } from 'src/app/models/Egitim';
import { Kategori } from 'src/app/models/Kategori';
import { Sonuc } from 'src/app/models/Sonuc';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-egitim.component.html',
  styleUrls: ['./admin-egitim.component.css']
})
export class AdminegitimComponent implements OnInit {
$eventvalue: any;
katId: number;
kategoriler: any;
secKat:Kategori;
uyeId :number;
KategoriSec(kat : Kategori) {
this.katId = kat.KategoriId;

}
  Egitimler:Egitim[];
  dataSource: any;
  displayedColumns=['Baslik','Tarih','Uyekadi','gosterim','detay'];
  @ViewChild(MatSort) sort :MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  dialogref:MatDialogRef<EgitimDialogComponent>;
  dialogrefConfirm:MatDialogRef<EgitimDialogComponent>;
  constructor(
    public apiServis: ApiService,
    public matDialog : MatDialog,
    public route : ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    this.uyeId=parseInt(localStorage.getItem("uid"));
  }
  ekle(){
    var yenikayit : Egitim=new Egitim ();
    this.dialogref=this.matDialog.open(EgitimDialogComponent,{
      width: '400px',
      data:{
        kayit: yenikayit,
        islem: 'ekle'
      }
    });
    this.dialogref.afterClosed().subscribe(d =>{
      console.log(d);
    });

  }

  duzenle(kayit:Egitim){
    this.dialogref=this.matDialog.open(EgitimDialogComponent,{
      width: '400px',
      data:{
        kayit: kayit,
        islem: 'duzenle'
      }
    });
    this.dialogref.afterClosed().subscribe(d =>{
      if(d){
         const yeniKayit = d;
         yeniKayit.Foto="foto.jpg"
         yeniKayit.Tarih= new Date();
         yeniKayit.gosterim=0;
         yeniKayit.uyeId=this.uyeId;
         
      }
    });
  }

  Sil(kayit:Egitim){
    this.dialogrefConfirm=this.matDialog.open(EgitimDialogComponent,{
      width:'400px',
    });
    this.dialogrefConfirm.componentInstance.dialogMesaj=kayit.EgitimId + "Eğitim Silinecektir Onaylıyor musunuz?";
    this.dialogrefConfirm.afterClosed().subscribe(d =>{
      console.log(d);
    });
  }
}

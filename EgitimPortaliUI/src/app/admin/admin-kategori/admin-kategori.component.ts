import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { kategoriDialogComponent } from 'src/app/components/dialogs/kategori-dialog/kategori-dialog.component';
import { Kategori } from 'src/app/models/Kategori';
import { Sonuc } from 'src/app/models/Sonuc';
import { ApiService } from 'src/app/services/api.service';




@Component({
  selector: 'app-admin',
  templateUrl: './admin-kategori.component.html',
  styleUrls: ['./admin-kategori.component.css']
})
export class AdminkategoriComponent implements OnInit {
  kategoriler:Kategori[];
  dataSource: any;
  displayedColumns=['KategoriAdi','KatEgitimSay','detay'];
  @ViewChild(MatSort) sort :MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  dialogref:MatDialogRef<kategoriDialogComponent>;
  dialogrefConfirm:MatDialogRef<ConfirmDialogComponent>;
  constructor(
    public apiServis: ApiService,
    public matDialog : MatDialog,
    
  ) { }

  ngOnInit(): void {
    
  }

  ekle(){
    var yenikayit : Kategori=new Kategori ();
    this.dialogref=this.matDialog.open(kategoriDialogComponent,{
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

  duzenle(kayit:Kategori){
    this.dialogref=this.matDialog.open(kategoriDialogComponent,{
      width: '400px',
      data:{
        kayit: kayit,
        islem: 'duzenle'
      }
    });
    this.dialogref.afterClosed().subscribe(d =>{
      console.log(d);
    });
  }

  Sil(kayit:Kategori){
    this.dialogrefConfirm=this.matDialog.open(ConfirmDialogComponent,{
      width:'400px',
    });
    this.dialogrefConfirm.componentInstance.dialogMesaj=kayit.KategoriAdi + "Kategorisi Silinecektir Onaylıyor musunuz?";
    this.dialogrefConfirm.afterClosed().subscribe(d =>{
      console.log(d);
    });
  }



}

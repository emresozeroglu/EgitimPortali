import { Yorum } from './../models/Yorum';
import { Uye } from './../models/Uye';
import { Egitim } from '../models/Egitim';
import { Kategori } from './../models/Kategori';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = "http://localhost:8748/api/";

  constructor(
    public http: HttpClient
  ) { }

  /*   Oturum İşlemleri Başla  */
  tokenAl(kadi: string, parola: string) {
    var data = "username=" + kadi + "&password=" + parola + "&grant_type=password";
    var reqHeader = new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded" });
    return this.http.post(this.apiUrl + "/token", data, { headers: reqHeader });
  }
  oturumKontrol() {
    if (localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }

  yetkiKontrol(yetkiler: any[]) {
    var sonuc: boolean = false;

    var uyeYetkiler: string[] = JSON.parse(localStorage.getItem("uyeYetkileri"));

    if (uyeYetkiler) {
      yetkiler.forEach(element => {
        if (uyeYetkiler.indexOf(element) > -1) {
          sonuc = true;
        }
      });
    }

    return sonuc;
  }

  /*   Oturum İşlemleri Bitiş  */


  /*  API  */

  KategoriListe() {
    return this.http.get(this.apiUrl + "/kategoriliste");
  }
  KategoriById(katId: number) {
    return this.http.get(this.apiUrl + "/kategoribyid/" + katId);
  }
  KategoriEkle(kat: Kategori) {
    return this.http.post(this.apiUrl + "/kategoriekle", kat);
  }
  KategoriDuzenle(kat: Kategori) {
    return this.http.put(this.apiUrl + "/kategoriduzenle", kat);
  }
  KategoriSil(katId: number) {
    return this.http.delete(this.apiUrl + "/kategorisil/" + katId);
  }

  EgitimListe() {
    return this.http.get(this.apiUrl + "/Egitimliste");
  }
  EgitimListeSonEklenenler(s: number) {
    return this.http.get(this.apiUrl + "/Egitimlistesoneklenenler/" + s);
  }
  EgitimListeByKatId(katId: number) {
    return this.http.get(this.apiUrl + "/Egitimlistebykatid/" + katId);
  }
  EgitimListeByUyeId(uyeId: number) {
    return this.http.get(this.apiUrl + "/Egitimlistebyuyeid/" + uyeId);
  }
  EgitimById(EgitimId: number) {
    return this.http.get(this.apiUrl + "/Egitimbyid/" + EgitimId);
  }
  EgitimEkle(Egitim: Egitim) {
    return this.http.post(this.apiUrl + "/Egitimekle", Egitim);
  }
  EgitimDuzenle(Egitim: Egitim) {
    return this.http.put(this.apiUrl + "/Egitimduzenle", Egitim);
  }
  EgitimSil(EgitimId: number) {
    return this.http.delete(this.apiUrl + "/Egitimsil/" + EgitimId);
  }

  UyeListe() {
    return this.http.get(this.apiUrl + "/uyeliste");
  }
  UyeById(uyeId: number) {
    return this.http.get(this.apiUrl + "/uyebyid/" + uyeId);
  }
  UyeEkle(uye: Uye) {
    return this.http.post(this.apiUrl + "/uyeekle", uye);
  }
  UyeDuzenle(uye: Uye) {
    return this.http.put(this.apiUrl + "/uyeduzenle", uye);
  }
  UyeSil(uyeId: number) {
    return this.http.delete(this.apiUrl + "/uyesil/" + uyeId);
  }

  YorumListe() {
    return this.http.get(this.apiUrl + "/yorumliste");
  }
  YorumListeByUyeId(uyeId: number) {
    return this.http.get(this.apiUrl + "/yorumlistebyuyeid/" + uyeId);
  }
  YorumListeByEgitimId(EgitimId: number) {
    return this.http.get(this.apiUrl + "/yorumlistesoneklenenler/" + EgitimId);
  }
  YorumListeSonEklenenler(s: number) {
    return this.http.get(this.apiUrl + "/yorumliste/" + s);
  }
  YorumById(yorumId: number) {
    return this.http.get(this.apiUrl + "/yorumbyid/" + yorumId);
  }
  YorumEkle(yorum: Yorum) {
    return this.http.post(this.apiUrl + "/yorumekle", yorum);
  }
  YorumDuzenle(yorum: Yorum) {
    return this.http.put(this.apiUrl + "/yorumduzenle", yorum);
  }
  YorumSil(yorumId: number) {
    return this.http.delete(this.apiUrl + "/yorumsil/" + yorumId);
  }
}

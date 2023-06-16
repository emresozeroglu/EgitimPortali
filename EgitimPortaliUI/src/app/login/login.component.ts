import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertService } from '../services/alert.service';
import { Sonuc } from '../models/Sonuc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public apiServis: ApiService,
    public Alert : AlertService,
  ) { }

  ngOnInit(): void {
  }
  OturumAc(kadi:string, parola: string){
    this.apiServis.tokenAl(kadi, parola).subscribe((d:any) => {
      localStorage.setItem("token", d.access_token);
      localStorage.setItem("uid", d.uyeId);
      localStorage.setItem("kadi", d.uyeKadi);
      localStorage.setItem("uyeYetkiler", d.uyeYetkileri);
      location.href="/";
    },err =>{
      var s: Sonuc = new Sonuc();
      s.islem = false;
      s.mesaj ="Kullanıcı adı veya parola geçersiz."
      this.Alert.AlertUygula(s);
      
    });
  }

}

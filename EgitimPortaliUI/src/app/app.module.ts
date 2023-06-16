import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminuyeComponent } from './admin/admin-uye/admin-uye.component';
import { AdminkategoriComponent } from './admin/admin-kategori/admin-kategori.component';
import { AdminegitimComponent } from './admin/admin-egitim/admin-egitim.component';
import { kategoriDialogComponent } from './components/dialogs/kategori-dialog/kategori-dialog.component';
import { EgitimDialogComponent } from './components/dialogs/Egitim-dialog/Egitim-dialog.component';
import { ApiService } from './services/api.service';
import { AuthInterceptor } from './services/AuthInterceptor';
import { AuthGuard } from './services/AuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    LoginComponent,

    //Admin
    AdminComponent,
    AdminuyeComponent,
    AdminkategoriComponent,
    AdminegitimComponent,



    //dialoglar
    AlertDialogComponent,
    ConfirmDialogComponent,
    LoginComponent,
    AdminComponent,
    kategoriDialogComponent,
    EgitimDialogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AlertDialogComponent,
    ConfirmDialogComponent,
    kategoriDialogComponent,
    EgitimDialogComponent


  ],
  providers: [ ApiService,AuthGuard,
  {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

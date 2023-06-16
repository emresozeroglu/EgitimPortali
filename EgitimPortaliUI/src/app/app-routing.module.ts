import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminkategoriComponent } from './admin/admin-kategori/admin-kategori.component';
import { AdminegitimComponent } from './admin/admin-egitim/admin-egitim.component';
import { AdminuyeComponent } from './admin/admin-uye/admin-uye.component';
import { AuthGuard } from './services/AuthGuard';

const routes: Routes = [
  {
    path: '',
     component: HomeComponent
  },

  {
    path: 'Login',
     component: LoginComponent
  },
  {
    path: 'admin',
     component: AdminComponent,
     canActivate:[AuthGuard],
     data:{
      yetkiler:['admin',],
      gerigit:'/auth/login'
     }
  },
  {
    path: 'admin/kategori',
     component: AdminkategoriComponent,
     data:{
      yetkiler:['admin',],
      gerigit:'/auth/login'
     }
  },
  {
    path: 'admin/egitim',
     component: AdminegitimComponent
  },
  {
    path: 'admin/egitim/:katId',
     component: AdminegitimComponent
  },
  {
    path: 'admin/uye',
     component: AdminuyeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

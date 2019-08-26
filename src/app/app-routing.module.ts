import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { HomeComponent } from '../app/components/home/home.component';
import { AboutComponent } from '../app/components/about/about.component';
import { ContactComponent } from '../app/components/contact/contact.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login'   , component: LoginComponent },
  { path: 'home'   , component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about'   , component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'contact'   , component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'logout'   , component: LoginComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
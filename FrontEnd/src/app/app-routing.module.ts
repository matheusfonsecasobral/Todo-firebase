import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewComponent } from './pages/new/new.component';
import { TodayComponent } from './pages/today/today.component';
import { TomorrowComponent } from './pages/tomorrow/tomorrow.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLogged = () => redirectLoggedInTo(["all"]);
const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLogged } },
  {
    path: "", component: HomeComponent, children: [
      {
        path: '', component: TodayComponent, canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: 'tomorrow', component: TomorrowComponent, canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: 'all', component: AllComponent, canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: 'new', component: NewComponent, canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/user/user.module').then(m => m.UserModule),
        canActivate: [AuthGuard]
      }
    ]
  }
];

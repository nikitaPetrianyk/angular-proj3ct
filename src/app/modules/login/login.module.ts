import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';

import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [AuthComponent, LoginLayoutComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginLayoutComponent
      }
    ])
  ],
  providers: [],
  exports: [RouterModule]
})
export class LoginModule {}

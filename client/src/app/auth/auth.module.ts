import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'file',
      component: AuthComponent,
      children: [{
        path: 'singin',
        component: LoginComponent,
      }, {
        path: 'singup',
        component: RegisterComponent,
      }]
    }])
  ],
  declarations: [LoginComponent, RegisterComponent, AuthComponent]
})
export class AuthModule {}

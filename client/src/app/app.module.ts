import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppService } from './app.service'; 
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';
 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgbDropdownModule.forRoot(),
    RouterModule.forRoot([{
        path: '',
        redirectTo: '/pages',
        pathMatch: 'full',
      },{
        path: 'auth',
        loadChildren: () => AuthModule,
      },{
        path: 'pages',
        loadChildren: () => PagesModule,
      }
    ],{
		  preloadingStrategy: PreloadAllModules
	   })
  ],
  providers: [AppService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

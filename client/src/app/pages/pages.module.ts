import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PostsComponent } from './posts/posts.component';
import { PostAllComponent } from './posts/post-all/post-all.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { AsideMenuComponent } from './aside/aside-menu.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DatasetComponent } from './dataset/dataset.component';
import { MydatasetComponent } from './dataset/mydataset/mydataset.component';
import { ModalComponent } from './dataset/mydataset/modal/modal.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'http://elephant-artyr264.c9users.io:8081/api/v1/dataset/',
  maxFilesize: 50,
  maxFilesize: 20480,
  addRemoveLinks: true,
  method: 'post',
  acceptedFiles: ".csv,.sql,.pdf,.doc,.text",
};

@NgModule({
  imports: [
    CommonModule,
    DropzoneModule,
    NgbModule.forRoot(),
    NgbDropdownModule.forRoot(),
    RouterModule.forChild([{
      path: '',
      component: PagesComponent,
      children: [{
        path: 'dashboard',
        component: MainComponent,
        data: {
          breadcrumb: "Dashboard"
        }
      }, {
        path: 'post',
        component: PostsComponent,
        data: {
          breadcrumb: "Pots"
        }
      }, {
        path: 'datasets',
        component: DatasetComponent,
        data: {
          breadcrumb: "Datasets"
        }
        children: [{
          path: '',
          component: MydatasetComponent
        }]
      }]
    }])
  ],
  declarations: [
    PagesComponent,
    PostsComponent,
    PostAllComponent,
    PostCreateComponent,
    MainComponent,
    AsideComponent,
    HeaderComponent,
    AsideMenuComponent,
    DatasetComponent,
    MydatasetComponent,
    ModalComponent
  ],
  providers: [{
    provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG
  }]
})
export class PagesModule {}

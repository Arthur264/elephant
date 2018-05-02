import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { AsideMenuComponent } from './aside/aside-menu.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DatasetComponent } from './dataset/dataset.component';
import { MydatasetComponent } from './dataset/mydataset/mydataset.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { DatasetListFile } from './dataset/mydataset/mydataset-host.component';
import { DatasetDetailsComponent } from './dataset/dataset-details/dataset-details.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { LoaderDirective } from '../loader.directive';
import { EditorModule } from '@tinymce/tinymce-angular';
import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';
import { UploadFileComponent } from './upload-file/upload-file.component';


const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'http://elephant-artyr264.c9users.io:8081/api/v1/dataset/',
  maxFilesize: 20480,
  addRemoveLinks: true,
  method: 'post',
  // acceptedFiles: ".csv,.sql,.pdf,.doc,.txt,.zip",
};

@NgModule({
  imports: [
    CommonModule,
    DropzoneModule,
    FormsModule,
    EditorModule,
    ReactiveFormsModule,
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
          },
          children: [{
            path: '',
            component: PostsComponent,
            data: {
              breadcrumb: "All"
            }
          }]
        },
        {
          path: 'datasets',
          component: DatasetComponent,
          data: {
            breadcrumb: "Datasets"
          },
          children: [{
              path: '',
              component: MydatasetComponent
            },
            {
              path: ':id',
              component: DatasetDetailsComponent
            }
          ]
        },
        {
          path: 'settings',
          component: SettingComponent,
          data: {
            breadcrumb: "Settings"
          }
        }
      ]
    }])
  ],
  declarations: [
    PagesComponent,
    PostsComponent,
    MainComponent,
    AsideComponent,
    HeaderComponent,
    AsideMenuComponent,
    DatasetComponent,
    MydatasetComponent,
    DatasetListFile,
    DatasetDetailsComponent,
    SettingComponent,
    PostDetailsComponent,
    LoaderDirective,
    TinyEditorComponent,
    UploadFileComponent
  ],
  providers: [{
    provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG
  }]
}) export class PagesModule {}

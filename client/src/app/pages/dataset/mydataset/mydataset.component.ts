import { Component, OnInit } from '@angular/core';
import { File } from '../file';
import {
  DropzoneComponent,
  DropzoneDirective,
  DropzoneConfigInterface
}
from 'ngx-dropzone-wrapper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-mydataset',
  templateUrl: './mydataset.component.html',
  styleUrls: ['./mydataset.component.scss'],
  providers: [AppService]
})

export class MydatasetComponent implements OnInit {

  constructor(private modalService: NgbModal, private appService: AppService) {}

  public listFile: File[];
  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 10,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    headers: { 'Authorization': 'Token ' + this.appService.getToken() }
  };

  ngOnInit() {
    this.loadFiles();
  }

  public openUploadFile(content) {
    const modalRef = this.modalService.open(content);
  }
  public onUploadSuccess(event) {
    this.listFile.unshift(event[1].data);
  }
  private loadFiles() {
    if (!this.listFile) {
      this.appService.get('dataset/').subscribe((res) => {
        this.listFile = res;
      })
    }
  }
}

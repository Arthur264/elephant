import { Component, OnInit } from '@angular/core';
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
  public listFile;
  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 10,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };
  constructor(private modalService: NgbModal, private appService: AppService) {}


  ngOnInit() {
    this.loadFiles();
  }

  public openUploadFile(content) {
    const modalRef = this.modalService.open(content);
  }
  private loadFiles() {
    if (!this.listFile) {

    }
  }
}

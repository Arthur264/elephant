import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  public createPost: FormGroup;
  public category: any[];
  public filestoUpload: any[] = [];
  constructor(private modalService: NgbModal, private appService: AppService) {
    this.createPost = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      category: new FormControl('posts', [Validators.required]),
      draft: new FormControl('', [Validators.required]),
      image: new FormControl('', []),
    });
  }

  ngOnInit() {}
  public changeEditor(event) {
    this.createPost.controls['text'].setValue(event);
  }
  public onChangeFile(event) {
    this.filestoUpload = event.target.files;
  }
  public openUploadFile(content) {
    if (!this.category) {
      this.appService.get("category/").subscribe(res => {
        this.category = res;
      });
    };
    const modalRef = this.modalService.open(content, { size: 'lg' });
  }
  public save(form) {
    if (form.valid) {
      let data = form.value;
      let formData: any = new FormData();
      for (let v in data) {
        if (v != 'image') {
          formData.append(v, data[v]);
        }
        else {
          for (let i = 0; i < this.filestoUpload.length; i++) {
            formData.append("image[" + i + "]", this.filestoUpload[i], this.filestoUpload[i]['name']);
          }
        }
      }
      console.log(formData)
      this.appService.upload("posts/", formData).subscribe(res => {
        console.log("res", res)
      })
    }
  }
  ngOnDestroy() {
    this.category = [];
    this.filestoUpload = [];
  }
}

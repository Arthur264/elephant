import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ma")
  }
  
  public fileUpload(event){
    let file = event.target.files[0];
    if(file.length > 0){
      let formData = new FormData();
      formData.append('file', file, file.name)
      
    }
  }

}

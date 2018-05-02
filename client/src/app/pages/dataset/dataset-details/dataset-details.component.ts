import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.scss']
})
export class DatasetDetailsComponent implements OnInit {

  constructor(private appService: AppService, private route: ActivatedRoute, private http: Http) {}
  public details;
  ngOnInit() {
    this.getData()
  }

  private getData() {
    let id;
    this.route.params.subscribe(params => {
      id = params['id'];
    });
    this.appService.get('dataset/' + id).subscribe((res) => {
      this.details = res;
      this.details.data.body = res.data.body.slice(0, 100);
    })
  }
}

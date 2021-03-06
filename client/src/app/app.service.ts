import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

    constructor(private http: Http) {}

    private hostname: string = 'http://elephant-artyr264.c9users.io:8081/api/v1/';
    private token = JSON.parse(localStorage.getItem('token')) || '';
    
    private getUrl(url){
        return this.hostname + url
    }
    public getToken(){
        return this.token
    }
    public get(url, params = {}) {
        params['format'] = 'json';
        const headers = new Headers({ 'Authorization': 'Token ' + this.token });
        const options = new RequestOptions({params: params, headers: headers });
        return this.http.get(this.getUrl(url), options)
            .map((res: Response) => res.json());
            
    }
    public post(url, data) {
        const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token ' + this.token});
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.hostname + url, data, options)
            .map((res: Response) => res.json());
    }
    public delete(url) {
        const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token ' + this.token });
        const options = new RequestOptions({ headers: headers });
        return this.http.delete(this.hostname + url, options)
            .map((res: Response) => res.json());
    }
    public put(url, data) {
        const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token ' + this.token });
        const options = new RequestOptions({ headers: headers });
        return this.http.put(this.hostname + url, data, options)
            .map((res: Response) => res.json());
    }
    public upload(url, data) {
        const headers = new Headers({ 'Authorization': 'Token ' + this.token, 'Accept': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.hostname + url, data, options)
            .map((res: Response) => res.json());
    }

}

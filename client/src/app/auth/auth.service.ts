import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable()
export class AuthService {

    constructor() {}
    
    public save(data){
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', JSON.stringify(data.user));
    }
    public clear(){
        localStorage.clear();
    }

}

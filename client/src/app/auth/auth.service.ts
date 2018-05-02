import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable()
export class AuthService {

    constructor() {}

    public save(data) {
        data.user.lastname = data.user.last_name
        delete data.user.last_name
        data.user.firstname = data.user.first_name
        delete data.user.first_name
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', JSON.stringify(data.user));
    }
    public clear() {
        localStorage.clear();
    }
    public get() {
        let result = {
            token: JSON.parse(localStorage.getItem('token')),
            user: JSON.parse(localStorage.getItem('user'))
        }
        return result
    }
    public is_login() {
        if (localStorage.getItem('token') != null && localStorage.getItem('user') != null) {
            return true
        }
        return false
    }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { AppService } from '../../app.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
// import { ErrorHandler } from '../../helpers/error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss'],
  providers: [AppService, AuthService]
})

export class LoginComponent implements OnInit {
  public login: FormGroup;
  public error_message: string;
  constructor(private appService: AppService, private authService: AuthService, private router: Router) {
    this.login = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  private list_error(error) {
    const tmp = document.createElement('div');
    if (!Array.isArray(error)) {
      var errors = [error]
    }
    let list = document.createElement('ul');
    errors.map((item) => {
      let data = JSON.parse(item)
      let li = document.createElement('li');
      li.innerHTML = Object.values(data)[0];
      list.appendChild(li)
    })
    tmp.appendChild(list);
    return tmp.innerHTML;
  }

  public Login(form) {
    if (form.valid) {
      console.log(form)
      this.appService.post('auth/login/', form.value).subscribe(res => {
          if (res.status && !res.error) {
            this.authService.save(res.data);
            this.router.navigateByUrl('/pages');
          }
          else {
            this.error_message = this.list_error(res.error);
          }
        },
        err => {
          this.error_message = this.list_error(err._body);
        })
    }
    else {
      this.error_message = this.list_error(form.errors);
    }
  }


}

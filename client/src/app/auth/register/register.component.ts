import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss'],
  providers: [AppService]
})
export class RegisterComponent implements OnInit {

  public register: FormGroup;
  constructor(private appService: AppService) {
    this.register = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }
  
   public Register(form) {
    if (form.valid) {
      console.log(form)
      this.appService.post('auth/register/', form.value).subscribe(res => {
        console.log("res", res)
      })
    }
    else {

    }
  }

}

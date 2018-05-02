import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  public user: User;
  public settings: FormGroup;
  constructor(private authService: AuthService) { 
    this.user = this.authService.get().user;
    this.settings = new FormGroup({
      company: new FormControl(this.user.company,),
      username: new FormControl(this.user.username, Validators.required),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      firstname: new FormControl(this.user.firstname, Validators.required),
      lastname: new FormControl(this.user.lastname, Validators.required),
      address: new FormControl(this.user.address,),
      city: new FormControl(this.user.city, ),
      country: new FormControl(this.user.country, ),
      postcode: new FormControl(this.user.postcode,),
      description: new FormControl(this.user.description, )
    });
  }

  ngOnInit() {
     
  }
  public Settings(from){
    
  }
}

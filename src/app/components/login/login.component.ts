import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public status: string;
  public token;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.user = new User('', '', '', '', 'Admin');
  }

  ngOnInit() {
  }

  onSubmit(form){
    this._userService.login(this.user).subscribe(
      response => {
        if(response){
          this.token = response.token;
          localStorage.setItem('token', this.token);
          localStorage.setItem('user', JSON.stringify(response));
          this.status = 'success';
        } else {
          this.status = 'error';
        }
      },
      err => {
        console.log(err);
        this.status = "error";
      }
    )

  }

}

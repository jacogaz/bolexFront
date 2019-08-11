import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User;
  public status: String;

  constructor(
    private user_service: UserService
  ) {
    this.user = new User(1, '', '', '', '');
   }

  ngOnInit() {
  }

  onSubmit(form){
    this.user_service.register(this.user).subscribe(
      response => {
        // tratar los datos con la respuesta de la api,
        // hacer que inicie sesión
      },
      err => {
        this.status = 'error';
        console.log(err);
      }
    )
  }

}

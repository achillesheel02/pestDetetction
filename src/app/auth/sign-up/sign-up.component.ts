import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  successfulLogin = false;
  hide: any;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.createUser(form.value.username, form.value.password)
      .subscribe((res)  =>  {
        this.successfulLogin  =  true;
        this.router.navigate(['login']);
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

  onLogin() {
    this.router.navigate(['login']);
  }
}

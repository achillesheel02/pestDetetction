import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  gender = [{ value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'other', viewValue: 'Other' },
  ];
  @Input() userInfo: any;
  private updated=false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.updateUser({
      username: form.value.username,
      lastName: form.value.lastName || null,
      firstName: form.value.firstName|| null,
      gender: form.value.gender|| null,
      dateOfBirth: form.value.dateOfBirth || null,
    })
      .subscribe((res) => {
        this.updated =true;
        this.authService.getUserById();
      });
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user: any;
  editForm = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUserById()
      .subscribe((res) => {
        this.user = res.user;
        console.log(res.user);
      });
  }

  onLogout() {
    this.authService.logout();
  }

  onEdit() {
    this.editForm = !this.editForm;
    this.authService.getUserById()
      .subscribe((res) => {
        this.user = res.user;
        console.log(res.user);
      });
  }

  isFarmsNull() {
    return this.user.farms.length < 1;
  }
}

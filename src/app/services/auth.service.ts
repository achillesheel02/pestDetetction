import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

class AuthData {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  public user: string;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  private timer: any;

  constructor(private http: HttpClient,
              private router: Router) { }

  createUser(username: string, password: string) {
    const authData: AuthData = {username, password};
    return this.http.post('http://localhost:3000/api/user/sign-up', authData);
  }

  updateUser(user) {
    return this.http.patch('http://localhost:3000/api/user/edit/' + this.user, user);
  }


  login(username: string, password: string) {
    const authData: AuthData = { username, password};
    this.http.post<{token: string, id: string}>('http://localhost:3000/api/user/login', authData)
      .subscribe(response => {
        this.token = response.token;
        this.setAuthTimer(3600000);
        this.user = response.id;
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + 3600000);
        this.saveAuthData(this.token, expirationDate, this.user);
        this.router.navigate(['dashboard']);
      }, error => {
        console.log(error);
      });
  }

  autoAuthUser() {
    const authInfo = this.getAuthData();
    if (!authInfo) { return; }
    const now = new Date();
    const expiresIn = authInfo.expirationDate.getTime() - now.getTime();
    console.log(authInfo);
    if (expiresIn > 0) {
      this.token = authInfo._token;
      this.setAuthTimer(expiresIn);
      this.isAuthenticated = true;
      this.user = authInfo._user;
      this.authStatusListener.next(true);
    }
  }

  private setAuthTimer(duration: number) {
    this.timer = setTimeout(() => {
      this.logout();
    }, duration);
  }

  logout() {
    this.token = null;
    clearTimeout(this.timer);
    this.isAuthenticated = false;
    this.user = null;
    this.clearAuthData();
    this.authStatusListener.next(false);
    this.router.navigate(['login']);
  }

  getToken() {
    return this.token;
  }

  getUserById() {
    return this.http.get<{message: string, user: any}>('http://localhost:3000/api/user/get/' + this.user);
  }

  isAuth() {
    return this.isAuthenticated;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  private saveAuthData(token: string, expirationDate: Date, user: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('user', user);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('user');
  }
  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const user = localStorage.getItem('user');
    if (!token || !expirationDate) { return; }
    return {
      _token: token,
      expirationDate: new Date(expirationDate),
      _user: user,
    };
  }
}

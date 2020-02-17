import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

class SearchData {
  user: string;
  image: string;
  result: string;
  accuracy: number;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  saveSearch(img: string, res: string, acc: number) {
    const searchData: SearchData = {
      user: this.authService.user,
      image: img,
      result: res,
      accuracy: acc
    };
    return this.http.post('http://localhost:3000/api/search/add', searchData);
  }

  getSearches() {
    return this.http.get<{message: string, results: any}>('http://localhost:3000/api/search/get/' + this.authService.user + '/all');
  }
}

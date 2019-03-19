import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  //this line means this service is singleton
  providedIn: 'root'
})
export class DisplayService {

  apiUrl : string = './assets';

  constructor(private httpService: HttpClient) { }

  getText(fileName): Observable<string> {
    return this.httpService.get(`${this.apiUrl}/${fileName}`, {responseType: 'text'});
  }

  getJson(fileName): Observable<any> {
    return this.httpService.get(`${this.apiUrl}/${fileName}`, {responseType: "json"});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TwelveDataService {
  private apiUrl = 'https://api.twelvedata.com/stocks';

  constructor(private http: HttpClient) {}

  getSymbols(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

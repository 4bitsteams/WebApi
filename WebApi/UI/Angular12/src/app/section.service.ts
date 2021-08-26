import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  readonly APIUrl = "http://localhost:4192/api";
  readonly PhotoUrl = "http://localhost:4192/Photos";

  constructor(private http: HttpClient) { }
  //Section Add//

  getSecList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Section');
  }

  addSection(val: any) {
    return this.http.post(this.APIUrl + '/Section', val);
  }

  updateSection(val: any) {
    return this.http.put(this.APIUrl + '/Section', val);
  }

  deleteSection(val: any) {
    return this.http.delete(this.APIUrl + '/Section/' + val);
  }

  //Section End
}

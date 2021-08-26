import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly APIUrl = "http://localhost:4192/api";
  readonly PhotoUrl = "http://localhost:4192/Photos";

  constructor(private http: HttpClient) { }

  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Employee');
  }

  addEmployee(val: any) {
    return this.http.post(this.APIUrl + '/Employee', val);
  }

  updateEmployee(val: any) {
    return this.http.put(this.APIUrl + '/Employee', val);
  }

  deleteEmployee(val: any) {
    return this.http.delete(this.APIUrl + '/Employee/' + val);
  }


  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/Employee/SaveFile', val);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Employee/GetAllDepartmentNames');
  }
}

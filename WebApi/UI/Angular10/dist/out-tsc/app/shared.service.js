import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let SharedService = class SharedService {
    constructor(http) {
        this.http = http;
        this.APIUrl = "http://localhost:4192/api";
        this.PhotoUrl = "http://localhost:4192/Photos";
    }
    getDepList() {
        return this.http.get(this.APIUrl + '/department');
    }
    addDepartment(val) {
        return this.http.post(this.APIUrl + '/Department', val);
    }
    updateDepartment(val) {
        return this.http.put(this.APIUrl + '/Department', val);
    }
    deleteDepartment(val) {
        return this.http.delete(this.APIUrl + '/Department/' + val);
    }
    getEmpList() {
        return this.http.get(this.APIUrl + '/Employee');
    }
    addEmployee(val) {
        return this.http.post(this.APIUrl + '/Employee', val);
    }
    updateEmployee(val) {
        return this.http.put(this.APIUrl + '/Employee', val);
    }
    deleteEmployee(val) {
        return this.http.delete(this.APIUrl + '/Employee/' + val);
    }
    UploadPhoto(val) {
        return this.http.post(this.APIUrl + '/Employee/SaveFile', val);
    }
    getAllDepartmentNames() {
        return this.http.get(this.APIUrl + '/Employee/GetAllDepartmentNames');
    }
};
SharedService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SharedService);
export { SharedService };
//# sourceMappingURL=shared.service.js.map
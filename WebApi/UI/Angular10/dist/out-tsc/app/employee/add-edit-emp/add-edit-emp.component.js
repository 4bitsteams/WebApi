import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let AddEditEmpComponent = class AddEditEmpComponent {
    constructor(service) {
        this.service = service;
        this.DepartmentsList = [];
    }
    ngOnInit() {
        this.loadDepartmentList();
    }
    loadDepartmentList() {
        this.service.getAllDepartmentNames().subscribe((data) => {
            this.DepartmentsList = data;
            this.EmployeeId = this.emp.EmployeeId;
            this.EmployeeName = this.emp.EmployeeName;
            this.Department = this.emp.Department;
            this.DateOfJoining = this.emp.DateOfJoining;
            this.PhotoFileName = this.emp.PhotoFileName;
            this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
        });
    }
    addEmployee() {
        var val = {
            EmployeeId: this.EmployeeId,
            EmployeeName: this.EmployeeName,
            Department: this.Department,
            DateOfJoining: this.DateOfJoining,
            PhotoFileName: this.PhotoFileName
        };
        this.service.addEmployee(val).subscribe(res => {
            alert(res.toString());
        });
    }
    updateEmployee() {
        var val = {
            EmployeeId: this.EmployeeId,
            EmployeeName: this.EmployeeName,
            Department: this.Department,
            DateOfJoining: this.DateOfJoining,
            PhotoFileName: this.PhotoFileName
        };
        this.service.updateEmployee(val).subscribe(res => {
            alert(res.toString());
        });
    }
    uploadPhoto(event) {
        var file = event.target.files[0];
        const formData = new FormData();
        formData.append('uploadedFile', file, file.name);
        this.service.UploadPhoto(formData).subscribe((data) => {
            this.PhotoFileName = data.toString();
            this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
        });
    }
};
__decorate([
    Input()
], AddEditEmpComponent.prototype, "emp", void 0);
AddEditEmpComponent = __decorate([
    Component({
        selector: 'app-add-edit-emp',
        templateUrl: './add-edit-emp.component.html',
        styleUrls: ['./add-edit-emp.component.css']
    })
], AddEditEmpComponent);
export { AddEditEmpComponent };
//# sourceMappingURL=add-edit-emp.component.js.map
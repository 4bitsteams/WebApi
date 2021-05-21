import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ShowDepComponent = class ShowDepComponent {
    constructor(service) {
        this.service = service;
        this.DepartmentList = [];
        this.ActivateAddEditDepComp = false;
        this.DepartmentIdFilter = "";
        this.DepartmentNameFilter = "";
        this.DepartmentListWithoutFilter = [];
    }
    ngOnInit() {
        this.refreshDepList();
    }
    addClick() {
        this.dep = {
            DepartmentId: 0,
            DepartmentName: ""
        };
        this.ModalTitle = "Add Department";
        this.ActivateAddEditDepComp = true;
    }
    editClick(item) {
        this.dep = item;
        this.ModalTitle = "Edit Department";
        this.ActivateAddEditDepComp = true;
    }
    deleteClick(item) {
        if (confirm('Are you sure??')) {
            this.service.deleteDepartment(item.DepartmentId).subscribe(data => {
                alert(data.toString());
                this.refreshDepList();
            });
        }
    }
    closeClick() {
        this.ActivateAddEditDepComp = false;
        this.refreshDepList();
    }
    refreshDepList() {
        this.service.getDepList().subscribe(data => {
            this.DepartmentList = data;
            this.DepartmentListWithoutFilter = data;
        });
    }
    FilterFn() {
        var DepartmentIdFilter = this.DepartmentIdFilter;
        var DepartmentNameFilter = this.DepartmentNameFilter;
        this.DepartmentList = this.DepartmentListWithoutFilter.filter(function (el) {
            return el.DepartmentId.toString().toLowerCase().includes(DepartmentIdFilter.toString().trim().toLowerCase()) &&
                el.DepartmentName.toString().toLowerCase().includes(DepartmentNameFilter.toString().trim().toLowerCase());
        });
    }
    sortResult(prop, asc) {
        this.DepartmentList = this.DepartmentListWithoutFilter.sort(function (a, b) {
            if (asc) {
                return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
            }
            else {
                return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
            }
        });
    }
};
ShowDepComponent = __decorate([
    Component({
        selector: 'app-show-dep',
        templateUrl: './show-dep.component.html',
        styleUrls: ['./show-dep.component.css']
    })
], ShowDepComponent);
export { ShowDepComponent };
//# sourceMappingURL=show-dep.component.js.map
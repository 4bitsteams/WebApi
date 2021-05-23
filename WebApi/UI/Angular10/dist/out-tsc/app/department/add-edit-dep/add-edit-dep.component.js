import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let AddEditDepComponent = class AddEditDepComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.DepartmentId = this.dep.DepartmentId;
        this.DepartmentName = this.dep.DepartmentName;
    }
    addDepartment() {
        var val = {
            DepartmentId: this.DepartmentId,
            DepartmentName: this.DepartmentName
        };
        this.service.addDepartment(val).subscribe(res => {
            alert(res.toString());
        });
    }
    updateDepartment() {
        var val = {
            DepartmentId: this.DepartmentId,
            DepartmentName: this.DepartmentName
        };
        this.service.updateDepartment(val).subscribe(res => {
            alert(res.toString());
        });
    }
};
__decorate([
    Input()
], AddEditDepComponent.prototype, "dep", void 0);
AddEditDepComponent = __decorate([
    Component({
        selector: 'app-add-edit-dep',
        templateUrl: './add-edit-dep.component.html',
        styleUrls: ['./add-edit-dep.component.css']
    })
], AddEditDepComponent);
export { AddEditDepComponent };
//# sourceMappingURL=add-edit-dep.component.js.map
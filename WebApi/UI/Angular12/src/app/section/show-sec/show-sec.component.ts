import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-sec',
  templateUrl: './show-sec.component.html',
  styleUrls: ['./show-sec.component.css']
})
export class ShowSecComponent implements OnInit {

  constructor(private service: SharedService) { }

  SectionList: any = [];

  ModalTitle: any;
  ActivateAddEditSecComp: any = false;
  sec: any;

  SectionIdFilter: any = "";
  SectionNameFilter: any = "";
  SectionListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshSecList();
  }

  addClick() {
    this.sec = {
      SectionId: 0,
      SectionName: ""
    }
    this.ModalTitle = "Add Section";
    this.ActivateAddEditSecComp = true;

  }

  editClick(item:any) {
    this.sec = item;
    this.ModalTitle = "Edit Section";
    this.ActivateAddEditSecComp = true;
  }

  deleteClick(item:any) {
    if (confirm('Are you sure??')) {
      this.service.deleteSection(item.SectionId).subscribe(data => {
        alert(data.toString());
        this.refreshSecList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditSecComp = false;
    this.refreshSecList();
  }


  refreshSecList() {
    this.service.getSecList().subscribe(data => {
      this.SectionList = data;
      this.SectionListWithoutFilter = data;
    });
  }

  FilterFn() {
    var SectionIdFilter = this.SectionIdFilter;
    var SectionNameFilter = this.SectionNameFilter;

    this.SectionList = this.SectionListWithoutFilter.filter(function (el:any) {
      return el.SectionId.toString().toLowerCase().includes(
        SectionIdFilter.toString().trim().toLowerCase()
      ) &&
        el.SectionName.toString().toLowerCase().includes(
          SectionNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any, asc:any) {
   this.SectionList = this.SectionListWithoutFilter.sort(function (a:any, b:any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }

}

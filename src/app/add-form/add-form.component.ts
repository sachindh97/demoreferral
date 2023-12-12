import { Component, OnInit } from '@angular/core';
import { AffiliateServicesService } from '../affiliate-services.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  constructor(private services: AffiliateServicesService) {}

  categoriesList: any;
  showDetailsForm: boolean = false;
  loginHide = true;
  errMsg: string = '';
  ngOnInit(): void {
    this.getCategoriesData();
  }

  addDetailsForm = new FormGroup({
    site_name: new FormControl(),
    // site_description: new FormControl(),
    // siteUrl: new FormControl(),
    // siteCategories: new FormControl(),
    // siteType: new FormControl(),
    // siteStatus: new FormControl(),
    // siteSecreateCode: new FormControl(),
  });

  getCategoriesData() {
    this.categoriesList = this.services.getCategories();
  }

  adminLoginSubmit(adminLoginForm: any) {
    this.errMsg = '';
    console.log(adminLoginForm.value.email, 'vvvv');
    if (
      adminLoginForm.value.email === 'sachin@123' &&
      adminLoginForm.value.password === '1234'
    ) {
      this.showDetailsForm = true;
      this.loginHide = false;
    } else {
      this.showDetailsForm = false;
      this.loginHide = true;
      this.errMsg = 'invalid user !!!';
    }
  }

  onSubmit() {
    this.errMsg = '';
    // console.log(this.addDetailsForm.value.siteSecreateCode, 'eeew@');

    // if (this.addDetailsForm.value.siteSecreateCode === 'admin') {

      this.services.addSheetData(this.addDetailsForm.value).subscribe((res:any)=>{
        console.log(res,'resadd#');
        
      })

    // } else {
    //   console.log('wwww');

    //   this.errMsg = 'invalid secreate code !!!';
    // }
  }
}

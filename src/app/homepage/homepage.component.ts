import { Component, OnInit } from '@angular/core';
import { AffiliateServicesService } from '../affiliate-services.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private services: AffiliateServicesService) {}

  sheetData: any;
  filterData: any = [];
  categoriesList: any;
  totalLength: any;
  page: number = 1;
  hideLoading: boolean = true;
  ngOnInit(): void {
    this.getData();
    this.getCategoriesData();
  }

  getData() {
    this.services.getSheetData().subscribe((result: any) => {
      const getData = result.data;
      getData.shift();
      this.sheetData = getData;
      this.filterData = getData;
      this.totalLength = getData.legnth;
      this.hideLoading = false;
    });
  }

  getCategoriesData() {
    this.categoriesList = this.services.getCategories();
  }

  onChgCategories(event: any) {
    let getCatName = event.target.value;
    console.log(getCatName, 'getCatId#2');

    if (getCatName != 'All') {
      this.filterData = [];
      this.sheetData.filter((res: any) => {
        if (res.site_categories == getCatName) {
          console.log('eee#');

          this.filterData.push(res);
        }
      });
    } else {
      this.filterData = this.sheetData;
    }
  }
}

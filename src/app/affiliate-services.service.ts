import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environments';
@Injectable({
  providedIn: 'root'
})
export class AffiliateServicesService {

  constructor(private http:HttpClient) { }



  getSheetData()
  {

    const googleSheetUrl = environment.googleSheetApi;
    console.log(googleSheetUrl,'googleSheetUrl###');
    return this.http.get(googleSheetUrl);
  }

  getCategories()
  {
    const categories = [
      { id: 1, name: 'course' },
      { id: 2, name: 'ecommerce' },
      { id: 3, name: 'finance' },
      { id: 4, name: 'game' },
      { id: 5, name: 'hosting' },
      { id: 6, name: 'product' },
      { id: 7, name: 'travel' },
    ];
    return categories
  }

  addSheetData(data:any)
  {
 
 
  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Method', 'POST')

    const googleSheetAddUrl = "https://docs.google.com/spreadsheets/d/1obZ2TvVYCyxjq2KJOYJpdDsYIU9WpqEfu8FK4_9DBoo/edit?usp=sharing?action=add";
    console.log(data,'dar@@');
    
    return this.http.post(googleSheetAddUrl,data,{'headers':headers})
  }

}

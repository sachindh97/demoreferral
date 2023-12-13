import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AffiliateServicesService {

  constructor(private http:HttpClient) { }



  getSheetData()
  {

    const googleSheetUrl = "https://script.google.com/macros/s/AKfycbzZ_dpTgyi0lUsRnVlNCPu4Ba8r6WimSQXgEc1j1_XZ5ndtKGMv1YZ4X6AA3Om02eH87Q/exec";
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

    const googleSheetAddUrl = "https://script.google.com/macros/s/AKfycbz1zWbQ4Y5yJnZqrmvcD5Fv_f6DX-xzjZ85ZsH_XKKAz1SMnOy0jNMqdMtd3amwD3QQ2A/exec?action=add";
    console.log(data,'dar@@');
    
    return this.http.post(googleSheetAddUrl,data,{'headers':headers})
  }

}

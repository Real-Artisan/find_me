import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=3d4442309a4b471d82a800a9fd608628';
  title = 'find_me';
  result: any;
  see_more = false;
  constructor(private http: HttpClient){
    this.getLocationData();
  }

  getLocationData(){
    this.http.get(this.url).subscribe((response: any) =>{
      this.result = response;
      console.log(response)
    })
  }
}

import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

interface WeatherResponse {
  main: {
    temp: number;
  };
  // Other properties from the response if needed
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weatherTemp :any
  todayDate = new Date()
  constructor(public httpClient:HttpClient) {
    this.loadData()
  }

  loadData(){
      this.httpClient.get<WeatherResponse>(`${API_URL}/weather?q=${"Dublin"}&appid=${API_KEY}`).subscribe(results =>{
        console.log(results);
        this.weatherTemp = results.main
        // console.log(this.weatherTemp)
    })
  }
}

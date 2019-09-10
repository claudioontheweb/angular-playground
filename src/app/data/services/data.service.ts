import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    this.http.get("https://reqres.in/api/users?delay=2").subscribe(res => {
      console.log(res);
    });
  }
}

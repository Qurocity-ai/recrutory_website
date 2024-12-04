import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  // url = "https://backendrecrutory-qr5t.onrender.com"
  url = "https://recrutory-form-backend.onrender.com"

  constructor(private http:HttpClient) { }

  candidateForm(data: any){
    return this.http.post(`${this.url}/candidate`,data);
  }

  companyForm(data: any){
    return this.http.post(`${this.url}/company`,data);
  }
  // sendEmail(){

  // }

}

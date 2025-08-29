import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
    constructor(private http: HttpClient) {}

    private jsonUrl = 'assets/formValue.json'; 

  getFormStructure() {
        return this.http.get<any>(this.jsonUrl);

  }
}
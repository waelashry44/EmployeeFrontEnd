import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) { }  
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }    
  getData(){  
       
    return this.http.get('/api/Employee');  //https://localhost:44327/ webapi host url  
  }  
  
  postData(formData: any){  
    return this.http.post('/api/Employee',formData);  
  }  
  
  putData(formData: any){  
    return this.http.put('/api/Employee',formData);  
  }  
  deleteData(id: number){  
    return this.http.delete('/api/Employee/'+id);  
  }  
}

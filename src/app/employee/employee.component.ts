
import { Component, OnInit } from '@angular/core';  
import { EmployeeService } from '../employee.service';  
import { FormGroup, FormControl,Validators } from '@angular/forms';   
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  title = 'EmployeeFrontEnd';  
     
  constructor(private EmployeeService: EmployeeService, private router: Router,
     private authenticationService: AuthenticationService) { }  
  data: any;  
  EmpForm: any;  
  submitted = false;   
  EventValue: any = "Save";  
  
  ngOnInit(): void { 
    this.getdata();  
  
    this.EmpForm = new FormGroup({  
      empId: new FormControl(null),  
      empName: new FormControl("",[Validators.required]),        
      empContact: new FormControl("",[Validators.required]),  
      empEmail:new FormControl("",[Validators.required]),  
      empAddress: new FormControl("",[Validators.required]),  
    })    
  }  
  getdata() {  
    this.EmployeeService.getData().subscribe((data) => {  
      this.data = data;  
    })  
  }  
  deleteData(id:any) {  
    this.EmployeeService.deleteData(id).subscribe((data) => {  
      this.data = data;  
      this.getdata();  
    })  
  }  
  Save() {   
    this.submitted = true;  
    
     if (this.EmpForm.invalid) {  
            return;  
     }  

     if (this.EmpForm.value.empId != null) {  
      this.EmployeeService.putData(this.EmpForm.value).subscribe((data: any) => {  
        this.data = data;  
        this.resetFrom();  
      })    
    }  
    else  
    {
      this.EmployeeService.postData(this.EmpForm.value).subscribe((data: any) => {  
        this.data = data;  
        this.resetFrom();  
    
      })  
    }
   
  }  
  Update() {   
    this.submitted = true;  
    
    if (this.EmpForm.invalid) {  
     return;  
    }        
    this.EmployeeService.putData(this.EmpForm.value).subscribe((data: any) => {  
      this.data = data;  
      this.resetFrom();  
    })  
  }  
  
  EditData(Data: any) {  
    this.EmpForm.controls["empId"].setValue(Data.empId);  
    this.EmpForm.controls["empName"].setValue(Data.empName);      
    this.EmpForm.controls["empContact"].setValue(Data.empContact);  
    this.EmpForm.controls["empEmail"].setValue(Data.empEmail);  
    this.EmpForm.controls["empAddress"].setValue(Data.empAddress);  
    this.EventValue = "Update";  
  }  
  
  resetFrom()  
  {     
    this.getdata();  
    this.EmpForm.reset();  
    this.EventValue = "Save";  
    this.submitted = false;   
  }  

  logout(): void {
    this.authenticationService.logout();
  }
}  
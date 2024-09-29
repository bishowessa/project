import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  
  http = inject(HttpClient);
  // fetchData(){
    //   this.http.get('http://localhost:3002/products').subscribe((data) => console.log(data)),//el donya tamam
    //   (er : any) => console.log(er)//feh error
    // }
    
    
    formdata : any;
    fetchData(e : any){
    e.preventDefault()//3lshan amn3 el submit mn enha t refresh

    this.formdata = new FormData(e.target)

    console.log(e.target)
    console.log(this.formdata.get('productName'))

    this.http.post('http://localhost:3002/products', this.formdata).subscribe(response=>console.log(response))
    
  }


  data = {
    productName: "juice",
    productPrice: 20,
    productCategory: "Groceries"
  }


  sendData(){
    this.http.post('http://localhost:3002/products', this.data).subscribe((data) => console.log(data)),//el donya tamam
    (er : any) => console.log(er)//feh error
    
  }
  loginUser(){
    this.http.post('http://localhost:3002/users/login', this.data,{withCredentials: true}).subscribe((data) => console.log(data)),//el donya tamam
    (er : any) => console.log(er)//feh error
    
  }
  ngOnInit() : void {
    
  }


}

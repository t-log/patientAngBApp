import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchand-delete',
  templateUrl: './searchand-delete.component.html',
  styleUrls: ['./searchand-delete.component.css']
})
export class SearchandDeleteComponent {
  constructor(private api:ApiService){}
  name=""
  searchData:any=[]
  readValue=()=>{
    let data = {"name":this.name}
    console.log(data)
    this.api.searchPatientDetails(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("No result")
        }
        else{
          this.searchData=response
        }
      }
    )
  }
  deleteButtonClick=(id:any)=>
  {
    let data:any={id:id}
    this.api.deletePatient(data).subscribe(
      (response:any)=>{console.log(response);
      }
    )
  }
}

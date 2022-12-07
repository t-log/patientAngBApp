import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  name=""
  age=""
  bloodGroup=""
  hospitalName=""
  appointmentDate=""

  constructor(private api:ApiService){}

  readPatientDetails = ()=>{
    let patientData:any={"name":this.name,"age":this.age,"bloodGroup":this.bloodGroup,
    "hospitalName":this.hospitalName,"appointmentDate":this.appointmentDate}
    // console.log(patientData)
    this.api.addPatientDetails(patientData).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Patient Details Added Successfully")
        }
        else{
          alert("Something wrong happened!")
        }
      }
    )

  }
}

import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  constructor(private http:BackendService) { }

  ngOnInit() {
  }

  editform = new FormGroup({
    employeeId:new FormControl(0),
    employeeName:new FormControl(''),
    departmentID:new FormControl(0),
    designationId:new FormControl(0),
    salary:new FormControl(0),
    joindate:new FormControl('')
  })

  handleedit(){
    console.log(this.editform.value);
    this.http.updateData(this.editform.controls['employeeId'].value,this.editform.value).
    subscribe(success => {
       console.log(success);
    },
      error=>{
         console.log(error);
      })
  }

}

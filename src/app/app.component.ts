import { Component,OnInit } from '@angular/core';

import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import * as LCC from 'lightning-container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formData;
  WONumber;
  workType;
  status;
  description;
  duration;

  constructor() { }

  ngOnInit(): void {
    LCC.addMessageHandler(function(message) {
      console.log(message.value);
     // document.getElementById('messageFromLC').value = message.value;
    });

    this.formData=new FormGroup({
      WONumber:new FormControl(""),
      WorkType:new FormControl(""),
      Status:new FormControl(""),
      Description:new FormControl(""),
      Duration:new FormControl("")
    });
  }
onClickSubmit(data) {  this.WONumber=data.WONumber;
  this.workType=data.WorkType;
  this.status=data.Status;
  this.description=data.Description;
  this.duration=data.Duration;
  const myData={"WONumber":this.WONumber,
  "WorkType":this.workType,
  "Status":this.status,
  "Description":this.description,
  "Duration":this.duration
  };
  
  LCC.sendMessage({
    event: "Lccevent",
    value:JSON.stringify(myData)
  });
}
}

import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user : User = new User(0,"","");
  message:any;
  constructor(private service: UserRegistationService ) { }

  ngOnInit() {
  }
  
  registerNow(){
    // let registerData = this.service.addUser(this.user);
    // registerData.subscribe((data)=>this.message = data)

    this.service.addUser(this.user).subscribe((data)=>{
      this.message = data;
      console.log("added");
    },
    (error)=>console.log("error occured"));

  }


}

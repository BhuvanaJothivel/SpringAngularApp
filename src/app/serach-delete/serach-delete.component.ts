import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-serach-delete',
  templateUrl: './serach-delete.component.html',
  styleUrls: ['./serach-delete.component.css']
})
export class SerachDeleteComponent implements OnInit {
  
  users: any;

  id:number;
  constructor(private service: UserRegistationService) { }

  ngOnInit() {
    let allData = this.service.getAllUser();
    allData.subscribe((data)=>this.users = data);
  }

  delteUser(id: number){
    let deleteData = this.service.deleteUser(id);
    deleteData.subscribe((data)=>this.users = data);
  }

  findUserByEmailId(){
    let getDataById = this.service.getUserById(this.id);
    getDataById.subscribe((data)=>this.users = data);
  }
}

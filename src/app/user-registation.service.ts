import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http: HttpClient) { }

  public addUser(user){
    return this.http.post('http://localhost:8085/addPrograd',user);
  }

  public getAllUser(){
    return this.http.get('http://localhost:8085/getAllPrograds');
  }

  public deleteUser(id){
    return this.http.delete('http://localhost:8085/deletePrograd/'+id);
  }

  public getUserById(id){
    return this.http.get('http://localhost:8085/getProgradById/'+id);
  }
}

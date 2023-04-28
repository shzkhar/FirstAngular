import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 firstname="";
 lastname="";
 email="";
 password="";

 constructor(private userService: UserService){

 }
 signup(){
  console.log(this.firstname);
  console.log(this.lastname);
  console.log(this.email);
  console.log(this.password);

  let user = { "firstname": this.firstname, "lastname": this.lastname, "email": this.email, "password": this.password }
    this.userService.signup(user).subscribe(resp => {
      alert(resp.msg);
      console.log(resp);
    }, error => {
      alert(error.error.msg);
      console.log(error);
    })

}
}

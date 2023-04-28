import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
name="";
price="";
qyantity="";
authorname="";
avalaibleind:boolean=true;

constructor(private bookService:BookService, private router:Router){

}//router 

submit(){
  // console.log(this.name)
  // console.log(this.price)
  // console.log(this.qyantity)
  // console.log(this.authorname)
  // console.log(this.avalaibleind)

  let book = {"name":this.name, "price":this.price,"qyantity":this.qyantity,"authorname":this.authorname,"avalaibleind":this.avalaibleind}
 
  this.bookService.addbook(book).subscribe(resp =>{
    console.log(resp);
    alert("Book Added Successfully");
    this.router.navigateByUrl("/listbook");  //RequestDispatcher in ADV Java == navigateByUrl
  } 
  
  )
}



}

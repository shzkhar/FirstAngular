import { Component } from '@angular/core';
import { Options,LabelType } from '@angular-slider/ngx-slider';
import { BookService } from '../book.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookcriteria',
  templateUrl: './bookcriteria.component.html',
  styleUrls: ['./bookcriteria.component.css']
})
export class BookcriteriaComponent {
  constructor(private bookService:BookService, private toastrService:ToastrService){ }

  authorname="";
  minValue: number = 50;
   maxValue: number = 5000;
   options: Options = {
     floor: 0,
     ceil: 5000,
     translate: (value: number, label: LabelType): string => {
       switch (label) {
         case LabelType.Low:
           return "<b>Min price:</b> Rs" + value;
         case LabelType.High:
           return "<b>Max price:</b> Rs" + value;
         default:
           return "Rs" + value;
       }
     }
   };

   books = []
   
  filterBook(){
  console.log("filterbook");
  
  console.log(this.minValue);
  console.log(this.maxValue);
  this.bookService.filterBookByPrice(this.minValue,this.maxValue).subscribe(resp=>{
    this.books  = resp.data ; 
  })
}


search(){

  console.log("===================SEARCH====================")
  console.log(this.minValue);
  console.log(this.maxValue);
  console.log(this.authorname);
 
  this.bookService.searchBookByAuthorName(this.authorname,this.minValue,this.maxValue).subscribe(resp=>{
    this.books=resp; 
    this.toastrService.success("Response From API Is Success")
  },error=>{
    this.toastrService.error("Could Not Get Response From Api")
    console.log(error);
  });
}


}

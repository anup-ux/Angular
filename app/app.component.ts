import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {FireBaseService, winner } from './services/fire-base.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'age', 'score','Actions'];
  console=console;
  public show:boolean = false;
  public buttonName:any = 'Show';
  json=JsonPipe;
  winners:any[]=[]
  arr:any[]=[]
  // stringify=stringify
  title = 'chitoo';
  userss:any[]
 constructor(db:AngularFireDatabase,
  public crudApi:FireBaseService, 
  ){
   this.userss=[]
  db.list('users').valueChanges().subscribe(users => { 
     this.userss = users;
     this.userss.map((item)=>{
       console.log("map items are", item);
     })
     console.log("users are",this.userss);
     }); 
 }   
 onclick(selectedItem: any){

  var dataObj= JSON.stringify(selectedItem)
  
   var obj=JSON.parse(dataObj);
 
 console.log("obj are",obj)
 }
//  this fun gets the data from html button and then passes it to db
   fun=(selectedData:any)=>{
  this.crudApi.Addwinners(selectedData)
  console.log("items are",selectedData);
  }
  fun_winner=()=>{
   this.crudApi.getWinners().valueChanges().subscribe((mess:any)=>{
    this.winners=mess
   });
  }
  toggle() {
    this.show = !this.show;
  }
  AboveFifty=()=>{
    // const arr=new Array
    this.userss.map((item)=>{
      if(item.score>50){
        this.arr.push(item)
      }
      // console.log("nw array is",arr);
       
    })
    // return this.arr
  }
}


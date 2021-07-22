import { Injectable } from '@angular/core';
// import { getDatabase, ref, query, limitToLast } from "firebase/database";

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database'
export interface winner{
  name: string
  score: string;
}
@Injectable({
  providedIn: 'root'
})

export class FireBaseService {
   getWinnerData:any[]=[]
  constructor(
      public db:AngularFireDatabase) { }
    Addwinners(winner:any) {
      console.log("added",winner.age)
      const itemref=this.db.list('path')
      // itemref.("users").push().setValue(userInformation)
      itemref.push({
        name:winner.name,
        score:winner.score,
      })
    
    }
    // Get all users whose age is >= 25
    // recentPostsRef = query(ref(this.db, 'posts') limitToLast(50));
// ref.child('users').orderByChild('age').startAt(25).on('child_added', ...)
    // getAboveFourty=()=>
    getWinners=()=>  this.db.list('path');
     getUsersAboveFifty=()=>this.db.list('users')
    
    
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Realm from 'realm-web';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public router: Router) { }
   userRefreshToken : any;
  // bla : any;
   username : any;
   userid : any;
   email : any;
  // app : any
  authorized : boolean;
  app = new Realm.App('data-icqqg');
  async LogOut(){

    await this.app.allUsers[sessionStorage.getItem("userId")].logOut()
      sessionStorage.clear();
    
    const redirectUrl = '/login';
  
          // Redirect the user
          this.router.navigate([redirectUrl]);
  }
  analyses_actives=""
  ngOnInit() {
    
    
    this.app = new Realm.App('data-icqqg')
    //this.userRefreshToken = sessionStorage.getItem("userRefreshToken");
    this.userRefreshToken = sessionStorage.getItem("userRefreshToken");
    //console.log(this.app.currentUser)
    this.email = sessionStorage.getItem("email");
    this.username = sessionStorage.getItem("username");
    this.userid = sessionStorage.getItem("userId");
    this.authorized = sessionStorage.getItem("userId")=="6322ffbb91365a9b736d5a77";
  const mongo = this.app.currentUser.mongoClient('Cluster0');
  const collection = mongo.db('Data').collection("Analyses");
  collection.find({active:true}).then((value)=>{
    this.analyses_actives = value.length.toString()
  })
    //sessionStorage.getItem("userRefreshToken");
    //sessionStorage.getItem("email");
    //sessionStorage.getItem("username");
  }
  
}
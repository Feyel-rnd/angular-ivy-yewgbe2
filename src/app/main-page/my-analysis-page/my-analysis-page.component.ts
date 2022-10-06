import { Component, OnInit } from '@angular/core';
import * as Realm from 'realm-web';

@Component({
  selector: 'app-my-analysis-page',
  templateUrl: './my-analysis-page.component.html',
  styleUrls: ['./my-analysis-page.component.css']
})
export class MyAnalysisPageComponent implements OnInit {

  constructor() { }
print : string;
  ngOnInit() {
    
    const app = new Realm.App('data-icqqg');
    const mongo = app.currentUser.mongoClient('Cluster0');
    const collection = mongo.db('Users').collection("Example ID");
    collection.find().then((value)=>{
      //console.log(value[0])
      this.print = value[0].owner_id
    })
  }

}
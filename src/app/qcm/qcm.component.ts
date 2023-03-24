import { Component,Input, OnInit } from '@angular/core';
import { QcmElementComponent } from '../qcm-element/qcm-element.component';
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router'; 



@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css']
})
export class QcmComponent implements OnInit{
  
  url:any;
  qcm:any;
  tag:string="";

  constructor(private route: ActivatedRoute,private http: HttpClient) {
   }
   ngOnInit() { 
    
    this.route.queryParams.subscribe( 
      params => { 
        this.tag =  params['tag']; 
      } 
    ) 
    switch(this.tag){
      case "uml1" : this.url='../../assets/data/uml1.json';console.log("kika malika");break;
      case "uml2" : this.url="../../assets/data/uml2.json";break;
      case "uml3" : this.url="../../assets/data/uml3.json";break;
      case "algrebre1" : this.url="../../assets/data/algrebre1.json";break;
      case "algrebre2" : this.url="../../assets/data/algrebre2.json";break;
      case "algrebre3" : this.url="../../assets/data/algrebre3.json";break;
      case "analyse1" : this.url="../../assets/data/analyse1.json";break;
      case "analyse2" : this.url="../../assets/data/analyse2.json";break;
      case "analyse3" : this.url="../../assets/data/analyse3.json";break;
      case "optique1" : this.url="../../assets/data/optique1.json";break;
      case "optique2" : this.url="../../assets/data/optique2.json";break;
      case "optique3" : this.url="../../assets/data/optique3.json";break;
      case "angular1" : this.url="../../assets/data/angular1.json";break;
      case "angular2" : this.url="../../assets/data/angular2.json";break;
      case "angular3" : this.url="../../assets/data/angular3.json";break;
      case "php1" : this.url="../../assets/data/php1.json";break;
      case "php2" : this.url="../../assets/data/php2.json";break;
      case "php3" : this.url="../../assets/data/php3.json";break;
      default: console.log("NOT OK");
  } 
  this.http.get(this.url).toPromise().then(data =>{
    this.qcm=data;
  })
   }
}


  
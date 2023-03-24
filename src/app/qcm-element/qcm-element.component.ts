import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qcm-element',
  templateUrl: './qcm-element.component.html',
  styleUrls: ['./qcm-element.component.css']
})
export class QcmElementComponent {
   @Input() question:string='';
   @Input() reponse:string[]=["","","",""];
   @Input() value:boolean=false;

  constructor(){}

 

}

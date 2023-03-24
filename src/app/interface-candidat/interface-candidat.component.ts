import { Component } from '@angular/core';
import { NotifierService } from "angular-notifier";


@Component({
  selector: 'app-interface-candidat',
  templateUrl: './interface-candidat.component.html',
  styleUrls: ['./interface-candidat.component.css']
})
export class InterfaceCandidatComponent {
  private readonly notifier: NotifierService;

  constructor(notifierService: NotifierService) {  this.notifier = notifierService; }
  
  
  
  public showNotification( type: string, message: string ): void {
		this.notifier.notify( type, message );

  }
}

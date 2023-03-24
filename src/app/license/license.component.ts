import { Component, OnInit } from '@angular/core';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {
  faCoffee = faCheckSquare;

  constructor() { }

  ngOnInit(): void {
  }

}

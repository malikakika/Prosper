import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  cheminMale:any = "src/assets/man.png";
  cheminFemelle:any = "src/assets/man.png";
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HalfService } from '../service/half.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html'
})
export class EnglishComponent implements OnInit {

  constructor(private halfService:HalfService) { }  //  added as arguement to constructor

  ngOnInit() {
  }
  number : number;
	half : number;

  	getHalf() {
      //this.half = this.number/2;
      this.half = this.halfService.getHalf(this.number);
  	}

}

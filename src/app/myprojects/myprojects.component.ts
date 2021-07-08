import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css'],
  animations:[
    

    trigger('listAnimation',[
      transition('void => *',[
        
        animate('2s ease-in',keyframes([
            style({opacity:0,transform:'translateY(-55px)',offset:0}),
            style({opacity:0.5,transform:'translateY(35px)',offset:0.3}),
            style({opacity:1,transform:'translateY(0)',offset:1}),
        ]))
      ])
  ]),
  
  

  ]



})
export class MyprojectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

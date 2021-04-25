import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({opacity:0}),
        animate(4000)
      ])
    ]),

    trigger('listAnimation',[
      transition('void => *',[
        
        animate('1s ease-in',keyframes([
            style({opacity:0,transform:'translateY(-55px)',offset:0}),
            style({opacity:0.5,transform:'translateY(35px)',offset:0.3}),
            style({opacity:1,transform:'translateY(0)',offset:1}),
        ]))
      ])
  ]),
  trigger('img',[
    transition('void => *',[
      
      animate('1.5s ease-in',keyframes([
          style({opacity:0,transform:'translateX(-75px)',offset:0}),
          style({opacity:0.5,transform:'translateX(35px)',offset:0.3}),
          style({opacity:1,transform:'translateX(0)',offset:1}),
      ]))
    ])
]),

trigger('bumpIn',[
  transition('void => *',[
    style({transform: 'scale(0.5)',opacity:0}),
    animate('1s cubic-bezier(.8, -0.6,0.2,1.5)',
        style({transform:'scale(1)',opacity:1})),
        
  ])
  ]),


trigger('btn',[
  transition('void => *',[
    
    animate('1.5s ease-in',keyframes([
        style({opacity:0,transform:'translateY(75px)',offset:0}),
        style({opacity:0.5,transform:'translateY(-35px)',offset:0.3}),
        style({opacity:1,transform:'translateY(0)',offset:1}),
    ]))
  ])
])

  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

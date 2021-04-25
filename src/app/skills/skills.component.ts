import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations:[
 
trigger('bumpIn',[
  transition('void => *',[
    style({transform: 'scale(0.5)',opacity:0}),
    animate('1.5s cubic-bezier(.8, -0.6,0.2,1.5)',
        style({transform:'scale(1)',opacity:1})),
        
  ])
  ])




  ]
})

export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

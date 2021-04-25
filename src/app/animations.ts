
import { animate, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
import { BOUNCE_IN, BOUNCE_OUT } from 'angular-bounce';

export let fade = trigger('fade',[
    transition('void => *',[
      style({opacity:0}),
      animate(2000)
    ])
  ]);

  export let bounce= trigger('listAnimation',[
      transition('void => *',[
        
        animate('1s ease-in',keyframes([
            style({opacity:0,transform:'translateY(-75px)',offset:0}),
            style({opacity:0.5,transform:'translateY(35px)',offset:0.3}),
            style({opacity:1,transform:'translateY(0)',offset:1}),
        ]))
      ])
  ]);
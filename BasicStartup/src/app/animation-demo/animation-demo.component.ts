import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations: [
    trigger('divStyle', ([
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0px)',
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)',
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(500)),
    ])),
    trigger('wildStyle', ([
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0px) scale(1)',
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)',
      })),
      state('shrink', style({
        'backgroundColor': 'green',
        transform: 'translateX(0px) scale(0.5)',
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(500)),
      transition('shrink <=> *', [
        style({ 'backgroundColor': 'orange' }),
        animate(500, style({ 'borderRadius': '50px' })),
        animate(500)]),
    ])),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0px)',
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(200)]),
      transition('* => void',
        animate(200, style({
          transform: 'translateX(100px)',
          opacity: 0,
        })))
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0px)'
      })),
      transition('void => *',
        animate(1000, keyframes([
          style({
            opacity: 0,
            transform: 'translateX(-100px)',
            offset: 0,
          }),
          style({
            opacity: 0.2,
            transform: 'translate(-80px)',
            offset: 0.2,
          }),
          style({
            opacity: 0.5,
            transform: 'translateX(-50px)',
            offset: 0.5
          }),
          style({
            opacity: 0.8,
            transform: 'translate(-20px)',
            offset: 0.8,
          }),
          style({
            opacity: 1,
            transform: 'translateX(0px)',
            offset: 1,
          }),
        ]))),
      transition('* => void', [
        group([
          animate(100, style({
            'color': 'red'
          })),
          animate(1000, style({
            transform: 'translateX(100px)',
            opacity: 0,
          }))
        ])
      ])
    ])
  ],

})
export class AnimationDemoComponent implements OnInit {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  constructor () { }

  ngOnInit() {
  }

  onAdd(item) {
    this.list.push(item);
  }

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
    this.wildState = this.wildState === 'normal' ? 'highlighted' : 'normal';
  }

  onShrink() {
    this.wildState = 'shrink';
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}

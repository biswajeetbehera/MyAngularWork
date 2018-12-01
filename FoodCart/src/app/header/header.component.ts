import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() switchLink = new EventEmitter<string>();
  constructor () { }

  ngOnInit() {
  }

  OnClick(feature: string) {
    this.switchLink.emit(feature);
  }

}

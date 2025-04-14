import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'demo';
  a="first demo."
  istrue = true
  members = ['a','b','c','d']
}

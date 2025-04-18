import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-session',
  templateUrl: './binding-session.component.html',
  styleUrls: ['./binding-session.component.sass']
})
export class BindingSessionComponent {

  employeeName = "Vijaya"
  msg= "used for increased value"
  isdisable = false

  count = 0

  increaesevaue(){
    this.count++
  }
}

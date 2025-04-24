import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.sass', '../first/first.component.sass'],
  standalone:true
})
export class SecondComponent {
   color = 'red'
   fontSize = '30px'

   isactive = true
   notactive = false
}

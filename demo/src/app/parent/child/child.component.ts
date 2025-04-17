import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {
@Input() name: string =''
@Output() sendmsgtoparent : EventEmitter<string> = new EventEmitter();

onclickbuton(){
  this.sendmsgtoparent.emit(this.name.toUpperCase())
}
}

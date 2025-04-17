import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent {
  fruits : string[] =['Apple' , 'Mango' , 'Banana' ,'Orange']

  isTrue = false

  userName : string = "mumbai indians"

  message: string = ''

  getMsgFromChild(msg:string){
    this.message= msg
   }

}

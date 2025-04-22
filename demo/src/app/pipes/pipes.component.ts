import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent {
  today: Date = new Date();
  number = 10.2

  toUpper = 'welcome'

  person = {
    name:'radha',
    age:14
  };

  subject = 'GoodMorning'

  gender = 'male'

  genderMap = {
    'male': 'His/Him',
    'Female': 'Her/she'
  };

  changeGender(gender:string){
    this.gender=gender;
  }
}

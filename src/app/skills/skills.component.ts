import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  progressArr: any = [
    {
      width: 'width: 100% ',
      title: 'HTML',
    },
    {
      width: 'width: 100% ',
      title: 'CSS',
    },
    {
      width: 'width: 70% ',
      title: 'SCSS',
    },
    {
      width: 'width: 80% ',
      title: 'Javascript',
    },
    {
      width: 'width: 70% ',
      title: 'Angular',
    },
  ];
}

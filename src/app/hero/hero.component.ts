import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  name: string = 'Bishoy';
  secondName: string = 'Saeed';
  jopTitle: string = 'Full Stack Web-developer';
}

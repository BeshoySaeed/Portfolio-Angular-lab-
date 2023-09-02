import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  card: any = [
    {
      id: 1,
      title: 'WEB DESIGN',
    },
    {
      id: 2,
      title: 'MOBILE DESIGN',
    },
    {
      id: 3,
      title: 'LOGO DESIGN',
    },
    {
      id: 4,
      title: 'WEB APPLICATION DEVELOPMENT',
    },
    {
      id: 5,
      title: ' MOBILE APPLICATION DEVELOPMENT',
    },
    {
      id: 6,
      title: 'PWA DEVELOPMENT',
    },
  ];
}

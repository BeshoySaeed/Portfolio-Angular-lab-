import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-port-card',
  templateUrl: './port-card.component.html',
  styleUrls: ['./port-card.component.scss'],
})
export class PortCardComponent {
  @Input() card: any;

  isEven: boolean = true;
}

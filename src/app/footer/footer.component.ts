import { Component } from '@angular/core';
import {
  faAddressBook,
  faMessage,
  faWalking,
  faVirusCovid,
  faVest,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  addressIcon = faAddressBook;
  messageIcon = faMessage;
  linkedIcon = faLinkedin;
  faceIcon = faFacebook;
  instIcon = faTwitter;
}

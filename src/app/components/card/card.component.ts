import { Component, Input } from '@angular/core';
import { ISocialNetwork } from 'src/app/models/models';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() public socialNetworks: ISocialNetwork[] = [];
}

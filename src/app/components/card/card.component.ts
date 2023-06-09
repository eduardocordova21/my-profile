import { AfterContentChecked, Component, Input } from '@angular/core';
import { ISocialNetwork } from 'src/app/models/models';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['card.component.scss'],
})
export class CardComponent implements AfterContentChecked {
  @Input() public socialNetworks: ISocialNetwork[] = [];

  public ngAfterContentChecked(): void {
    let cards: any = document.querySelectorAll('#my-card');

    VanillaTilt.init(cards, {
      max: 25,
      speed: 40,
      glare: true,
      'max-glare': 1,
    });
  }
}

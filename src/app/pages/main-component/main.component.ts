import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Category, ISocialNetwork, ISocialNetworks } from '../../models/models';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(
          '4s ease-in',
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class MainComponent implements OnInit {
  public socialNetworksPersonals: ISocialNetwork[] = [];
  public socialNetworksDevelopments: ISocialNetwork[] = [];
  public socialNetworksProfessionals: ISocialNetwork[] = [];

  public categories = Category;

  public pageIsLoading: boolean = true;

  public constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.dataService
      .getSocialNetworks()
      .subscribe((result: ISocialNetworks) => {
        result.socialNetworks.forEach((social) => {
          switch (social.category) {
            case Category.Professional:
              this.socialNetworksProfessionals.push(social);
              break;

            case Category.Development:
              this.socialNetworksDevelopments.push(social);
              break;

            case Category.Personal:
              this.socialNetworksPersonals.push(social);
              break;
          }
        });

        this.pageIsLoading = false;
      });
  }
}

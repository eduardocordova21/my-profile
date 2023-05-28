import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  Category,
  IConfiguration,
  ISocialNetwork,
  ISocialNetworks,
} from '../../models/models';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MainComponent implements OnInit {
  public profileImgPath: string = '';

  public socialNetworksPersonals: ISocialNetwork[] = [];
  public socialNetworksDevelopments: ISocialNetwork[] = [];
  private socialNetworksProfessionals: ISocialNetwork[] = [];

  public categories = Category;

  private socialNetworks: ISocialNetwork[] = [];

  public constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.dataService.getConfigurations().subscribe((result: IConfiguration) => {
      this.profileImgPath = result.profileImgPath;
    });

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
      });
  }
}

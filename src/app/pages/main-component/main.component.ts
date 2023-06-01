import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  Category,
  IConfiguration,
  ISocialNetwork,
  ISocialNetworks,
  Languages,
} from '../../models/models';
import { DataService } from '../../services/data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(3000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MainComponent implements OnInit {
  public profileImgPath: string = '';

  public socialNetworksPersonals: ISocialNetwork[] = [];
  public socialNetworksDevelopments: ISocialNetwork[] = [];
  public socialNetworksProfessionals: ISocialNetwork[] = [];

  public categories = Category;
  public languages = Languages;

  public constructor(
    private dataService: DataService,
    private translateService: TranslateService
  ) {}

  public ngOnInit(): void {
    this.translateService.use(Languages.PtBR);

    this.dataService.getConfigurations().subscribe((result: IConfiguration) => {
      this.profileImgPath = result.profileImagePath;
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

  public setCountryFlag(language: Languages): string {
    switch (language) {
      case Languages.PtBR:
        return 'assets/images/pt-BR.png';

      case Languages.EnUS:
        return 'assets/images/en-US.png';

      case Languages.EsEs:
        return 'assets/images/es-ES.png';
    }
  }

  public setLanguage(language: Languages): void {
    switch (language) {
      case Languages.PtBR:
        this.translateService.use(Languages.PtBR);
        break;
      case Languages.EnUS:
        this.translateService.use(Languages.EnUS);
        break;
      case Languages.EsEs:
        this.translateService.use(Languages.EsEs);
        break;
    }
  }
}

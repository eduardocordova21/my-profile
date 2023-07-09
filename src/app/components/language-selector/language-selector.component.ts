import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from 'src/app/models/models';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent implements OnInit {
  public languages = Languages;

  constructor(private translateService: TranslateService) {}

  public ngOnInit(): void {
    this.translateService.use(Languages.PtBR);
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
}

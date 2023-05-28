import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './app/pages/main-component/main.module';

platformBrowserDynamic()
  .bootstrapModule(MainModule)
  .catch((err) => console.error(err));

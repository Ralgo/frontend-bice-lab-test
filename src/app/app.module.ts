import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {es_ES, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import es from '@angular/common/locales/es';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NZ_CONFIG, NzConfig} from 'ng-zorro-antd/core/config';
import {IndicatorComponent} from './pages/indicator/indicator.component';

registerLocaleData(es);

const ngZorroConfig: NzConfig = {
  message: {nzTop: 120},
  notification: {nzTop: 240}
};

@NgModule({
  declarations: [
    AppComponent,
    IndicatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule
  ],
  providers: [{provide: NZ_I18N, useValue: es_ES}, {provide: NZ_CONFIG, useValue: ngZorroConfig}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

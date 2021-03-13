import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndicatorComponent} from './pages/indicator/indicator.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
  {path: 'indicators', component: IndicatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

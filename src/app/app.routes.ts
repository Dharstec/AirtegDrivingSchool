import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NgModule } from '@angular/core';
import { TermsAndCondition } from './pages/terms-and-condition/terms-and-condition';
import { PageNotFound } from './shared/page-not-found/page-not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'terms-and-condition', component: TermsAndCondition },
    { path: '**', component: PageNotFound },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled', // ✅ important
  scrollOffset: [0, 80], // optional: offset for sticky headers
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
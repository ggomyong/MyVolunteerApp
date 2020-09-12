import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
    { path: '', component: LandingComponent},
    { path: 'who-we-are', component: IntroductionComponent},
    { path: 'buy-from-us', component: ShopComponent},
    { path: 'what-we-did', component: ActivityComponent}, 
    { path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

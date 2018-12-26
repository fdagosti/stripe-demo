import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './core/auth.guard';

const routes: Routes = [
  //{ path: '', component: ReadMeComponent},
  //{ path: 'charge', component: ChargeCardComponent, canActivate: [AuthGuard]  },
  //{ path: 'save-card', component: SaveCardComponent, canActivate: [AuthGuard]  },
  //{ path: 'subscription', component: SubscriptionPageComponent, canActivate: [AuthGuard]  },
  //{ path: 'dashboard', component: StripeDashboardComponent, canActivate: [AuthGuard]  },

  // Stripe Connect
  //{ path: 'connect', component: ConnectPageComponent  },
  //{ path: 'redirect', component: ConnectRedirectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

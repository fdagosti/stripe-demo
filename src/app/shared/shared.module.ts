import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { StripePipe } from './stripe.pipe';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [UserLoginComponent, NavBarComponent, StripePipe, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [UserLoginComponent, FormsModule, NavBarComponent, LoadingSpinnerComponent, StripePipe]
})
export class SharedModule { }

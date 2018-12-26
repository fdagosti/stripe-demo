import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [UserLoginComponent, NavBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [UserLoginComponent, FormsModule, NavBarComponent]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './MainComponent/header/header.component';
import { FooterComponent } from './MainComponent/footer/footer.component';
import { AboutComponent } from './MainComponent/about/about.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { ContactComponent } from './MainComponent/contact/contact.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }

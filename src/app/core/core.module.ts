import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PortalModule } from '@angular/cdk/portal';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    PortalModule,
    BrowserAnimationsModule,
    MatMenuModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatMenuModule,
    MatButtonModule,
    PortalModule,
    BrowserAnimationsModule,
    MatMenuModule,
  ],
})
export class CoreModule {}

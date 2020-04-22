import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PortalModule } from '@angular/cdk/portal';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainPageComponent],
  imports: [CommonModule, MatMenuModule, MatButtonModule, PortalModule, BrowserAnimationsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatMenuModule,
    MatButtonModule,
    PortalModule,
    BrowserAnimationsModule,
  ],
})
export class CoreModule {}

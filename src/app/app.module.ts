import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { CardTempleteComponent } from './card-templete/card-templete.component';
import { CardDirectiveComponent } from './card-directive/card-directive.component';
import { CardInjectionComponent } from './card-injection/card-injection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponentComponent,
    CardTempleteComponent,
    CardDirectiveComponent,
    CardInjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

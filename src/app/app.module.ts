import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    FeaturesComponent,
    ContactComponent,
    BodyComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // NgbModule.forRoot(),
    // NgbModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

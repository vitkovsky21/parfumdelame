import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    FooterComponent,
    AboutComponent,
    CatalogComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [SwiperModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

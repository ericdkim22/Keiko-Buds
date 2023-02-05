import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MapSectionComponent } from './components/map-section/map-section.component';
import { ContentComponent } from './components/content/content.component';

import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar'
// import { MatMenu } from "@angular/material/menu";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    MapSectionComponent,
    ContentComponent
  ],
  exports:[
    MatMenuModule
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from '@angular/forms';
import {ExitAboutGuard} from './exit.about.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './home/main/main.component';
import { AboutComponent } from './home/about/about.component';
import { ReserveComponent } from './home/reserve/reserve.component';
import { LunchComponent } from './home/lunch/lunch.component';
import { MenuComponent } from './home/menu/menu.component';
import { DelivComponent } from './home/deliv/deliv.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { ListComponent } from './home/list/list.component';
import { SpecComponent } from './home/spec/spec.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FoodsComponent } from './foods/foods.component';
import { ImagesComponent } from './images/images.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'feedback', component: FeedbackComponent, canDeactivate: [ExitAboutGuard]},
  {path: 'foods', component: FoodsComponent},
  {path: 'images', component: ImagesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    ReserveComponent,
    LunchComponent,
    MenuComponent,
    DelivComponent,
    GalleryComponent,
    ListComponent,
    SpecComponent,
    FeedbackComponent,
    FoodsComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ExitAboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

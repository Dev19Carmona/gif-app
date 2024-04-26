import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { CardGifComponent } from './components/card-gif/card-gif.component';
import { MainComponent } from './pages/main/main.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    ListComponentComponent,
    CardGifComponent,
    MainComponent,
    HomePageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardGifComponent } from './components/card-gif/card-gif.component';
import { LoaderGeneralComponent } from './components/loader-general/loader-general.component';



@NgModule({
  declarations: [
    SidebarComponent,
    CardGifComponent,
    LoaderGeneralComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    CardGifComponent,
    LoaderGeneralComponent
  ]
})
export class SharedModule { }

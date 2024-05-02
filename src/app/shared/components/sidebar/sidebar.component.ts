import { Component } from '@angular/core';
import { GifService } from '../../../gif/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifService: GifService) {}
  get tagHistory() {
    return this.gifService.tagsHistory;
  }
}

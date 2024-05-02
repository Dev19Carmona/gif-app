import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'gif-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  constructor(private gifService: GifService) {}
  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value
    this.gifService.searchTag(newTag)
    this.tagInput.nativeElement.value = ''
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gif-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  constructor() {}
  searchTag(): void {

    const newTag = this.tagInput
    console.log({ newTag });
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private _tagsHistory: string[] = [];
  constructor() {}
  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }
  private organizeHistory(tag:string){

  }
  searchTag(tag: string): void {
    if(tag.length === 0)return
    if(this._tagsHistory.includes(tag))return
    if(this._tagsHistory.length === 10){
      this._tagsHistory = []
    }
    this._tagsHistory.unshift(tag);
  }
}

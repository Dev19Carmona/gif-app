import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  public gifList: Gif[] = []
  private _tagsHistory: string[] = [];
  private apiKey: string = '0goLrkobGRrRzWZ6ucRhIQWIueFEXC99';
  private gifServiceUrl: string = 'https://api.giphy.com/v1/gifs';
  private limit: number = 10;

  constructor(private http: HttpClient) {}

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    if (tag.length === 0) return;
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    if (this._tagsHistory.length === 10) {
      this._tagsHistory = [];
    }
    this._tagsHistory.unshift(tag);
  }

  searchTag(tag: string): void {
    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', this.limit)
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.gifServiceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data
      });
  }

}

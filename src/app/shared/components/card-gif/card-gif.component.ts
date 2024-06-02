import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../../gif/interfaces/gifs.interface';

@Component({
  selector: 'app-card-gif',
  templateUrl: './card-gif.component.html',
  styleUrl: './card-gif.component.css'
})
export class CardGifComponent implements OnInit {
  @Input()
  gif!: Gif;
  load: boolean = true
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required')
    setTimeout(() => {
      this.load = false

    }, 1500);
  }
}

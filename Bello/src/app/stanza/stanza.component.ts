import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stanza',
  templateUrl: './stanza.component.html',
  styleUrls: ['./stanza.component.css']
})
export class StanzaComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 16, rows: 1, color: 'lightblue'},
    {text: 'Three', cols: 16, rows: 6, color: 'lightpink'},
    {text: 'Footer', cols: 16, rows: 1, color: 'white'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

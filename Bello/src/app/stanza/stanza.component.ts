import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stanza',
  templateUrl: './stanza.component.html',
  styleUrls: ['./stanza.component.css']
})
export class StanzaComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 8, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 8, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 8, rows: 6, color: 'lightpink'},
    {text: 'Four', cols: 8, rows: 6, color: '#DDBDF1'},
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

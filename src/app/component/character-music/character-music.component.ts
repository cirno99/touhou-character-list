import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/core/model/character';

@Component({
  selector: 'app-character-music',
  templateUrl: './character-music.component.html',
  styleUrls: ['./character-music.component.less']
})
export class CharacterMusicComponent implements OnInit {
  @Input() character: Character;
  constructor() { }

  ngOnInit(): void {
  }

}

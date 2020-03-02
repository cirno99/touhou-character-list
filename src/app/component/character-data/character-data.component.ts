import { Component, OnInit, Input } from '@angular/core';
import {Character} from '../../core/model/character';
@Component({
  selector: 'app-character-data',
  templateUrl: './character-data.component.html',
  styleUrls: ['./character-data.component.less']
})
export class CharacterDataComponent implements OnInit {

  constructor() { }
  @Input() character: Character;
  ngOnInit(): void {
  }

}

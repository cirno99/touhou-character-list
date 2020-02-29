import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../core/model/character';
import * as Underscore from 'underscore';
import * as _ from 'underscore';
// import { CharacterImgComponent } from '../character-img/character-img.component';
@Component({
  selector: 'app-characters',
  providers: [CharacterService],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less']
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  groupped;
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.showCharacters();
  }
  showCharacters() {
    this.characterService.getCharacters().subscribe((data: Character[]) => {
      this.characters = data;
      this.groupped = this.partition(data, 4);
      console.log(this.characters);
      console.log(this.groupped);
    });
  }

  partition = (data, n) => {
    const underscore = Underscore.chain ? Underscore : _;
    return underscore
      .chain(data)
      .groupBy((element, index) => Math.floor(index / n))
      .toArray()
      .value();
  }
}

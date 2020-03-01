import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Character } from '../../core/model/character';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.less']
})
export class CharacterDetailComponent implements OnInit {
  tab = 1;
  character: Character;
  constructor(
    private characterService: CharacterService,
    private routeParams: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCharacterDetail();
  }
  getCharacterDetail() {
    this.routeParams.params
      .pipe(map((params: any) => params.name))
      .subscribe(characterName => {
        this.characterService
          .getCharacterByName(characterName)
          .subscribe(characters => (this.character = characters[0]));
      });
  }

  selectTab = tab => (this.tab = tab);
}

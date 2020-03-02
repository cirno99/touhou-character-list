import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/core/model/character';
import { Work } from 'src/app/core/model';
import { ActivatedRoute } from '@angular/router';
import { WorkService } from 'src/app/services/work.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-character-works',
  templateUrl: './character-works.component.html',
  styleUrls: ['./character-works.component.less']
})
export class CharacterWorksComponent implements OnInit {
  @Input() character: Character;
  showingPage = '';
  constructor(
    private workService: WorkService,
    private routeParams: ActivatedRoute
  ) {}
  ngOnInit(): void {}
  clickEvent(workName: string) {
    if (workName !== this.showingPage) {
      this.showingPage = workName;
    }
    console.log('mouse click : ' + workName);
  }
}

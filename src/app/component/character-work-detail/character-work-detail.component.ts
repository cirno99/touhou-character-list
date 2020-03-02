import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Work } from 'src/app/core/model';
import { WorkService } from 'src/app/services/work.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-character-work-detail',
  templateUrl: './character-work-detail.component.html',
  styleUrls: ['./character-work-detail.component.less']
})
export class CharacterWorkDetailComponent implements OnInit , OnChanges {
  @Input() workName: string;
  work: Work = null;
  constructor(private workService: WorkService) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.getWorkDetail();
  }
  getWorkDetail() {
    this.workService
      .getWorkByName(this.workName)
      .subscribe(works => (this.work = works[0]));
    console.log(this.work);
  }
}

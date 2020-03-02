import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterWorkDetailComponent } from './character-work-detail.component';

describe('CharacterWorkDetailComponent', () => {
  let component: CharacterWorkDetailComponent;
  let fixture: ComponentFixture<CharacterWorkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterWorkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterWorkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

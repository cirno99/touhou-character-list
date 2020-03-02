import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMusicComponent } from './character-music.component';

describe('CharacterMusicComponent', () => {
  let component: CharacterMusicComponent;
  let fixture: ComponentFixture<CharacterMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

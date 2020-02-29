import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterImgComponent } from './character-img.component';

describe('CharacterImgComponent', () => {
  let component: CharacterImgComponent;
  let fixture: ComponentFixture<CharacterImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterWorksComponent } from './character-works.component';

describe('CharacterWorksComponent', () => {
  let component: CharacterWorksComponent;
  let fixture: ComponentFixture<CharacterWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

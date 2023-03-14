import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorsCombinatorsComponent } from './selectors-combinators.component';

describe('SelectorsCombinatorsComponent', () => {
  let component: SelectorsCombinatorsComponent;
  let fixture: ComponentFixture<SelectorsCombinatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorsCombinatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorsCombinatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

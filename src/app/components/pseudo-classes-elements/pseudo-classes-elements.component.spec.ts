import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoClassesElementsComponent } from './pseudo-classes-elements.component';

describe('PseudoClassesElementsComponent', () => {
  let component: PseudoClassesElementsComponent;
  let fixture: ComponentFixture<PseudoClassesElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PseudoClassesElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PseudoClassesElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

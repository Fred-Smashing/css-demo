import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtRulesComponent } from './at-rules.component';

describe('AtRulesComponent', () => {
  let component: AtRulesComponent;
  let fixture: ComponentFixture<AtRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SushisComponent } from './sushis.component';

describe('SushisComponent', () => {
  let component: SushisComponent;
  let fixture: ComponentFixture<SushisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SushisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SushisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

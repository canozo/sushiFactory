import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiItemComponent } from './sushi-item.component';

describe('SushiItemComponent', () => {
  let component: SushiItemComponent;
  let fixture: ComponentFixture<SushiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SushiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

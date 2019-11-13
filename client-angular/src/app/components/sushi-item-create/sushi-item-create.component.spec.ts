import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiItemCreateComponent } from './sushi-item-create.component';

describe('SushiItemCreateComponent', () => {
  let component: SushiItemCreateComponent;
  let fixture: ComponentFixture<SushiItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SushiItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeconValueComponent } from './indecon-value.component';

describe('IndeconValueComponent', () => {
  let component: IndeconValueComponent;
  let fixture: ComponentFixture<IndeconValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndeconValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeconValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

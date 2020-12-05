import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreadsComponent } from './treads.component';

describe('TreadsComponent', () => {
  let component: TreadsComponent;
  let fixture: ComponentFixture<TreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

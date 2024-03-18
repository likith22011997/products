import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DglComponent } from './dgl.component';

describe('DglComponent', () => {
  let component: DglComponent;
  let fixture: ComponentFixture<DglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

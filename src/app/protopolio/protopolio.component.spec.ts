import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtopolioComponent } from './protopolio.component';

describe('ProtopolioComponent', () => {
  let component: ProtopolioComponent;
  let fixture: ComponentFixture<ProtopolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtopolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtopolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

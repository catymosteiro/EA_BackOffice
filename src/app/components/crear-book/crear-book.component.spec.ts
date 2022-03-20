import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBookComponent } from './crear-book.component';

describe('CrearBookComponent', () => {
  let component: CrearBookComponent;
  let fixture: ComponentFixture<CrearBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

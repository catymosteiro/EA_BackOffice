import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBookComponent } from './listar-book.component';

describe('ListarBookComponent', () => {
  let component: ListarBookComponent;
  let fixture: ComponentFixture<ListarBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

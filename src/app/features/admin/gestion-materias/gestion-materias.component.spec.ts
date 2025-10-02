import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMateriasComponent } from './gestion-materias.component';

describe('GestionMateriasComponent', () => {
  let component: GestionMateriasComponent;
  let fixture: ComponentFixture<GestionMateriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GestionMateriasComponent]
    });
    fixture = TestBed.createComponent(GestionMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

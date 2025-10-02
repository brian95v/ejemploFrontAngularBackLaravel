import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelStudentComponent } from './panel-student.component';

describe('PanelStudentComponent', () => {
  let component: PanelStudentComponent;
  let fixture: ComponentFixture<PanelStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PanelStudentComponent]
    });
    fixture = TestBed.createComponent(PanelStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

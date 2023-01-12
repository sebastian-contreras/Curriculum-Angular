import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHistoriaComponent } from './component-historia.component';

describe('ComponentHistoriaComponent', () => {
  let component: ComponentHistoriaComponent;
  let fixture: ComponentFixture<ComponentHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentHistoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

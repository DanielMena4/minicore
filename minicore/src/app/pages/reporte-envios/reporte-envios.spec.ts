import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEnvios } from './reporte-envios';

describe('ReporteEnvios', () => {
  let component: ReporteEnvios;
  let fixture: ComponentFixture<ReporteEnvios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteEnvios],
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteEnvios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

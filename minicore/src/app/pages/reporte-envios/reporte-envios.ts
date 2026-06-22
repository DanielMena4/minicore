import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { take } from 'rxjs/operators';


import { ReporteService } from '../../services/reporte.service';
import { ReporteResultado } from '../../models/reporte';

@Component({
  selector: 'app-reporte-envios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reporte-envios.html',
  styleUrl: './reporte-envios.css'
})
export class ReporteEnvios {

  private reporteService = inject(ReporteService);

  private cdr = inject(ChangeDetectorRef);

  fechaInicio = '';
  fechaFin = '';

  cargando = false;
  mensaje = '';

  resultados: ReporteResultado[] = [];

  buscado = false;
  consultar() {

    this.cargando = true;
    this.mensaje = '';
    this.resultados = [];
    this.buscado = false;

    this.cdr.detectChanges(); // 👈 FORZAR UI (IMPORTANTE)

    this.reporteService
      .obtenerReporte(this.fechaInicio, this.fechaFin)
      .pipe(take(1))
      .subscribe({
        next: (data) => {

          this.resultados = data ?? [];
          this.buscado = true;

          if (this.resultados.length === 0) {
            this.mensaje = 'No hay datos en este rango';
          }

          this.cargando = false;

          this.cdr.detectChanges();
        },

        error: (err) => {

          console.error(err);

          this.mensaje = 'Error al consultar';
          this.cargando = false;
          this.buscado = true;

          this.cdr.detectChanges();
        }
      });
  }
}
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ReporteResultado } from '../models/reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private http = inject(HttpClient);

  private apiUrl =
    'http://localhost:3000/api/reporte';

  obtenerReporte(
    fechaInicio: string,
    fechaFin: string
  ): Observable<ReporteResultado[]> {

    return this.http.post<ReporteResultado[]>(
      this.apiUrl,
      {
        fechaInicio,
        fechaFin
      }
    );
  }
}
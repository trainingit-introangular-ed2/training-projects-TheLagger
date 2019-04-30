import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private ultimoMensaje$ = new BehaviorSubject<any>([]);

  constructor() {}

  public select$ = () => this.ultimoMensaje$.asObservable();

  public dispatch(mensaje) {
    this.ultimoMensaje$.next(mensaje);
  }
}

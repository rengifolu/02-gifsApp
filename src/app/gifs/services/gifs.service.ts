import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'AUEyDWCcV1PGHAM2DZcVon9QLOwKhFTL'

  private _historial: string[] = [];

  constructor() { }

  get historial(){
    return [...this._historial];
  }


  buscarGifs(query: string){

    query = query.trim().toLowerCase();

    // includes es lo mismo que contains en java
    if (!this._historial.includes(query)) {
          // unshift agrega valor al comienzo del array .no al final
    this._historial.unshift(query);
    // The splice() method adds/removes items to/from an array, and returns the removed item(s).
    this._historial = this._historial.splice(0,10);
    }


    console.log(this._historial);
  }
}

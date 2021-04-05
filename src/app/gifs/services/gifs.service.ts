import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'AUEyDWCcV1PGHAM2DZcVon9QLOwKhFTL'
  private _historial: string[] = [];

  // todo cambiar any por su tipo
  public resultados:Gif[] = [];

  constructor(private http: HttpClient) { }

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


    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=AUEyDWCcV1PGHAM2DZcVon9QLOwKhFTL&q=${query}&limit=10`)
      .subscribe((res) => {
        console.log(res.data)
        this.resultados = res.data;
      })

    console.log(this._historial);
  }
}

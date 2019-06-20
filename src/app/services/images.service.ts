import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private _images = {
    decor: {
      chair: [],
      guestList: [],
      rings: [],
    }
  }

  constructor(
    private _http: HttpClient
  ) { }

  get images() {
    return this._images;
  }

  public getImages(): Observable<any[]> {
    
  }

}

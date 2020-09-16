import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getAll(id: any): string {
    if (!id) {
      throw new Error("invalid ID");
    }
    return `yout ID : ${id}`;
  }
}

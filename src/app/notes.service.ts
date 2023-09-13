import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() {
   }

  private data = new BehaviorSubject("")
  currentData = this.data.asObservable();

  setData(data: string) {
    this.data.next(data);
  }


  addNote(key: string, value: string) {
    localStorage.setItem(key, value)
  }

  getNote(key: string) {
    return localStorage.getItem(key) 
    // return localStorage.getItem(key) ? localStorage.getItem(key) : '';
  }

  getAllNote() {
    return Object.keys(localStorage)
  }

  removeNote(key: string) {
    localStorage.removeItem(key)
  }
}

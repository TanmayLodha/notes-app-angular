import { Component } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {

  constructor(private notesService: NotesService, private router: Router) {
    // console.log(notesList)
    console.log(this.notesService.getAllNote())
  }
  notesList = this.notesService.getAllNote()

  deleteNote(key: string) {
    this.notesService.removeNote(key)
    this.getNotes()
  }

  getNotes() {
    this.notesList = this.notesService.getAllNote()
  }

  addNote() {
    this.router.navigate(['/add', { result: true }])
  }

  editNote(key: string) {
    console.log(key)
    this.notesService.setData(key)
    this.router.navigate(['/edit', { result: true }])
  }

  viewNote(key: string) {
    console.log(key)
    this.notesService.setData(key)
    this.router.navigate(['/view', { result: true }])
  }
}

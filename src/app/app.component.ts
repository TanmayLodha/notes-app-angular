import { Component } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private notesService: NotesService ) { 
    // this.notesService.addNote('Hi', 'How are you?')
    // this.notesService.addNote('Hello', 'How are you?')
    // console.log(this.notesService.getAllNote())
  }
  title = 'notes-app';
}

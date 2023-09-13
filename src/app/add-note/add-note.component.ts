import { Component } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {
  constructor( private notesService: NotesService, private router: Router ) {}

  formData = {
    head: '',
    body: ''
  };

  onSubmit() {
    console.log('Form Data:', this.formData);
    this.notesService.addNote(this.formData.head, this.formData.body)
    this.notesService.setData(this.formData.head)
    this.router.navigate(['/notes', {result: true}])
  }

  backButton() {
    this.router.navigate(['/notes'])
  }

}

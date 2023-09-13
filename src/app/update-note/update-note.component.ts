import { Component, Input } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent {
  constructor(private notesService: NotesService, private router: Router) { }

  @Input('data') data: string = '';

  formData = {
    head: '',
    body: ''
  }


  ngOnInit() {
    this.notesService.currentData.subscribe(data => {
      this.formData.head = data;
      this.formData.body = this.notesService.getNote(data) as string;
    });
  }



  onSubmit() {
    console.log('Form Data:', this.formData);
    this.notesService.addNote(this.formData.head, this.formData.body)
    this.router.navigate(['/notes', { result: true }])
  }

  backButton() {
    this.router.navigate(['/notes'])
  }
}

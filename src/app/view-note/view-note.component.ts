import { Component, Input } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss']
})
export class ViewNoteComponent {
  constructor(private notesService: NotesService, private router: Router) {

  }
  // @Input('data') data: string = '';

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

  backButton() {
    this.router.navigate(['/notes'])
  }

}

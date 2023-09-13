import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { ViewNoteComponent } from './view-note/view-note.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NotesListComponent },
  { path: 'add', component: AddNoteComponent },
  { path: 'edit', component: UpdateNoteComponent },
  { path: 'view', component: ViewNoteComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

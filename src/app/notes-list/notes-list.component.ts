import { Component, OnInit } from '@angular/core';
import { mergeAnalyzedFiles } from '@angular/compiler';
import { Note } from '../model/note.model';
import { NotesService } from '../service/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Note[];
  noteSelectedForPreview: Boolean = false;
  notePreviewTextToDisplay: string = "";

  constructor(private notesService: NotesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.notesService
      .getNotes()
      .subscribe(notes => this.notes = notes);
  }

  editNote(event) {
    this.router.navigate(['notes', 'update', event.id]);
  }

  previewNote(event) {
    this.noteSelectedForPreview = true;
    this.notePreviewTextToDisplay = event.text;
  }

}

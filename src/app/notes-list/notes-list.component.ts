import { Component, OnInit } from '@angular/core';
import { mergeAnalyzedFiles } from '@angular/compiler';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes;
  noteSelectedForPreview: Boolean = false;
  notePreviewTextToDisplay: string = "";

  constructor() { }

  ngOnInit(): void {
    this.notes = [
      {name: "myfile1.txt", date: "20.03.2021", hasDraft: false, text: "My note's text"},
      {name: "myfile2.txt", date: "19.03.2021", hasDraft: true, text: "The other note's text"}
    ]
  }

  editNote(event) {
    console.log(event);
  }

  previewNote(event) {
    this.noteSelectedForPreview = true;
    this.notePreviewTextToDisplay = event.text;
  }

}

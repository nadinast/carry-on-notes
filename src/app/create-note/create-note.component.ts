import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { NotesService } from '../service/notes.service';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../model/note.model';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  items: MenuItem[];
  note: Note;
  draft: String;
  displaySaveMenu: boolean = false;
  canNoteNameChange: boolean = true;

  constructor(private notesService: NotesService,
              private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.items = [{
        label: 'Options',
        items: [{
          label: 'Save',
          icon: 'pi pi-save',
          command: () => this.displaySaveMenu = true
        },
        {
          label: 'Discard',
          icon: 'pi pi-times',
          command: () => this.note = new Note()
        },
        {
          label: 'View Notes',
          icon: 'pi pi-list',
          routerLink: '/notes/all'
        }
      ]}
    ];

    this.route.params.subscribe(params =>{
      let noteId = params['id'];
      if(noteId) {
        this.notesService
          .getNote(noteId)
          .subscribe(note => {
            this.note = note;
            this.canNoteNameChange = false;
          })
      } else {
        this.note = new Note();
      }
    });
  }

  saveNote() {
    this.note.hasDraft = !!this.draft;
    const now = new Date();
    this.note.date = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    this.notesService
      .createNote(this.note)
      .subscribe(note => {
        this.note.id = note.id;
        this.displaySaveMenu = false;
      });
  }

  closeSaveMenu() {
    this.displaySaveMenu = false;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpClient: HttpClient) { }

  getNotes() : Observable<Note[]> {
    return this.httpClient.get<Note[]>('/api/notes/');
  }

  getNote(id: number) : Observable<Note> {
    return this.httpClient.get<Note>(`/api/notes/${id}`);
  }

  updateNote(note: Note) : Observable<any> {
    return this.httpClient.put('/api/notes/update', note);
  }

  createNote(note: Note) : Observable<any> {
    return this.httpClient.post('/api/notes/', note);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../model/note.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpClient: HttpClient) { }

  getNotes() : Observable<Note[]> {
    return this.httpClient.get<Note[]>(`${environment.apiUrl}/api/notes/`);
  }

  getNote(id: number) : Observable<Note> {
    return this.httpClient.get<Note>(`${environment.apiUrl}/api/notes/${id}`);
  }

  updateNote(note: Note) : Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/api/notes/update`, note);
  }

  createNote(note: Note) : Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/api/notes/`, note);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotLoggedInGuardService } from './route-guard/not-logged-in-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'notes',
    children: [
      {
        path: 'create',
        component: CreateNoteComponent,
        canActivate: [NotLoggedInGuardService] 
      },
      {
        path: 'update/:id',
        component: CreateNoteComponent,
        canActivate: [NotLoggedInGuardService] 
      },
      {
        path: 'all',
        component: NotesListComponent,
        canActivate: [NotLoggedInGuardService] 
      }
    ]
  },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

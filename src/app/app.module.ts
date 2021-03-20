import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TabMenuModule} from 'primeng/tabmenu';
import {ToolbarModule} from 'primeng/toolbar';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ColorPickerModule} from 'primeng/colorpicker';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ChipModule} from 'primeng/chip';
import {AvatarModule} from 'primeng/avatar';

import { HomeComponent } from './home/home.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateNoteComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    ToolbarModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    ColorPickerModule,
    MenuModule,
    ButtonModule,
    TableModule,
    ChipModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

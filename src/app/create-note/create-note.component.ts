import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Options',
      items: [{
          label: 'Save',
          icon: 'pi pi-save',
          command: () => {
              
          }
      },
      {
          label: 'Discard',
          icon: 'pi pi-times',
          command: () => {
              
          }
      },
      {
        label: 'View Notes',
        icon: 'pi pi-list',
        command: () => {
            
        }
    }
    ]}
  ];
  }

}

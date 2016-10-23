import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataStructures: string[] = ['Array', 'Stack', 'Queue', 'Singly-Linked List', 'Doubly-Linked List'];
  algorithms: string[] = ['Quicksort', 'MergeSort', 'Heapsort', 'Insertion Sort', 'Selection Sort'];

  constructor(private api: ApiService) {
    // Do something with api
  }
}

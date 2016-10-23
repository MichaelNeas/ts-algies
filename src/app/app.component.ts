import { Component } from '@angular/core';

import { ApiService } from './shared';

import { Page } from './shared/page'

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataStructures: Page[] = [{name: 'Array', router: 'array'}, 
  							{name: 'Stack', router: ''},
  							{name: 'Queue', router: ''},
  							{name: 'Singly-Linked List', router: ''},
  							{name: 'Doubly-Linked List', router: ''}
  							];
  algorithms: string[] = ['Quicksort', 'MergeSort', 'Heapsort', 'Insertion Sort', 'Selection Sort'];

  constructor(private api: ApiService) {
    // Do something with api
  }
}

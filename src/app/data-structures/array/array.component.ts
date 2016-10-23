import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../shared';

@Component({
  selector: 'my-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
})
export class ArrayComponent implements OnInit {
	arrayValues: number[] = [1,2,3,4,5]

	constructor(private api: ApiService) {
	// Do something with api
	}

	ngOnInit(){

	}
}

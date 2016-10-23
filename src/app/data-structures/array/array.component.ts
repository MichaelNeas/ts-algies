import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../shared';

@Component({
  selector: 'my-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
})
export class ArrayComponent implements OnInit {
	arrayValues: number[] = [1, 2, 3, 4, 5];
	gottenElement: number;
	searchedIndex: number;
	foundElement: number;
	foundIndex: number;
	findElement: number;

	constructor(private api: ApiService) {

	}

	ngOnInit(){

	}

	getValue(input): void{
		let intValue = parseInt(input.value);
		this.searchedIndex = intValue;
		this.gottenElement = this.arrayValues[intValue];
		input.value = '';
	}

	getLength(): number{
		return this.arrayValues.length;
	}

	findValue(input): void{
		this.searchClear();
		let intValue = parseInt(input.value);
		this.findElement = intValue;
		this.foundElement = 
			this.arrayValues.find((value, index) => {
					if(intValue === value){
						this.foundIndex = index;
						return value;
					}

				});
		input.value = '';
	}

	searchClear():void{
		this.foundElement = undefined;
		this.findElement = undefined;
		this.foundIndex = undefined;
	}

	pushValue(input): void{
		let intValue = parseInt(input.value);
		this.arrayValues.push(intValue);
		input.value = '';
	}

	popOff(): void{
		this.arrayValues.pop();
	}

	removeElement(index): void{
		if(index>-1){
			this.arrayValues.splice(index, 1);
		}
	}

	replaceWith(index,value): void{
		let startIndex = parseInt(index.value);
		console.log(startIndex);
		if(startIndex>-1){
			let replaceValue = parseInt(value.value);
			console.log(replaceValue);
			this.arrayValues.splice(startIndex, 1, replaceValue);
			index.value = '';
			value.value = '';
		}
	}
}

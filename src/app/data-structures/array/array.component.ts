import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../shared';

@Component({
  selector: 'my-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
})
export class ArrayComponent implements OnInit {
	arrayValues: number[] = [1, 2, 3, 4, 5];
	advancedArrayValues: number[] = [-99, 2, -59, 0, 59, 9840, -8941, 2, -29, 52, 3, 91];
	filteredArray: number[];
	mappedArray: number[];
	activeClass: number = -1;
	mappedValue: number;
	gottenElement: number;
	searchedIndex: number;
	foundElement: number;
	foundIndex: number;
	findElement: number;
	maxReduced: number; 
	sumReduced: number; 
	minReduced: number;

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

	getAdvancedLength(): number{
		return this.advancedArrayValues.length;
	}

	getNewLength(): number{
		return this.filteredArray.length;
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
		this.maxReduced = undefined;
		this.sumReduced = undefined;
		this.minReduced = undefined;
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

	reduceMax(): void{
		this.searchClear();
		this.maxReduced = this.advancedArrayValues.reduce((this.max), Number.NEGATIVE_INFINITY);
	}

	max(total, curr): number{
		return total > curr ? total : curr;
	}

	reduceSum(): void{
		this.searchClear();
		this.sumReduced = this.advancedArrayValues.reduce((this.sum), 0);
	}

	sum(total, curr): number{
		return total += curr;
	}

	reduceMin(): void{
		this.searchClear();
		this.minReduced = this.advancedArrayValues.reduce((this.min), Number.POSITIVE_INFINITY);
	}

	min(total, cur): number{
		return total < cur ? total : cur;
	}

	mapValue(input): void{
		let inputValue = parseInt(input.value);
		this.mappedValue = inputValue;
		this.mappedArray = this.advancedArrayValues.map(curr => curr * inputValue);
		input.value = '';
	}

	filterValue(input): void{
		let inputValue = parseInt(input.value);
		this.filteredArray = this.advancedArrayValues.filter(value => value !== inputValue);
		input.value = '';
	}

	sortArray(): void{
		this.advancedArrayValues.sort(this.ascending);
	}
	ascending(a,b): number{
		return a-b;
	}

	loop(){
		this.advancedArrayValues.forEach((val, index, arr) => {
			setTimeout(() => {
				this.activeClass = index
				if(index === arr.length-1){
					this.finalCB();
				}
			}, 1000*index);
		});
	}

	finalCB(): void{
		this.activeClass = -1;
	}
}

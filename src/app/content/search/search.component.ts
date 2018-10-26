import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent  {
  @Input() ui;
  @Output() search = new EventEmitter<string>();
  searchString: string;
  constructor() { }

  submit(){
    this.search.emit(this.searchString);
  }
  
  
}

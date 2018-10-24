import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchString: string;
  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.search.emit(this.searchString);
  }
  
  
}

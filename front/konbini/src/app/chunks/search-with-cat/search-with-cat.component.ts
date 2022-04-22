import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-with-cat',
  templateUrl: './search-with-cat.component.html',
  styleUrls: ['./search-with-cat.component.scss']
})
export class SearchWithCatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show = false;

}

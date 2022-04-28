import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent implements OnInit {
  text = "default button text";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

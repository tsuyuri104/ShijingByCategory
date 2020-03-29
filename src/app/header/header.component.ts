import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = '从类别搜索诗经的诗';

  constructor() { }

  ngOnInit(): void {
  }

}

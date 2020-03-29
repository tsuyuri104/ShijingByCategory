import { Component, OnInit } from '@angular/core';

import { Reference } from "../json/reference.json";
import { Update } from "../json/update.json";
import { version } from "../../../package.json";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  ref = Reference;
  log = Update;
  ver = version;

  constructor() { }

  ngOnInit(): void {
  }

}

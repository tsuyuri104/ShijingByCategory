import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Shijing } from './json/shijing.json';
import { Topic } from './json/topic.json';
import { promise } from 'protractor';
import { collectExternalReferences } from '@angular/compiler';

interface IPoemCard {
  title: string,
  poems: Array<string>,
  topic: Array<string>,
  liuyi: Array<string>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = '从类别搜索诗经的诗';
  shijing: Array<IPoemCard> = Shijing;
  topic = Topic;

  constructor() {
    console.log("22");
  }

  onClick(chekedValues: RadioNodeList) {

    let targetPoems: Array<IPoemCard> = [];

    chekedValues.forEach(element => {

      let chk: HTMLInputElement = <HTMLInputElement>element;

      if (chk.checked) {
        Shijing.filter(poem => {
          return poem.topic.filter(t => {
            return t === <string>chk.value;
          }).length > 0;
        }).forEach(poem => {
          if (targetPoems.findIndex(p => p === poem) > -1) {
            console.log("have");
          }
          else {
            targetPoems.push(poem);
          }
        });
      }
    });

    this.shijing = targetPoems;
  }
}

import { Component, OnInit } from '@angular/core';

import { Shijing } from './../json/shijing.json';
import { Topic } from './../json/topic.json';

interface IPoem {
  title: string,
  poems: Array<string>,
  topic: Array<string>,
  liuyi: Array<string>
}
@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.scss']
})
export class PoemListComponent implements OnInit {

  shijing: Array<IPoem> = Shijing;
  topic = Topic;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(chekedValues: RadioNodeList) {

    let targetPoems: Array<IPoem> = [];

    chekedValues.forEach(element => {

      let chk: HTMLInputElement = <HTMLInputElement>element;

      if (chk.checked) {
        Shijing.filter(poem => {
          return poem.topic.filter(t => {
            return t === <string>chk.value;
          }).length > 0;
        }).forEach(poem => {
          if (targetPoems.findIndex(p => p === poem) === -1) {
            targetPoems.push(poem);
          }
        });
      }
    });

    targetPoems.sort((a, b) => {
      if (Shijing.findIndex(s => s.title === a.title) > Shijing.findIndex(s => s.title === b.title)) {
        return 1;
      } else {
        return -1;
      }
    })

    this.shijing = targetPoems;
  }

}

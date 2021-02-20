import { Component } from '@angular/core';
import * as components from '../assets/available.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LangCards';

  available:  Map<string, any>;
  selected: any;

  constructor() {
    this.available = new Map();
    this.selected = null;
  }

  ngOnInit(): void {
    (components  as  any).default.forEach(el => {
      import(`../assets/cards/${el.path}`).then(component => {
        this.available.set(el.name, (component  as  any).default);
      });
   });
  }

  public getAvailable() {
    return this.available;
  }

  public getSelected() {
    return this.selected;
  }
  public select(type: string) {
    this.selected = this.available.get(type);
  }

  async play(sound: string) {
    const audio = new Audio(`assets/sounds/${sound}`);
    audio.play();
  }
}

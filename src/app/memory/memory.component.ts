import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {
  selected: Array<any>;

  constructor(public app: AppComponent) {
    this.selected = null;
  }

  ngOnInit(): void { }

  async select(type: string) {
    this.app.select(type);
    this.selected = [...this.app.getSelected()];
    this.selected.push(...this.selected);
    AppComponent.mixArray(this.selected);
  }
}

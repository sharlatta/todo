import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }

}

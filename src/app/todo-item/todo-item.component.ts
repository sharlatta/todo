import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {ITodoItem} from '../todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() item: ITodoItem;
  @Output() remove: EventEmitter<string> = new EventEmitter();
  isComplete = false;

  removeItem(item: ITodoItem) {
    this.remove.emit(<any>this.item);
  }

  completeItem() {
    this.isComplete = !this.isComplete;
  }
}

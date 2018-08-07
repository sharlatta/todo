import {Component, OnInit} from '@angular/core';
import {TodoListService} from '../todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: any[];

  constructor(private service: TodoListService) {

  }

  ngOnInit() {
    this.todoList = this.service.getTodoList();
  }

  addItem(title) {
    this.service.addItem({title});
  }

  removeItem(item){
  this.todoList = this.service.removeItem(item);
  }
}

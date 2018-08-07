import {Injectable} from '@angular/core';
import {TodoListStorageService} from './todo-list-storage.service';

export interface ITodoItem {
  title: string;
}

@Injectable()
export class TodoListService {

  constructor(private storage: TodoListStorageService) {
  }

  todoList: ITodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  getTodoList() {
    return this.todoList;
  }

  addItem(item: ITodoItem) {
    this.todoList.push(item);
  }

  removeItem(item) {
    return this.storage.destroy(item);
  }
}

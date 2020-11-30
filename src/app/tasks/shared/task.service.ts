import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  dataModelo = new Date().getDate() + "/" + new Date(+1).getMonth() + "/" + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes();

  tasks: Task [] = [
    { id: 1, today: this.dataModelo, title: 'Titulo 1', description: 'Lembrete 1', setDate: new Date, completed: false }
  ]

  

  constructor() { }

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task=this.tasks.find((value) => value.id == id);
    return task;
  }

  save(task: Task) {
    if (task.id) {
      const taskArr = this.getById(task.id);
      taskArr.today = task.today;
      taskArr.title = task.title;
      taskArr.description = task.description;
      taskArr.setDate = task.setDate;
    } else {
      const lastId = this.tasks[this.tasks.length-1].id;
      task.id = lastId + 1;
      task.completed = false;
      this.tasks.push(task);
    }
  }

  delete(id: number) {
    const taskIndex = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(taskIndex, 1);
  }
}
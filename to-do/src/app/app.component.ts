import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'crazy-app-selector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task("Finished weekend Angular homework for Epicodus course"),
    new Task('Begin brainstorming possible JavaScript group projects.'),
    new Task('Add README file to last few Angular repos on Github')
  ];

  editTask() {
    alert("Time to edit a task!");
  }
}

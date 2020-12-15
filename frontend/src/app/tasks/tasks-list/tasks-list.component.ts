import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit()  {
      this.loadTasks();
  }

    loadTasks() {
        this.taskService.getTasks().then((response) => {
            console.log(response);
            this.tasks = JSON.parse(JSON.stringify(response)); //if you server returns json data
        }).catch((error) => {
            console.log(error);
        });

        this.taskService.onTaskAdded.subscribe(
            (task: Task) => this.tasks.push(task)
            );

    }

  getDueDateLabel(task:Task) {
      return task.completed ? 'badge-success' : 'badge-danger';
  }

  onTaskChange(event, task) {
      this.taskService.saveTask(task, event.target.checked).subscribe();

  }

}

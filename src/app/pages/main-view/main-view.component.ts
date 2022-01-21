import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Status } from 'src/app/status';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  tasks: Task[] = [];
  TaskStatus = Status;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((data)=>this.tasks=data);
  }
}

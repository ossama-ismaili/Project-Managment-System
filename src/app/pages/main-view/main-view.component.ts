import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer !== event.container) {
      console.log({event})
      this.tasks=this.tasks.map((task)=>{
        if(task.id===event.item.data.id){
          switch(event.container.id){
            case 'todo-list':
              task.status = Status.TODO;
              break;
            case 'doing-list':
              task.status = Status.DOING;
              break;
            case 'inreview-list':
              task.status = Status.INREVIEW;
              break;
            case 'done-list':
              task.status = Status.DONE;
              break;
            default :
              throw new Error("Unkown status");
          }
        }
        return task;
      });
      console.log({tasks: this.tasks})
    }
  }
}

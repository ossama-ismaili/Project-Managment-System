import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/task';

@Pipe({
  name: 'taskStatus'
})
export class TaskStatusPipe implements PipeTransform {
  transform(tasks: Task[], status: number): Task[] {
    return tasks.filter((task)=>task.status===status);
  }

}

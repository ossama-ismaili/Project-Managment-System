import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  title: string = '';
  dueDate: string = '';
  description: string = '';

  constructor(private boardService: BoardService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const task: Task={
      title: this.title,
      dueDate: this.dueDate,
      description: this.description
    }
    this.boardService.postTask(task);
    this.router.navigateByUrl('');
  }
}

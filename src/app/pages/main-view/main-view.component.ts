import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/interfaces/task';
import { Board } from 'src/app/interfaces/board';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  board: Board = {
    name: 'Main Board',
    columns: []
  };

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.getBoard().subscribe((data)=>this.board=data);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.boardService.putBoard(this.board).subscribe();
  }
}

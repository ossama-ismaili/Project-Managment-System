import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../interfaces/board';
import { apiUrl } from '../helpers/consts';

const headerOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private boardApiUrl:string = `${apiUrl}/boards/1`;

  constructor(private http: HttpClient) { }
  

  getBoard(): Observable<Board>{
    return this.http.get<Board>(this.boardApiUrl);
  }

  putBoard(board: Board):Observable<void>{
    return this.http.put<void>(this.boardApiUrl, board, headerOptions);
  }
}

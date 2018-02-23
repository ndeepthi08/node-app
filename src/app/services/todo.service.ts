import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Inject } from '@angular/core';

@Injectable()
export class TodoService {

  private todoListUrl = 'http://localhost:3000/api/todos/test';

  constructor(private http: Http) { }

  getTodoList() {
    return this.http.get(this.todoListUrl).map((response: Response) => response.json());
  }
}

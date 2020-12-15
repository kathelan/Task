import {HttpClient} from "@angular/common/http";
import {Injectable, EventEmitter} from "@angular/core";
import {Task}       from "src/app/tasks/task.model";

@Injectable()
export class TaskService {

    onTaskAdded = new EventEmitter<Task>();

    constructor(private http: HttpClient) {
    }

    getTasks() {
        return this.http.get('/api/tasks').toPromise();
    }

    saveTask(task: Task, checked: boolean) {
        task.completed = checked;
        return this.http.post('/api/tasks/save', task)
            .pipe(response => response);
    }

    addTask(task: Task) {
        return this.http.post('/api/tasks/save', task)
            .pipe(response => response);
             }
}

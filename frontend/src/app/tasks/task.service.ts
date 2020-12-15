import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Task}       from "src/app/tasks/task.model";

@Injectable()
export class TaskService {

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
}

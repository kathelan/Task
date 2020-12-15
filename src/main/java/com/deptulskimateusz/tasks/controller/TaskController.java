package com.deptulskimateusz.tasks.controller;

import com.deptulskimateusz.tasks.domain.Task;
import com.deptulskimateusz.tasks.service.TaskService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value={"","/"})
    public Iterable<Task> getListTasks() {
        return this.taskService.taskList();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task) {
        return this.taskService.save(task);
    }
}

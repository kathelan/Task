package com.deptulskimateusz.tasks.service;

import com.deptulskimateusz.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> taskList();

    Task save(Task task);
}

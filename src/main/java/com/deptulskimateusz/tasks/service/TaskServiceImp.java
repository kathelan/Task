package com.deptulskimateusz.tasks.service;

import com.deptulskimateusz.tasks.domain.Task;
import com.deptulskimateusz.tasks.repository.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImp implements TaskService{

    private TaskRepository taskRepository;

    public TaskServiceImp(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> taskList() { return this.taskRepository.findAll(); }

    @Override
    public Task save(Task task) { return this.taskRepository.save(task); }
}

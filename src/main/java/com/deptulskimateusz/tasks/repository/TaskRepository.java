package com.deptulskimateusz.tasks.repository;

import com.deptulskimateusz.tasks.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {



}


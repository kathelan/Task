package com.deptulskimateusz.tasks;

import com.deptulskimateusz.tasks.domain.Task;
import com.deptulskimateusz.tasks.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class TasksApplication {

    public static void main(String[] args) {
        SpringApplication.run(TasksApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(TaskService taskService) {
        return args -> {
            taskService.save(new Task(1L, "Create Spring Boot Application", LocalDate.now(), true));
            taskService.save(new Task(2L, "Create Spring Project packages", LocalDate.now(), true));
            taskService.save(new Task(3L, "Create Spring Boot Application", LocalDate.now(), true));
            taskService.save(new Task(4L, "Create Spring Boot Application", LocalDate.now(), true));
            taskService.save(new Task(5L, "Create Spring Boot Application", LocalDate.now(), true));
            taskService.save(new Task(6L, "Create Spring Boot Application", LocalDate.now(), true));
            taskService.save(new Task(7L, "Create Spring Boot Application", LocalDate.now(), true));
            taskService.save(new Task(8L, "Create Spring Boot Application", LocalDate.now(), true));
            taskService.save(new Task(9L, "Create Spring Boot Application", LocalDate.now(), true));

        };
    }

}



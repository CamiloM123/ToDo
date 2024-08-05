import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body('title') title: string, @Body('description') description: string, @Body('status') status: number): Promise<Task> {
    return this.tasksService.createTask(title, description, status);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body('status') status: number): Promise<Task> {
    return this.tasksService.updateTask(id, status);
  }

  @Delete(':id')
    deleteTask(@Param('id') id: string): Promise<void> { // Convert id to a number
      return this.tasksService.deleteTask(id);
    }
}
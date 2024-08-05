import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) { }

    getAllTasks(): Promise<Task[]> {
        return this.tasksRepository.find();
    }

    getTaskById(id: string): Promise<Task | null> {
        return this.tasksRepository.findOneBy({ id });
    }

    async createTask(title: string, description: string, status: number): Promise<Task> {
        const task = this.tasksRepository.create({ title, description, status });
        return this.tasksRepository.save(task);
    }

    async updateTask(id: string, status: number): Promise<Task> {
        const task = await this.getTaskById(id);
        task.status = status;
        return this.tasksRepository.save(task);
    }

    async deleteTask(id: string): Promise<void> {
        await this.tasksRepository.delete(id);
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksRepository = void 0;
const client_1 = require("@prisma/client");
class TasksRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create({ description, title, userId }) {
        const task = await this.prisma.task.create({ data: {
                title,
                description,
                accountId: userId
            } });
    }
    async findById(id) {
        const task = await this.prisma.task.findUniqueOrThrow({ where: {
                id
            } });
        return task;
    }
    async findAll(userId) {
        const tasks = await this.prisma.task.findMany({
            where: {
                accountId: userId
            }
        });
        return tasks;
    }
    async update({ taskId, title, description }) {
        const task = await this.prisma.task.update({ where: {
                id: taskId
            },
            data: {
                title,
                description
            } });
        return task;
    }
    async updateStatus(id, status) {
        const task = await this.prisma.task.update({ where: {
                id
            },
            data: {
                status: status
            } });
        return task;
    }
    async remove(id) {
        const deleteTask = await this.prisma.task.delete({
            where: { id }
        });
        return deleteTask;
    }
}
exports.TasksRepository = TasksRepository;

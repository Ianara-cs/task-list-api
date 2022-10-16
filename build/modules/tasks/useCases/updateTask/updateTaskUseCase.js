"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../../../../errors/AppError");
let UpdateTaskUseCase = class UpdateTaskUseCase {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async execute(userId, { title, description, taskId }) {
        const task = await this.tasksRepository.findById(taskId);
        if (!task) {
            throw new AppError_1.AppError("Tarefa não encontrada");
        }
        if (task.accountId != userId) {
            throw new AppError_1.AppError('Ação impossível');
        }
        if (!title) {
            title = task.title;
        }
        if (!description) {
            description = task.description;
        }
        const updatedTask = await this.tasksRepository.update({ title, description, taskId });
        return updatedTask;
    }
};
UpdateTaskUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("TasksRepository")),
    __metadata("design:paramtypes", [Object])
], UpdateTaskUseCase);
exports.UpdateTaskUseCase = UpdateTaskUseCase;

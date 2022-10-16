"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const client_1 = require("@prisma/client");
class UsersRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(data) {
        const user = await this.prisma.account.create({ data });
    }
    async findByEmail(email) {
        const user = await this.prisma.account.findUnique({ where: { email } });
        return user;
    }
    async findById(id) {
        const user = await this.prisma.account.findUniqueOrThrow({ where: { id } });
        return user;
    }
}
exports.UsersRepository = UsersRepository;

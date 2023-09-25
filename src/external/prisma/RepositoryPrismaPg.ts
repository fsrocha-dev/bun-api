import { PrismaClient } from "@prisma/client";
import User from "../../core/user/models/User";
import RepositoryUser from "../../core/user/service/RepositoryUser";

export default class RepositoryPrismaPg implements RepositoryUser {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	findById(id: string): Promise<User | null> {
		return this.prisma.user.findUnique({ where: { id } });
	}

	findByEmail(email: string): Promise<User | null> {
		return this.prisma.user.findUnique({ where: { email } });
	}

	async create(user: User): Promise<User> {
		return this.prisma.user.create({ data: user });
	}
}

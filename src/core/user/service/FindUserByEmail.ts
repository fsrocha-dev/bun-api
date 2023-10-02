import UseCase from "../../shared/UseCase";
import User from "../models/User";
import RepositoryUser from "./RepositoryUser";

export default class FindUFindUserByEmail implements UseCase<string, User | null> {
	constructor(readonly repository: RepositoryUser) {}

	execute(email: string): Promise<User | null> {
		return this.repository.findByEmail(email);
	}
}

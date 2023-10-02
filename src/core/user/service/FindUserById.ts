import UseCase from "../../shared/UseCase";
import User from "../models/User";
import RepositoryUser from "./RepositoryUser";

export default class FindUserById implements UseCase<string, User | null> {
	constructor(readonly repository: RepositoryUser) {}

	execute(id: string): Promise<User | null> {
		return this.repository.findById(id);
	}
}

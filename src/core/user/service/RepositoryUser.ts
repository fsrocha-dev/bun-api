import User from "../models/User";

export default interface RepositoryUser {
	create(user: User): Promise<User>;
	findById(id: string): Promise<User | null>;
	findByEmail(email: string): Promise<User | null>;
}

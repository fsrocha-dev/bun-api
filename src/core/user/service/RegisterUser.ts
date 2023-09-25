import UseCase from "../../shared/UseCase";
import HashPassword from "../utils/HashPassword";
import UuidGenerator from "../utils/UuidGenerator";
import RepositoryUser from "./RepositoryUser";

type RegisterUserRequest = {
		name: string;
		email: string;
		password: string;
		confirmPassword: string;
}

export default class RegisterUser implements UseCase<RegisterUserRequest, void> {
	constructor(private readonly repository: RepositoryUser) {}

	async execute(input: RegisterUserRequest): Promise<void> {
		const { name, email, password, confirmPassword } = input;

		if (password !== confirmPassword) {
			throw new Error("Password and confirm password must be the same");
		}

		const checkUserExists = await this.repository.findByEmail(email);

		if (checkUserExists) {
			throw new Error("User already exists");
		}

		const id = new UuidGenerator().generate();
		const passwordHash = await new HashPassword().generate(password);

		await this.repository.create({ id, name, email, password: passwordHash });
	}
}

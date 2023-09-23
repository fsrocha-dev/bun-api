import UseCase from "../../shared/UseCase";
import RepositoryUser from "./RepositoryUser";

type RegisterUserRequest = {
		name: string;
		email: string;
		password: string;
		confirmPassword: string;
}

export default class RegisterUser implements UseCase<RegisterUserRequest, void> {

	constructor(private readonly repository: RepositoryUser) {}

	execute(input: RegisterUserRequest): Promise<void> {
		const { name, email, password, confirmPassword } = input;
	}
}

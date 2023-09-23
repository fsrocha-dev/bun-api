import UseCase from "../../shared/UseCase";

type RegisterUserRequest = {
		name: string;
		email: string;
		password: string;
		confirmPassword: string;
}

export default class RegisterUser implements UseCase<RegisterUserRequest, void> {
	execute(input: RegisterUserRequest): Promise<void> {
		const { name, email, password, confirmPassword } = input;
	}
}

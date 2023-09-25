import Elysia from "elysia";
import RegisterUser from "../../core/user/service/RegisterUser";

export default class RegisterUserController {
	constructor(readonly server: Elysia, readonly usecase: RegisterUser) {
		server.post("/users", async ({ body }) => {
			const { name, email, password, confirmPassword } = body as any;

			await usecase.execute({ name, email, password, confirmPassword });
		});
	}
}

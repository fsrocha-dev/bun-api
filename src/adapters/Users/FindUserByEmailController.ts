import Elysia from "elysia";
import FindUserByEmail from "../../core/user/service/FindUserByEmail";

export default class FindUserByEmailController {
	constructor(readonly server: Elysia, readonly usecase: FindUserByEmail) {
		server.get("/users/:email", async ({ params: { email } }) => {
			return usecase.execute(email);
		});
	}
}

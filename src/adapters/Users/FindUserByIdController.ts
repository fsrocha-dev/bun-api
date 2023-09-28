import Elysia from "elysia";
import FindUserById from "../../core/user/service/FindUserById";

export default class FindUserByIdController {
	constructor(readonly server: Elysia, readonly usecase: FindUserById) {
		server.get("/users/:id", async ({ params: { id } }) => {
			return usecase.execute(id);
		});
	}
}

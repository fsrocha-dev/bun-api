import { Elysia } from "elysia";
import RepositoryPrismaPg from "./external/prisma/RepositoryPrismaPg";
import RegisterUser from "./core/user/service/RegisterUser";
import RegisterUserController from "./adapters/Users/RegisterUserController";

const app = new Elysia()

// ----- Routes
const repositoryPrismaPg = new RepositoryPrismaPg();
const registerUser = new RegisterUser(repositoryPrismaPg);
new RegisterUserController(app, registerUser);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

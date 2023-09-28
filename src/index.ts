import app from './external/api/config';
import RepositoryPrismaPg from "./external/prisma/RepositoryPrismaPg";
import RegisterUser from "./core/user/service/RegisterUser";
import RegisterUserController from "./adapters/Users/RegisterUserController";
import FindUserById from "./core/user/service/FindUserById";
import FindUserByIdController from "./adapters/Users/FindUserByIdController";



// ----- Routes
const repositoryPrismaPg = new RepositoryPrismaPg();

const registerUser = new RegisterUser(repositoryPrismaPg);
new RegisterUserController(app, registerUser);

const findUserById = new FindUserById(repositoryPrismaPg);
new FindUserByIdController(app, findUserById);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

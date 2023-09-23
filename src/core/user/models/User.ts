import UuidGenerator from "../utils/UuidGenerator";

export default class User {
	id?: string;
	name: string;
	email: string;
	password: string;
	created_at?: Date;
	updated_at?: Date;

	constructor(name: string, email: string, password: string) {
    this.id = new UuidGenerator().generate();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

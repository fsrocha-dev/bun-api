export default class HashPassword {
	async generate(password: string): Promise<string> {
		try {
			return await Bun.password.hash(password);
		} catch (error: any) {
			throw new Error(error);
		}
	}
}

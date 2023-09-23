import { v4 as uuidv4 } from 'uuid';

export default class UuidGenerator {
		generate() {
				return uuidv4();
		}
}

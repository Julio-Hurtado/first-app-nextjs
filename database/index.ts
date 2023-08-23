import USer from '@/Models/user';
import { Client, QueryResult } from 'pg';

export default class PostgreSqlClient {
	private client: Client;
	constructor() {
		this.client = new Client();
	}

	public async getRows(query: string) {
		try {
			await this.client.connect();
			const data: QueryResult<USer> = await this.client.query(query);
			await this.client.end();
			return data.rows;
		} catch (error) {
			console.log(error);
			await this.client.end();
		}
	}
}

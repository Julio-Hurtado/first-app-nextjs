// import { connection } from '@/database';
import PostgreSqlClient from '@/database';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const query = 'select * from public.usuarios';
	const db = new PostgreSqlClient();
	const data = await db.getRows(query);
	return NextResponse.json({ data: data });
}

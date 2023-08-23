import PostgreSqlClient from '@/database';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const db = new PostgreSqlClient();
	const data = await db.getRows('select * from public.usuarios');
	return NextResponse.json({ data: data });
}

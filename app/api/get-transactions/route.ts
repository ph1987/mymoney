import { Register } from '@/interfaces/register';
import { db } from '@vercel/postgres';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

interface Data {
  month: string;
  year: string;
  events: { id: number; name: string; date: string }[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const month = searchParams.get('month');
  const year = searchParams.get('year');

	const session = await getServerSession();

  if (!month || !year || !session?.user?.email) {
    return [];
  }

	const dt = await db<Register>`SELECT * FROM transactions
	WHERE EXTRACT(MONTH FROM transaction_date) = ${Number(month) + 1}
  AND EXTRACT(YEAR FROM transaction_date) = ${year}
	AND username = ${session.user.email}
	ORDER BY id ASC`;

  return NextResponse.json(dt.rows);
}
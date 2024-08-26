import { NextResponse } from 'next/server';

import { db } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';

const client = await db.connect();

export async function POST(request: Request) {

  const { description, category, amount, transaction_type, transaction_date } = await request.json();

  if (!description || !amount || !transaction_type || !transaction_date) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

	const session = await getServerSession();

	if (!session?.user?.email) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}

  const newTransaction = {
    created_at: new Date(),
    created_by: session.user.email,
    updated_at: null,
    updated_by: null,
    description,
    category: category || null,
    amount,
    transaction_type,
    transaction_date: transaction_date,
    username: session.user.email,
  };

	try {
		await client.query(`
			INSERT INTO transactions (
				created_at, created_by, updated_at, updated_by, description, category, amount, transaction_type, transaction_date, username
			) VALUES (
				$1, $2, $3, $4, $5, $6, $7, $8, $9, $10
			);
		`, [
			newTransaction.created_at,
			newTransaction.created_by,
			newTransaction.updated_at,
			newTransaction.updated_by,
			newTransaction.description,
			newTransaction.category,
			newTransaction.amount,
			newTransaction.transaction_type,
			newTransaction.transaction_date,
			newTransaction.username
		]);
		revalidatePath("/dashboard");
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create transaction.');
  }

  return NextResponse.json(newTransaction, { status: 201 });
}
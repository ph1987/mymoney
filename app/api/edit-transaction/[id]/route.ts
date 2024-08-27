import { NextResponse } from 'next/server';

import { db } from '@vercel/postgres';
import { getServerSession } from 'next-auth';

const client = await db.connect();

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const { description, category, amount, transaction_type, updated_at } = await request.json();

  if (!id || !description || !amount || !transaction_type || !updated_at) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

	const session = await getServerSession();

	if (!session?.user?.email) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}

  const updatedTransaction = {
    id,
    description,
    category: category || null,
    amount,
    transaction_type,
    updated_by: session.user.email,
    updated_at,
  };

	const query = `
		UPDATE transactions
		SET description = $1, category = $2, amount = $3, transaction_type = $4, updated_by = $5, updated_at = $6
		WHERE id = $7
		RETURNING *
	`;

	const values = [
		updatedTransaction.description,
		updatedTransaction.category,
		updatedTransaction.amount,
		updatedTransaction.transaction_type,
		updatedTransaction.updated_by,
		updatedTransaction.updated_at,
		updatedTransaction.id
	];

	try {
		const result = await client.query(query, values);
		const updatedRows = result.rowCount;
		if (updatedRows === 0) {
			return NextResponse.json({ error: 'Transaction not found' }, { status: 404 });
		}
		return NextResponse.json({ message: 'Transaction updated successfully' });
	} catch (error) {
		return NextResponse.json({ error: 'Failed to update transaction' }, { status: 500 });
	}
}
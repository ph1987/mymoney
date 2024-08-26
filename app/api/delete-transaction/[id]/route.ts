import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const client = await db.connect();

export async function DELETE(request: Request, { params }: { params: { id: string } }) {

	const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Transaction ID is required' }, { status: 400 });
  }

	try {
  	await client.query('DELETE FROM transactions WHERE id = $1', [id]);
	} catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete transaction.');
  }

  return NextResponse.json({ message: `Transaction with id ${id} deleted successfully` }, { status: 200 });
}
import { TypeProps } from "./types";

export interface Register {
	id: number,
	created_at: Date,
	created_by: string,
	updated_at?: Date,
	updated_by: string,
  description: string,
  category: string,
  amount: number,
  transaction_date: Date,
	transaction_type: TypeProps,
	username: string
}


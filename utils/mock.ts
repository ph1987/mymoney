import { Register } from "@/interfaces/register";
import { TypeProps } from "@/interfaces/types";

function createData(
	id: number,
  description: string,
  value: number,
  category: string,
  date: Date,
	type: TypeProps
) {
  return { id, description, value, category, date, type };
}

export const mock = [
  createData(1, "Salário", 15000, "Renda Ativa", new Date('2024-08-05 00:00:00'), 'income'),
  createData(2, "Aluguel", 1500, "Casa", new Date('2024-08-05 00:00:00'), 'expense'),
	createData(3, "Condomínio", 1500, "Casa", new Date('2024-08-05 00:00:00'), 'expense'),
  createData(4, "Compras", 1000, "Mercado", new Date('2024-08-10 00:00:00'), 'expense'),
  createData(5, "Pós XPE", 350, "Educação", new Date('2024-08-11 00:00:00'), 'expense'),
] as any[];
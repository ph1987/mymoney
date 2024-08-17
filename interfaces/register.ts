import { TypeProps } from "./types";

export interface Register {
	id: number,
  description: string,
  value: number,
  category: string,
  date: Date,
	type: TypeProps
}
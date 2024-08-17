export const titleCase = (text: string) : string => {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

export const currentMonth = () : string => {
	const date = new Date();
	const currentMonth = date.getMonth();
	return currentMonth.toString();
}

export const currentYear = () : number => {
	return new Date().getFullYear();
}

export const monthsArray = () : string[] => {
	return [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro"
	]
}

export const yearsArray = () : number[] => {
	const curYear = currentYear();
	const years: number[] = [];
	for (let year = 2022; year <= curYear; year++) {
		years.push(year);
	}
	return years;
}

"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Register } from "@/interfaces/register";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { TypeProps } from "@/interfaces/types";
import Filters from "./Filters";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, CircularProgress, Grid, LinearProgress, Radio, Snackbar, SnackbarCloseReason } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import { currentMonth, currentYear } from "@/utils/utils";
import WarningIcon from '@mui/icons-material/Warning';

interface SummaryAcc {
  incomes: number;
  spents: number;
  total: number;
}

const getColorTextByType = (type: TypeProps) => {
  if (type === "income") {
    return "text-emerald-700";
  }
  return "text-rose-700";
};

export default function Container() {
  const [data, setData] = useState<Register[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<SummaryAcc | null>(null);
	const [searchText, setSearchText] = useState('');
	const [openSnack, setOpenSnack] = useState(false);
	const [snackMessage, setSnackMessage] = useState('');

  const searchParams = useSearchParams();
  const month = searchParams.get("month");
  const year = searchParams.get("year");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/get-transactions?month=${month}&year=${year}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result: Register[] = await response.json();
      setData(result);

      const summary = result.reduce(
        (acc: SummaryAcc, register: Register) => {
          if (register.transaction_type === "income") {
            acc.incomes += register.amount;
            acc.total += register.amount;
          } else if (register.transaction_type === "expense") {
            acc.spents += register.amount;
            acc.total -= register.amount;
          }
          return acc;
        },
        {
          incomes: 0,
          spents: 0,
          total: 0,
        } as SummaryAcc
      );

      setSummary(summary);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (month && year) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);

  const deleteRegister = async (id: number) => {
		setLoading(true);
		const response = await fetch(`/api/delete-transaction/${id}`, {
			method: "DELETE",
		});

		if (!response.ok) {
			setLoading(false);
			throw new Error(`Error: ${response.status}`);
		} else {
			setSnackMessage('Registro deletado.');
			setOpenSnack(true);
		}
		fetchData();
  };

	//Transactions Modal
	const [modalOpen, setModalOpen] = React.useState(false);
  const handleClose = () => setModalOpen(false);
	const [modalTitle, setModalTitle] = React.useState("Adicionar Registro");
	const [editId, setEditId] = React.useState(0);

	const [formData, setFormData] = useState<RegisterForm>({
    category: "",
    amount: "0",
    description: "",
    type: "expense",
  });

	const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

	const createRegister = async() => {
		const monthQuery = searchParams.get('month') || currentMonth();
		const yearQuery = searchParams.get('year') || String(currentYear());

		const response = await fetch("/api/create-transaction", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				description: formData.description,
				category: formData.category,
				amount: Number(formData.amount),
				transaction_type: formData.type,
				transaction_date: new Date(Number(yearQuery), Number(monthQuery), 1),
			}),
		});

		if (response.ok) {
			await response.json();
			setSnackMessage('Registro adicionado.');
			setOpenSnack(true);
			fetchData();
		} else {
			const errorData = await response.json();
			console.error("Error creating transaction:", errorData);
		}

		setFormData({
			category: "",
			amount: "0",
			description: "",
			type: "expense",
		});
	}

	const editRegister = async() => {
		const response = await fetch(`/api/edit-transaction/${editId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				description: formData.description,
				category: formData.category,
				amount: Number(formData.amount),
				transaction_type: formData.type,
				updated_at: new Date(),
			}),
		});

		if (response.ok) {
			fetchData();
			setSnackMessage('Registro alterado.');
			setOpenSnack(true);
		} else {
			const errorData = await response.json();
			console.error('Error updating transaction:', errorData);
		}
		setModalOpen(false);
	}

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
		setLoading(true);
    if (modalTitle === "Adicionar Registro") {
			await createRegister();
    } else {
			await editRegister();
    }

		setLoading(false);
  };

  const handleModalCreate = () => {
		setFormData({
			category: "",
			amount: "0",
			description: "",
			type: "expense",
		});
    setModalTitle("Adicionar Registro");
    setModalOpen(true);
  };

  const handleModalEdit = (row: Register) => {
    setModalTitle("Editar Registro");
    setModalOpen(true);
    setEditId(row.id);
    setFormData({
      category: row.category,
      amount: row.amount.toString(),
      description: row.description,
      type: row.transaction_type,
    });
  };

	const filteredTransactions = data?.filter(transaction =>
    transaction.description.toLowerCase().includes(searchText.toLowerCase())
  );

	const handleCloseSnack = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };

	const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose} />
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnack}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <div className="container mx-auto flex flex-row max-w-5xl items-center justify-between py-4 px-6">
        <div className="flex flex-col">
          <Filters />

					
          {loading && (
            <div className="flex flex-col mt-6">
							<CircularProgress size={36} color="success" className="mt-2" />
            </div>
          )}
          {error && (
            <div className="flex flex-col mt-6">
              <p>Error: {error} | Tente atualizar a página</p>
            </div>
          )}

					{!loading && !error && (
						<div className="flex flex-col mt-6">
							<p>
								<span className="text-slate-200 font-medium">Receitas:</span>
								<span className="text-green-600 ml-2">
									{summary?.incomes
										? new Intl.NumberFormat("pt-BR", {
												style: "currency",
												currency: "BRL",
											}).format(summary?.incomes)
										: "R$ 0,00"}
								</span>
							</p>
							<p>
								<span className="text-slate-200 font-medium">Despesas:</span>
								<span className="text-red-600 ml-2">
									{summary?.spents
										? new Intl.NumberFormat("pt-BR", {
												style: "currency",
												currency: "BRL",
											}).format(summary.spents)
										: "R$ 0,00"}
								</span>
							</p>
							<p>
								<span className="text-slate-200 font-medium">Balanço:</span>
								<span
									className={`ml-2 ${
										summary?.total === 0 ? "text-red-600" : "text-green-600"
									}`}
								>
									{summary?.total
										? new Intl.NumberFormat("pt-BR", {
												style: "currency",
												currency: "BRL",
											}).format(summary.total)
										: "R$ 0,00"}
								</span>
							</p>
							<div className="mt-6">
								<TextField
									id="search-bar"
									className="text"
									color="success"
									value={searchText}
        					onChange={(e) => setSearchText(e.target.value)}
									variant="outlined"
									size="small"
									InputLabelProps={{
										shrink: true,
									}}
									sx={{
										maxWidth: "20ch",
										backgroundColor: "rgb(27, 38, 49)",
										"& .MuiOutlinedInput-root": {
											color: "rgb(226 232 240)",
											"& .MuiOutlinedInput-notchedOutline": {
												borderColor: "rgba(228, 219, 233, 0.25)",
											},
											"&.Mui-focused": {
												"& .MuiOutlinedInput-notchedOutline": {
													borderColor: "green",
												},
											},
											"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
											{
												borderColor: "green",
											},
											"&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
											{
												borderColor: "green",
											},
										},
										"& .MuiInputLabel-outlined": {
											color: "rgb(226 232 240)",
											fontWeight: "bold",
											"&.Mui-focused": {
												color: "green",
											},
										},
									}}
								/>
								<IconButton aria-label="search" title="Buscar por descrição">
									<SearchIcon style={{ fill: "green" }} />
								</IconButton>
							</div>
						</div>
					)}
        </div>

				<div>
					<button
						onClick={handleModalCreate}
						className="px-3 py-3 bg-green-600 text-white rounded hover:bg-green-400 mt-40"
					>
						Adicionar Registro
					</button>
					{modalOpen && (
						<div
							className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70"
							onClick={handleClose}
						>
							<div
								className="bg-white rounded-lg p-6 min-w-96"
								onClick={(e) => e.stopPropagation()}
							>
								<div className="flex justify-between">
									<h2
										id="modal-modal-title"
										className="text-2xl flex items-center justify-center font-bold mb-6 text-gray-700 mt-2 ml-4"
									>
										{modalTitle}
									</h2>
									<Box>
										<IconButton onClick={handleClose} title="Fechar">
											<CloseIcon />
										</IconButton>
									</Box>
								</div>
								<div id="modal-modal-description" className="mt-2 text-gray-700">
									<form
										onSubmit={handleSubmit}
										className="flex flex-col items-left"
									>
										<TextField
											id="description"
											label="Descrição"
											sx={{ m: 1 }}
											InputLabelProps={{
												shrink: true,
											}}
											name="description"
											value={formData.description}
											onChange={handleChangeForm}
										/>
										<TextField
											id="amount"
											label="Valor"
											sx={{ m: 1 }}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">R$</InputAdornment>
												),
											}}
											name="amount"
											value={formData.amount}
											onChange={handleChangeForm}
										/>
										<TextField
											id="category"
											label="Categoria"
											sx={{ m: 1 }}
											InputLabelProps={{
												shrink: true,
											}}
											name="category"
											value={formData.category}
											onChange={handleChangeForm}
										/>

										<FormControl>
											<RadioGroup
												aria-labelledby="demo-radio-buttons-group-label"
												name="type"
												value={formData.type}
												onChange={handleChangeForm}
												className="px-4"
											>
												<FormControlLabel
													value="expense"
													control={
														<Radio
															color="error"
															checked={formData.type === "expense"}
															onChange={handleChangeForm}
														/>
													}
													label="Saída"
												/>
												<FormControlLabel
													value="income"
													control={
														<Radio
															color="success"
															checked={formData.type === "income"}
															onChange={handleChangeForm}
														/>
													}
													label="Entrada"
												/>
											</RadioGroup>
										</FormControl>
										<button
											type="submit"
											className={`mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-400
											${loading && "cursor-not-allowed opacity-50" }`}
										>
											{loading ? <CircularProgress size={16} color="success" className="mt-2" /> : modalTitle}
										</button>
									</form>
								</div>
							</div>
						</div>
					)}
				</div>
      </div>

			{!loading && !error && data !== null && data.length === 0 && (
				<div className="container mx-auto flex flex-row max-w-5xl items-center justify-between py-4 px-6">
					<div className="container mx-auto mt-10 bg-green-700 py-4 px-4 flex items-center justify-center">
						<WarningIcon fontSize="small" />
						<span className="ml-2 pt-1">Nenhuma transação no período selecionado</span>
					</div>
				</div>
			)}

      {!loading && !error && (data !== null && data.length > 0) && (
        <div className="container mx-auto flex flex-row-reverse max-w-5xl items-center justify-between py-4 px-6">
          <TableContainer component={Paper} className="max-w-5xl">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className="bg-green-500">
                  <TableCell className="font-semibold text-slate-100">
                    Descrição
                  </TableCell>
                  <TableCell className="font-semibold text-slate-100">
                    Valor
                  </TableCell>
                  <TableCell className="font-semibold text-slate-100">
                    Categoria
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredTransactions?.map((row: Register) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.description}
                    </TableCell>
                    <TableCell
                      className={getColorTextByType(row.transaction_type)}
                    >
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(row.amount)}
                    </TableCell>
                    <TableCell>{row.category}</TableCell>

                    <TableCell>
                      <EditIcon
                        className="cursor-pointer"
                        onClick={() => handleModalEdit(row)}
                        titleAccess="Editar"
                      />
                      &nbsp;&nbsp;
                      <DeleteIcon
                        className="cursor-pointer"
                        onClick={() => deleteRegister(row.id)}
                        titleAccess="Deletar"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
			
			<Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
        message={snackMessage}
        action={action}
      />
    </>
  );
}

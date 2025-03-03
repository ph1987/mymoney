"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import type { Register } from "@/interfaces/register";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import type { TypeProps } from "@/interfaces/types";
import Filters from "./Filters";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, CircularProgress, Grid, LinearProgress, Radio, Snackbar } from "@mui/material";
import type { SnackbarCloseReason } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import { currentMonth, currentYear } from "@/utils/utils";
import WarningIcon from '@mui/icons-material/Warning';
import { Translation } from "@/i18n";

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

export default function Container({ translation }: { translation: Translation }) {
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
    } catch (error: unknown) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError(translation.UNKONWN_ERROR);
			}
    } finally {
      setLoading(false);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
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
		}
		setSnackMessage(translation.REGISTER_DELETED);
		setOpenSnack(true);
		fetchData();
  };

	//Transactions Modal
	const [modalOpen, setModalOpen] = React.useState(false);
  const handleClose = () => setModalOpen(false);
	const [modalTitle, setModalTitle] = React.useState(translation.ADD_REGISTER);
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
			setSnackMessage(translation.REGISTER_CREATED);
			setOpenSnack(true);
			fetchData();
		} else {
			const errorData = await response.json();
			console.error(translation.ERROR_CREATING_TRANSACTION, errorData);
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
			setSnackMessage(translation.REGISTER_UPDATED);
			setOpenSnack(true);
		} else {
			const errorData = await response.json();
			console.error(translation.ERROR_UPDATING_TRANSACTION, errorData);
		}
		setModalOpen(false);
	}

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
		setLoading(true);
    if (modalTitle === translation.ADD_REGISTER) {
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
    setModalTitle(translation.ADD_REGISTER);
    setModalOpen(true);
  };

  const handleModalEdit = (row: Register) => {
    setModalTitle(translation.EDIT_REGISTER);
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
          <Filters translation={translation} />

					
          {loading && (
            <div className="flex flex-col mt-6">
							<CircularProgress size={36} color="success" className="mt-2" />
            </div>
          )}
          {error && (
            <div className="flex flex-col mt-6">
              <p>Error: {error} | {translation.TRY_REFRESHING_PAGE}</p>
            </div>
          )}

					{!loading && !error && (
						<div className="flex flex-col mt-6">
							<p>
								<span className="text-slate-200 font-medium">{translation.REVENUES}:</span>
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
								<span className="text-slate-200 font-medium">{translation.EXPENSES}:</span>
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
								<span className="text-slate-200 font-medium">{translation.BALANCE}:</span>
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
								<IconButton aria-label="search" title={translation.SEARCH_BY_DESCRIPTION}>
									<SearchIcon style={{ fill: "green" }} />
								</IconButton>
							</div>
						</div>
					)}
        </div>

				<div>
					<button
						type="button"
						onClick={handleModalCreate}
						className="px-3 py-3 bg-green-600 text-white rounded hover:bg-green-400 mt-40"
					>
						{translation.ADD_REGISTER}
					</button>
					{modalOpen && (
						<div
							className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70"
							onClick={handleClose}
							onKeyDown={(e) => {
								if (e.key === 'Escape') handleClose();
							}}
						>
							<div
								className="bg-white rounded-lg p-6 min-w-96"
								onClick={(e) => e.stopPropagation()}
								onKeyUp={(e) => e.stopPropagation()}
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
											label={translation.DESCRIPTION}
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
											label={translation.VALUE}
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
											label={translation.CATEGORY}
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
													label={translation.EXPENSE}
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
													label={translation.REVENUE}
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
						<span className="ml-2 pt-1">{translation.NO_TRANSACTIONS_FOUND}</span>
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
										{translation.DESCRIPTION}
                  </TableCell>
                  <TableCell className="font-semibold text-slate-100">
										{translation.VALUE}
                  </TableCell>
                  <TableCell className="font-semibold text-slate-100">
										{translation.CATEGORY}
                  </TableCell>
                  <TableCell>
									</TableCell>
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
                        titleAccess={translation.EDIT}
                      />
                      &nbsp;&nbsp;
                      <DeleteIcon
                        className="cursor-pointer"
                        onClick={() => deleteRegister(row.id)}
                        titleAccess={translation.DELETE}
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

"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  currentMonth,
  currentYear,
  monthsArray,
  yearsArray,
} from "@/utils/utils";
import { mock } from "@/utils/mock";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { TypeProps } from "@/interfaces/types";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IconButton, Radio } from "@mui/material";
import { Register } from "@/interfaces/register";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const getColorTextByType = (type: TypeProps) => {
  if (type === "income") {
    return "text-emerald-700";
  }
  return "text-rose-700";
};

export default function Container() {
	
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleClose = () => setModalOpen(false);
	const [modalTitle, setModalTitle] = React.useState("Adicionar Registro");
	const [editId, setEditId] = React.useState(0);

	const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (modalTitle === "Adicionar Registro") {
      const registerSubmitted = {
        id: Math.floor(10000 + Math.random() * 90000),
        description: formData.description,
        category: formData.category,
        value: Number(formData.value),
        type: formData.type,
        date: new Date(),
      } as Register;

      setRegisters([...registers, registerSubmitted]);

      setFormData({
        category: "",
        value: "0",
        description: "",
        type: "spent",
      });
    } else {
      const registerUpdated = {
        id: editId,
        description: formData.description,
        category: formData.category,
        value: Number(formData.value),
        type: formData.type,
        date: new Date(),
      } as Register;

      const updatedItems = registers.map((item) =>
        item.id === registerUpdated.id ? { ...item, ...registerUpdated } : item
      );

      setRegisters(updatedItems);

      setModalOpen(false);
    }
  };

  const handleModalCreate = () => {
    setModalTitle("Adicionar Registro");
    setModalOpen(true);
  };

  const handleModalEdit = (row: Register) => {
    setModalTitle("Editar Registro");
    setModalOpen(true);
    setEditId(row.id);
    setFormData({
      category: row.category,
      value: row.value.toString(),
      description: row.description,
      type: row.type,
    });
  };

  const [month, setMonth] = React.useState(currentMonth());
  const [year, setYear] = React.useState(currentYear().toString());

  const handleChangeMonth = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
    filterRegisters(Number(event.target.value), Number(year));
  };

  const handleChangeYear = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
    console.log(year);
  };

  const [registers, setRegisters] = React.useState(mock);

  const filterRegisters = (filterMonth: number, filterYear: number) => {
    const filteredRegisters = registers.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        itemDate.getMonth() === filterMonth &&
        itemDate.getFullYear() === filterYear
      );
    });
    setRegisters(filteredRegisters);
  };

  const deleteRegister = (id: number) => {
    const updatedItems = registers.filter((registers) => registers.id !== id);
    setRegisters(updatedItems);
  };

  const summary = registers.reduce(
    (acc, register) => {
      if (register.type === "income") {
        acc.incomes += register.value;
        acc.total += register.value;
      } else if (register.type === "spent") {
        acc.spents += register.value;
        acc.total -= register.value;
      }
      return acc;
    },
    {
      incomes: 0,
      spents: 0,
      total: 0,
    }
  );

  const [formData, setFormData] = useState<RegisterForm>({
    category: "",
    value: "0",
    description: "",
    type: "spent",
  });

	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
		const filteredRegisters = registers.filter(register => 
			register.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			register.category.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setRegisters(filteredRegisters);
  };

  useEffect(() => {
    filterRegisters(Number(currentMonth()), Number(year));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-row max-w-5xl items-center justify-between py-4 px-6">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Box sx={{ minWidth: 130 }} className="mr-3">
              <FormControl fullWidth>
							<InputLabel
                  sx={{
                    color: "green",
                    "&.Mui-focused": {
                      color: "green",
                    },
                  }}
                  id="month"
                >
                  Mês
                </InputLabel>
                <Select
                  sx={{
                    color: "white",
										backgroundColor: "rgb(27, 38, 49)",
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(228, 219, 233, 0.25)",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(228, 219, 233, 0.25)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(228, 219, 233, 0.25)",
                    },
                    ".MuiSvgIcon-root ": {
                      fill: "white !important",
                    },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "green",
                    },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "green",
                    },
                  }}
                  labelId="month"
                  id="month"
                  value={month}
                  label="Mês"
                  onChange={handleChangeMonth}
                >
                  {monthsArray()?.map((row, index) => (
                    <MenuItem key={index} value={index.toString()}>
                      {row}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 80 }}>
              <FormControl fullWidth>
                <InputLabel
                  sx={{
                    color: "green",
                    "&.Mui-focused": {
                      color: "green",
                    },
                  }}
                  id="year"
                >
                  Ano
                </InputLabel>
                <Select
                  sx={{
                    color: "white",
										backgroundColor: "rgb(27, 38, 49)",
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(228, 219, 233, 0.25)",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(228, 219, 233, 0.25)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(228, 219, 233, 0.25)",
                    },
                    ".MuiSvgIcon-root ": {
                      fill: "white !important",
                    },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "green",
                    },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "green",
                    },
                  }}
                  labelId="year"
                  id="year"
                  value={year}
                  label="Ano"
                  onChange={handleChangeYear}
                >
                  {yearsArray()?.map((row) => (
                    <MenuItem key={row} value={row.toString()}>
                      {row}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="flex flex-col mt-6">
            <p>
              <span className="text-slate-200 font-medium">Receitas:</span>
              <span className="text-green-600 ml-2">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(summary.incomes)}
              </span>
            </p>
            <p>
              <span className="text-slate-200 font-medium">Despesas:</span>
              <span className="text-red-600 ml-2">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(summary.spents)}
              </span>
            </p>
            <p>
              <span className="text-slate-200 font-medium">Balanço:</span>
              <span className={`ml-2 ${summary.total > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(summary.total)}
              </span>
            </p>
						<div className="mt-6">
							<TextField
								id="search-bar"
								className="text"
								color="success"
								value={searchTerm}
        				onChange={handleSearchChange}
								variant="outlined"
								size="small"
								InputLabelProps={{
									shrink: true,
								}}
								sx={{
									maxWidth: '20ch',
									backgroundColor: "rgb(27, 38, 49)",
									"& .MuiOutlinedInput-root": {
										color: 'rgb(226 232 240)',
										"& .MuiOutlinedInput-notchedOutline": {
											borderColor: "rgba(228, 219, 233, 0.25)",
										},
										"&.Mui-focused": {
											"& .MuiOutlinedInput-notchedOutline": {
												borderColor: "green",
											},
										},
									},
									"& .MuiInputLabel-outlined": {
										color: 'rgb(226 232 240)',
										fontWeight: "bold",
										"&.Mui-focused": {
											color: "green",
										},
									},
								}}
							/>
							<IconButton aria-label="search" title="Buscar">
								<SearchIcon style={{ fill: "green" }} />
							</IconButton>
						</div>
          </div>
        </div>
        <button
          onClick={handleModalCreate}
          className="px-4 py-4 bg-green-600 text-white rounded hover:bg-green-400 mt-40"
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
									{modalTitle}    {/* Create or Edit according to selected action */}
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
                    id="value"
                    label="Valor"
                    sx={{ m: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">R$</InputAdornment>
                      ),
                    }}
                    name="value"
                    value={formData.value}
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
                        value="spent"
                        control={
                          <Radio
                            color="error"
                            checked={formData.type === "spent"}
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
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-400"
                  >
                    {modalTitle}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto flex flex-row-reverse max-w-5xl items-center justify-between py-4 px-6">
        <TableContainer component={Paper} className="max-w-5xl">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="bg-green-500">
                <TableCell className="font-sans font-semibold text-slate-100">
                  Descrição
                </TableCell>
                <TableCell className="font-sans font-semibold text-slate-100">
                  Valor
                </TableCell>
                <TableCell className="font-sans font-semibold text-slate-100">
                  Categoria
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {registers?.map((row) => (
                <TableRow
                  key={row.description}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.description}
                  </TableCell>
                  <TableCell className={getColorTextByType(row.type)}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(row.value)}
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
    </>
  );
}

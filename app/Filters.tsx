"use client"
import React, { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import {
  currentMonth,
  currentYear,
  monthsArray,
  yearsArray,
} from "@/utils/utils";
import { useRouter, useSearchParams } from 'next/navigation';

export default function Filters() {

	const router = useRouter();
  const searchParams = useSearchParams();

  // Obtém os valores de `month` e `year` dos query parameters
  const monthQuery = searchParams.get('month') || currentMonth();
  const yearQuery = searchParams.get('year') || String(currentYear());

  const [selectedMonth, setSelectedMonth] = useState(monthQuery);
  const [selectedYear, setSelectedYear] = useState(yearQuery);

  useEffect(() => {
    // Atualiza os valores nos query parameters quando o estado muda
    const params = new URLSearchParams();

    if (selectedMonth) params.set('month', selectedMonth);
    if (selectedYear) params.set('year', selectedYear);

    router.push(`?${params.toString()}`);
  }, [router, selectedMonth, selectedYear]);

  return (
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
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
							{
								borderColor: "green",
							},
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
							{
								borderColor: "green",
							},
            }}
            labelId="month"
            id="month"
            label="Mês"
            value={selectedMonth}
        		onChange={(e) => setSelectedMonth(e.target.value)}
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
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "green",
                },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "green",
                },
            }}
            labelId="year"
            id="year"
            label="Ano"
            value={selectedYear}
        		onChange={(e) => setSelectedYear(e.target.value)}
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
  );
}

"use client";
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "next-auth/react";

//TODO: deletar arquivo
export function LogoutBtn() {
  return (
    <button type="button" onClick={() => signOut()}>
			<LogoutIcon /> Logout
		</button>
  );
}
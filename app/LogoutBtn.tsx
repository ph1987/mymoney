"use client";
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "next-auth/react";


export function LogoutBtn() {
  return (
    <button onClick={() => signOut()}>
			<LogoutIcon /> Logout
		</button>
  );
}
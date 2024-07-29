"use client";
import { titleCase } from "@/utils/utils";
import { signIn } from "next-auth/react";
import Image from "next/image";

export interface LoginProps {
  provider: "google" | "facebook";
}

export default function LoginBtn(props: LoginProps) {
	const imgPath = props.provider === "google" ? "/g-icon.webp" : "/fb-icon.webp"
  return (
    <button
      onClick={() => signIn(props.provider, { callbackUrl: "/dashboard" })}
      className="flex gap-2 items-center border border-neutral-300 
			p-4 w-80 rounded-md text-gray-900 bg-white focus:outline-none 
			hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
    >
      <Image src={imgPath} alt="" width={32} height={32} />
      Login com {titleCase(props.provider)}
    </button>
  );
}

"use client";
import { titleCase } from "@/utils/utils";
import { signIn } from "next-auth/react";
import Image from "next/image";

export interface LoginProps {
  provider: "google" | "facebook";
  title: string;
	disable?: boolean;
}

export default function LoginBtn(props: LoginProps) {
  const imgPath =
    props.provider === "google" ? "/g-icon.webp" : "/fb-icon.webp";
  return (
    <button
      type="button"
      onClick={() => signIn(props.provider, { callbackUrl: "/dashboard" })}
			disabled={props.disable}
      className={`
        ${props.disable ? "bg-gray-300" : "bg-white"}
        text-gray-700
        border-gray-900
        px-3
        py-2
        rounded-md
        font-semibold
        inline-flex
        items-center
        gap-2
        border border-transparent
        transition-all duration-300
        hover:text-gray-900
        hover:border-gray-100
      `}
    >
      <Image src={imgPath} alt="" width={24} height={24} />
      {props.title}
    </button>
  );
}

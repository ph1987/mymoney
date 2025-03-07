"use client";

import { Translation } from "@/i18n";
import { ArrowLeft } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function BackButton({ translation }: { translation: Translation }) {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="hover:text-green-600">
      <ArrowLeft /> {translation.BACK}
    </button>
  );
}
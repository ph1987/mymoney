import React from "react";
import Header from "../Header";
import Container from "../Container";
import LanguageSwitcher from "../LanguageSwitcher";
import { cookies } from "next/headers";
import { getTranslation } from "@/i18n";

export default async function Page() {
	const cookieStore = cookies();
	const lang = cookieStore.get('lang')?.value || 'en';
	const translation = getTranslation(lang);
	
  return (
    <>
      <Header />
			<Container translation={translation} />
			<LanguageSwitcher />
    </>
  );
}

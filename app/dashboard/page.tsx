import React from "react";
import Header from "../Header";
import Container from "../Container";
import { cookies } from "next/headers";
import { getTranslation } from "@/i18n";
import Footer from "../Footer";

export default async function Page() {
	const cookieStore = cookies();
	const lang = cookieStore.get('lang')?.value || 'en';
	const translation = getTranslation(lang);
	
  return (
    <div className="min-h-screen flex flex-col">
      <Header translation={translation} />
			<Container translation={translation} lang={lang} />
			<Footer translation={translation} />
    </div>
  );
}

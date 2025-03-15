import Head from "next/head";
import Image from "next/image";
import { cookies } from "next/headers";
import { getTranslation } from "@/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import LoginBtn from "./LoginBtn";

export default function Landing() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const translation = getTranslation(lang);

  return (
    <>
      <Head>
        <title>MyMoney</title>
        <meta
          name="description"
          content="A simple landing page for MyMoney financial management application."
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <header className="bg-gray-800 px-2 py-4">
          <h1 className="text-2xl font-bold ml-10">
            <span className="text-green-500">My</span>
            <span className="text-slate-100">Money</span>
          </h1>
          <LanguageSwitcher />
        </header>

        <main className="flex-1 container mx-auto px-4 py-8">
					<div className="flex justify-center items-center gap-4 mb-6">
            <LoginBtn provider="google" title={translation.LOGIN_WITH_GOOGLE} />
            <LoginBtn
              provider="facebook"
              title={translation.LOGIN_WITH_FACEBOOK}
              disable={true}
            />
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-3 text-green-400">
              {translation.MANAGE_YOUR_FINANCES_SIMPLY}
            </h2>
            <p className="mb-8 text-gray-300 text-sm">
              {translation.MY_MONEY_DESCRIPTION}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mt-4">
            <div className="flex flex-col items-center">
              <Image
                src={translation.PRINT_LIST}
                alt="Screenshot da aplicação MyMoney (1)"
                width={600}
                height={400}
                className="rounded shadow-md"
              />
              <p className="mt-4 text-gray-300 text-sm">
                {translation.MAIN_MANAGEMENT_SCREEN}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={translation.PRINT_ADD}
                alt="Screenshot da aplicação MyMoney (2)"
                width={600}
                height={400}
                className="rounded shadow-md"
              />
              <p className="mt-4 text-gray-300 text-sm">
                {translation.CREATE_RECORD_MODAL}
              </p>
            </div>
          </div>
        </main>

        <footer className="bg-gray-800 py-4 text-gray-400 mt-auto">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center">
            <div className="hidden md:block"></div>
            <p className="text-sm text-center">
              © {new Date().getFullYear()} {translation.MY_MONEY_FOOTER}
            </p>
            <div className="mt-4 md:mt-0 text-center md:text-right mr-10">
              <a
                href="/privacy-policy"
                className="text-sm text-green-500 hover:text-green-600"
              >
                {translation.PRIVACY_POLICY}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

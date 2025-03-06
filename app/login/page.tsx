import Head from "next/head";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import LoginBtn from "../LoginBtn";
import { cookies } from "next/headers";
import { getTranslation } from "@/i18n";

export default function Landing() {

	const cookieStore = cookies();
	const lang = cookieStore.get('lang')?.value || 'en';
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
        <header className="bg-gray-800 px-8 py-4">
          <h1 className="text-2xl font-bold ml-10">
            <span className="text-green-500">My</span>
            <span className="text-slate-100">Money</span>
          </h1>
          <LanguageSwitcher />
        </header>

        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-3 text-green-400">
              Gerencie suas finanças de forma simples
            </h2>
            <p className="mb-8 text-gray-300 text-sm">
              MyMoney é uma aplicação de gestão financeira pessoal que ajuda
              você a organizar receitas, despesas e manter o controle do seu
              saldo.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mt-4">
            <div className="flex flex-col items-center">
              <Image
                src="/myapp1.png"
                alt="Screenshot da aplicação MyMoney (1)"
                width={600}
                height={400}
                className="rounded shadow-md"
              />
              <p className="mt-4 text-gray-300 text-sm">
                Tela principal de gerenciamento
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/myapp2.png"
                alt="Screenshot da aplicação MyMoney (2)"
                width={600}
                height={400}
                className="rounded shadow-md"
              />
              <p className="mt-4 text-gray-300 text-sm">
                Modal de criação de registro
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-10">
            <LoginBtn provider="google" title={translation.LOGIN_WITH_GOOGLE} />
            <LoginBtn
              provider="facebook"
              title={translation.LOGIN_WITH_FACEBOOK}
              disable={true}
            />
          </div>
        </main>

        <footer className="bg-gray-800 py-4 text-gray-400 mt-auto">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center">
            <div className="hidden md:block"></div>
            <p className="text-sm text-center">
              © {new Date().getFullYear()} MyMoney. Todos os direitos
              reservados.
            </p>
            <div className="mt-4 md:mt-0 text-center md:text-right">
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
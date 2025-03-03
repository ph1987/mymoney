import Image from "next/image";
import LoginBtn from "./LoginBtn";
import { cookies } from "next/headers";
import { getTranslation } from "@/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Home() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const translation = getTranslation(lang);

  return (
    <main className="flex flex-col gap-8 justify-center items-center h-screen">
      <LanguageSwitcher />
      <Image
        src="/mymoneylogo.png"
        alt=""
        width={400}
        height={300}
        style={{ width: "auto", height: "auto" }}
        priority
      />
      <LoginBtn provider="google" title={translation.LOGIN_WITH_GOOGLE} />
      <LoginBtn provider="facebook" title={translation.LOGIN_WITH_FACEBOOK} />
      <a href="privacy-policy">{translation.PRIVACY_POLICY}</a>
    </main>
  );
}

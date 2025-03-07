import { Translation } from "@/i18n";

export default function Footer({ translation }: { translation: Translation }) {
  return (
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
  );
}

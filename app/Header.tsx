import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";
import { Translation } from "@/i18n";

export default async function Header({
  translation,
}: {
  translation: Translation;
}) {
  const session = await getServerSession();
  if (!session) {
    return redirect("/");
  }

  const userImage = session.user?.image || "";

  return (
    <div className="flex flex-col bg-gray-900 text-white">
      <header className="bg-gray-800 px-2 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold ml-10">
          <span className="text-green-500">My</span>
          <span className="text-slate-100">Money</span>
        </h1>

        <HamburgerMenu
          userImage={userImage}
          userName={session.user?.name || ""}
          translation={translation}
        />
      </header>
    </div>
  );
}

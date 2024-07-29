import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { LogoutBtn } from "../LogoutBtn";
import Image from "next/image";

export default async function Page() {
  const session = await getServerSession();
  if (!session) {
    return redirect("/");
  }

  const userImage = session.user?.image || "";

  return (
    <>
      <div className="h-20 dark:text-slate-200 bg-slate-1000 mb-8">
        <header className="container mx-auto flex w-full items-center justify-between py-4 px-6">
          <a href="#">
            <div className="w-full text-center text-3xl font-bold sm:w-fit sm:text-left ">
              <span className="text-rose-500">My</span>
              <span className="text-slate-100">Money</span>
            </div>
          </a>
          <nav>
            <ul className="flex items-center space-x-2">
              <li className="group relative">
                <div className="block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-300 no-underline transition">
                  <div className="text-slate-300 flex flex-row justify-center items-center gap-2">
                    {userImage && (
                      <Image
                        src={userImage}
                        width={30}
                        height={30}
                        alt="User Image"
                        layout="fixed"
                        className="rounded-full"
                      />
                    )}
                    {session.user?.name}
                  </div>
                </div>
              </li>
              <li
                className="group relative block whitespace-nowrap px-3 py-2 text-sm font-semibold 
							text-slate-300 no-underline transition hover:text-slate-100"
              >
                <LogoutBtn />
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/undraw_projections_re_ulc6.svg"
          width={642}
          height={626}
          alt="Woman making projections"
        />
        <p className="py-2">Em breve, na sprint 2</p>
      </div>
    </>
  );
}

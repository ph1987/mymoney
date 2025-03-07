"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "next-auth/react";
import { Translation } from "@/i18n";

interface HamburgerMenuProps {
  userImage: string;
  userName: string;
	translation: Translation;
}

export default function HamburgerMenu({
  userImage,
  userName,
	translation
}: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

	const router = useRouter();
	const [activeLang, setActiveLang] = useState('en');
	
	useEffect(() => {
		const langCookie = document.cookie
			.split('; ')
			.find(row => row.startsWith('lang='));
		if (langCookie) {
			setActiveLang(langCookie.split('=')[1]);
		}
	}, []);

	const changeLanguage = (lang: string) => {
		document.cookie = `lang=${lang}; path=/`;
		setActiveLang(lang);
		router.refresh();
	};

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDeleteRecords = () => {
    console.log("Apagar todos os registros");
  };

	//TODO: Add function to setOpen = false when click outside the menu

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center gap-2 px-3 py-1 
                   bg-white text-sm font-medium text-gray-700 
                   hover:bg-gray-50 focus:outline-none border border-gray-300 
                   rounded-md"
      >
        <div className="flex items-center gap-2">
          {userImage && (
            <Image
              src={userImage}
              width={30}
              height={30}
              alt="User Image"
              className="rounded-full"
							//TODO: add image default if user doesnt have photo
            />
          )}
          <span className="text-slate-700">{userName}</span>
        </div>
        <span className="text-xl text-gray-700 pl-2">☰</span>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 
					rounded-md shadow-lg bg-white ring-1 ring-black 
					ring-opacity-5 z-50"
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => changeLanguage('en')}
							disabled={activeLang === 'en'}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
              role="menuitem"
            >
              <Image src="/us.svg" alt="English" width={20} height={20} />{translation.ENGLISH}
            </button>
            <button
              onClick={() => changeLanguage('pt')}
							disabled={activeLang === 'pt'}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
              role="menuitem"
            >
              <Image src="/br.svg" alt="English" width={20} height={20} />{translation.PORTUGUESE}
            </button>
            <button
              onClick={() => changeLanguage('es')}
							disabled={activeLang === 'es'}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
              role="menuitem"
            >
              <Image src="/es.svg" alt="English" width={20} height={20} />{translation.SPANISH}
            </button>

            <div className="border-t border-gray-200 my-1"></div>

            {/* 
            <button
              onClick={handleDeleteRecords}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Apagar todos os registros
            </button>
            */}

            <button
              onClick={() => signOut()}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <LogoutIcon /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

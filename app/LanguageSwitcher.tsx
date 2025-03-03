// components/LanguageSwitcher.tsx
'use client';
import { useRouter } from 'next/navigation';
import styles from './css/LanguageSwitcher.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const [activeLang, setActiveLang] = useState('en');

  useEffect(() => {
    // Lê o cookie e atualiza o estado com o idioma ativo
    const langCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('lang='));
    if (langCookie) {
      setActiveLang(langCookie.split('=')[1]);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    document.cookie = `lang=${lang}; path=/`;
    setActiveLang(lang); // Atualiza o estado para refletir a alteração
    router.refresh();
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={`${styles.flagButton} ${activeLang === 'en' ? styles.active : ''}`}
        onClick={() => changeLanguage('en')}
      >
        <Image src="/us.svg" alt="English" width={32} height={32} />
      </button>
      <button
        className={`${styles.flagButton} ${activeLang === 'pt' ? styles.active : ''}`}
        onClick={() => changeLanguage('pt')}
      >
        <Image src="/br.svg" alt="Português" width={32} height={32} />
      </button>
			<button
        className={`${styles.flagButton} ${activeLang === 'es' ? styles.active : ''}`}
        onClick={() => changeLanguage('es')}
      >
        <Image src="/es.svg" alt="Español" width={32} height={32} />
      </button>
    </div>
  );
}
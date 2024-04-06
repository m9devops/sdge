import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Counter from "./components/counter";
import LocaleSwitcher from "./components/locale-switcher";
import styles from './app.css';

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const interstate = localFont({ 
	src: [
		{
			path:  '../../public/fonts/interstate/interstate-black-comp-58b64117a2ad9.woff',
			weight: '300',
		},
		{
			path:  '../../public/fonts/interstate/interstate-regular-comp-58b641cc0aca1.woff',
			weight: '400',
		},
		{
			path:  '../../public/fonts/interstate/interstate-bold-cond-58b64162258ca.woff',
			weight: '700',
		},
		{
			path:  '../../public/fonts/interstate/interstate-black-cond-58b642507872b.woff',
			weight: '800',
		}
	],
	subsets: ['latin'],
	display: 'swap',
})


export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={interstate.className}>
        <header className={styles.site_header}>
          <LocaleSwitcher />
          <p>Current locale: {params.lang}</p>
        </header>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}

export const metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
};

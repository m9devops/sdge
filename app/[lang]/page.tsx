import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Image from 'next/image'
import styles from './app.css';

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <section id="hero" className={styles.interstate}>
      <div className="container mx-auto">
        <div className="hero-left">
          <h1>{dictionary.banner.banner_title}</h1>
        </div>
        <div class="hero-right">
          <Image
            src="/"
            width="500"
            height="500"
            alt="test"
            />
        </div>
      </div>
    </section>
  );
}

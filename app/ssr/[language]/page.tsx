import { createT } from "@magic-translate/react-ssr";
import { translate } from "@/app/lib/translate";
import { AvailableLanguages, languages } from "@/app/lib/constants";
import Link from "next/link";
import { GetStarted } from "@/app/components/get-started";
import { Logo } from "@/app/components/logo";
import { Language } from "@magic-translate/react";

const T = createT(translate);

export default async ({
  params,
}: {
  params: Promise<{ language: AvailableLanguages }>;
}) => {
  const { language } = await params;
  return (
    <>
      <GetStarted>
        <T lang={language}>Get started with</T>&nbsp;
        <code className="font-mono font-bold">
          npm i @magic-translate/react-ssr
        </code>
      </GetStarted>

      <div className="flex justify-center">
        <ul className="text-sm font-medium text-gray-900 border border-gray-200 rounded-lg sm:flex dark:border-gray-600 dark:text-white overflow-hidden">
          {Object.entries(languages).map(([lang, languageName]) => (
            <li
              key={lang}
              className={`flex-initial border-b bg-white border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-700 ${
                lang == language ? "font-bold" : ""
              }`}
            >
              <Link href={`/ssr/${lang}`} className="block p-3">
                <T lang={lang as Language}>{languageName}</T>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Logo />

      <p className="text-center">
        <T lang={language}>
          Magic Translate fully embraces server side rendering. In fact, it's
          the preferred way to use Magic Translate in your application.
        </T>
      </p>
      <p className="text-center">
        <T lang={language}>
          This content is entirely translated on the server. The HTML loaded
          from the server is is already translated.
        </T>
      </p>
      <p className="text-center">
        <T lang={language}>
          When you inspect the HTTP traffic of this website, you can see that no
          request is made to Magic Translate's API.
        </T>
      </p>

      <p className="text-center">
        <Link href="/">
          ← <T lang={language}>Go back</T>
        </Link>
      </p>
    </>
  );
};

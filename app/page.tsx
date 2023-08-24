"use client";
import Image from "next/image";
import { Language, T } from "@magic-translate/react";
import { ConfiguredMagicTranslateProvider } from "@/app/components/configured-magic-translate-provider";
import { useState } from "react";
import Link from "next/link";
import { languages } from "@/app/lib/constants";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { GetStarted } from "@/app/components/get-started";
import { Logo } from "@/app/components/logo";

export default function Home() {
  const [language, setLanguage] = useState<keyof typeof languages>(Language.EN);

  return (
    <ConfiguredMagicTranslateProvider language={language}>
      <GetStarted>
        <T>Get started with</T>&nbsp;
        <code className="font-mono font-bold inline">
          npm i @magic-translate/react
        </code>
      </GetStarted>

      <div>
        <LanguageSwitcher language={language} onSetLanguage={setLanguage} />
      </div>

      <Logo />

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="https://magic-translate.gitbook.io"
          className="flex flex-col items-center lg:items-stretch group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <T>Docs </T>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <T>
              Find out how to get started and read about features and the API
            </T>
          </p>
        </a>

        <a
          href="https://magictranslate.io"
          className="flex flex-col items-center lg:items-stretch group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <T>Sign up </T>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <T>
              Check out the official Magic Translate website to create an
              account
            </T>
          </p>
        </a>

        <a
          href="https://magictranslate.io/pricing"
          className="border flex flex-col items-center lg:items-stretch group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <T>Pricing </T>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <T>Learn about the available packages and their cost</T>
          </p>
        </a>

        <a
          href="https://github.com/magic-translate"
          className="flex flex-col items-center lg:items-stretch group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <T>Examples </T>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <T>Find Magic Translate code examples on GitHub</T>
          </p>
        </a>

        <Link
          href={`/ssr/${language}`}
          className="flex flex-col items-center lg:items-stretch group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <T>SSR Demo</T>{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <T>
              Check out our Magic Translate server-side rendering example here
            </T>
          </p>
        </Link>
      </div>
    </ConfiguredMagicTranslateProvider>
  );
}

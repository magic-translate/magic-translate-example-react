"use client";
import { Language, MagicTranslateProvider, T } from "@magic-translate/react";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { GetStarted } from "@/app/components/get-started";
import { Logo } from "@/app/components/logo";
import { magicTranslateConfig } from "@/app/lib/constants";
import { LandingPageLinks } from "@/app/components/landing-page-links";

export default function Home() {
  return (
    <MagicTranslateProvider {...magicTranslateConfig} language={Language.EN}>
      <GetStarted>
        <T>Get started with</T>&nbsp;
        <code className="font-mono font-bold inline">
          npm i @magic-translate/react
        </code>
      </GetStarted>

      <div>
        <LanguageSwitcher />
      </div>

      <Logo />

      <LandingPageLinks />
    </MagicTranslateProvider>
  );
}

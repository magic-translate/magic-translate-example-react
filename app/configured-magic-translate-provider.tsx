"use client";
import { Language, MagicTranslateProvider } from "@magic-translate/react";
import { FC, PropsWithChildren } from "react";

export const ConfiguredMagicTranslateProvider: FC<
  PropsWithChildren<{ language: Language }>
> = ({ children, language }) => (
  <MagicTranslateProvider
    language={language}
    apiKey={process.env.NEXT_PUBLIC_MAGIC_TRANSLATE_API_KEY!!}
    _apiUrl={process.env.NEXT_PUBLIC_MAGIC_TRANSLATE_API_URL}
  >
    {children as any}
  </MagicTranslateProvider>
);

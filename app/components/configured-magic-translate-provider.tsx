"use client";
import { Language, MagicTranslateProvider } from "@magic-translate/react";
import { FC, PropsWithChildren } from "react";
import { magicTranslateConfig } from "@/app/lib/constants";

export const ConfiguredMagicTranslateProvider: FC<
  PropsWithChildren<{ language: Language }>
> = ({ children, language }) => (
  <MagicTranslateProvider language={language} {...magicTranslateConfig}>
    {children as any}
  </MagicTranslateProvider>
);

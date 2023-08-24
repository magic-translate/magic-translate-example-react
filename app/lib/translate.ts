import { magicTranslateConfig } from "@/app/lib/constants";
import { setupTranslate } from "@magic-translate/react-ssr";

export const translate = setupTranslate(magicTranslateConfig);

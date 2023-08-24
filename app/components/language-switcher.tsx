import { AvailableLanguages, languages } from "@/app/lib/constants";

export const LanguageSwitcher: React.FunctionComponent<{
  onSetLanguage?: (language: AvailableLanguages) => void;
  language: AvailableLanguages;
}> = ({ language, onSetLanguage }) => (
  <div className="flex justify-center">
    <ul className="flex flex-col sm:flex-row items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {Object.entries(languages).map(([lang, languageName]) => (
        <li
          key={lang}
          className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
        >
          <div className="flex items-center px-3">
            {onSetLanguage && (
              <input
                id={lang}
                checked={lang === language}
                onClick={() => onSetLanguage(lang as keyof typeof languages)}
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
            )}
            <label
              htmlFor="horizontal-list-radio-license"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {languageName}
            </label>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

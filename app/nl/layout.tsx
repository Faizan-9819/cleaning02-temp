import type { ReactNode } from "react";
import { LanguageProvider } from "@/app/i18n/LanguageProvider";

export default function NlLayout({ children }: { children: ReactNode }) {
  return <LanguageProvider initialLocale="nl">{children}</LanguageProvider>;
}

import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import CookieConsent from "@/app/components/CookieConsent";
import LenisProvider from "@/app/components/LenisProvider";
import { LanguageProvider } from "@/app/i18n/LanguageProvider";
import FormModalProvider from "@/app/global/FormModalProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Cleaning Co. | Commercial Cleaning Services",
  description:
    "Reliable, flexible and professional cleaning for offices, schools, commercial facilities and holiday parks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-cream">
        <LenisProvider>
          <LanguageProvider initialLocale="en">
            <FormModalProvider>{children}</FormModalProvider>
            <CookieConsent />
          </LanguageProvider>
        </LenisProvider>
      </body>
    </html>
  );
}

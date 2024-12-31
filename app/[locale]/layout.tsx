import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Locale, routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"

import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: '300',
    subsets: ['latin'],
  })


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Adjust to expect a Promise
}) {
  const resolvedParams = await params; // Await the promise to resolve params
  const { locale } = resolvedParams; // Extract the locale from the resolved params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();



  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning className={`text-center pb-4 ${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

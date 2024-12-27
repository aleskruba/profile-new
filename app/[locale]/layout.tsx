import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Locale, routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  const locale = params.locale;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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

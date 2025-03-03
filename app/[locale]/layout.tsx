import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Locale, routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Head from 'next/head';


import { Poppins } from 'next/font/google'
import ServerComponent from './components/Servercomponent';

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


      <Head>
  <title>Aleš Kruba - Full Stack Web Developer</title>
  <meta name="description" content="Portfolio of Aleš Kruba, a full-stack web developer specializing in frontend and backend development using JavaScript, React, Next.js, and Express.js." />
  <meta name="author" content="Aleš Kruba" />
  <meta name="keywords" content="Portfolio, Full Stack Web Development, JavaScript, TypeScript, React js, Next js, Express js, Tailwind CSS, Material UI, Docker, Databases, PHP, Python" />
  

  <meta property="og:title" content="Aleš Kruba - Full Stack Web Developer Portfolio" />
  <meta property="og:description" content="Explore the portfolio of Aleš Kruba, showcasing my skills in frontend and backend web development, including React, Next.js, Express.js, and more. Projects and experiences displayed in a dynamic, user-friendly format." />
  <meta property="og:url" content="https://dokram.com" />
  <meta property="og:image" content="https://dokram.com/man1.png" />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-LFG536RB19"></script>
<script>     {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LFG536RB19');      `}
</script>

</Head>
      <body suppressHydrationWarning className={`text-center pb-4 ${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >{/* <ServerComponent/> */}
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

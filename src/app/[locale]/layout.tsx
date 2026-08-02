import Navbar from "@/components/navbar";
import { TransitionProvider } from "@/transition/provider";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getData } from "@/data/resume";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const data = getData(locale);

  return {
    metadataBase: new URL(data.url),
    title: {
      default: data.name,
      template: `%s | ${data.name}`,
    },
    description: data.description,
    openGraph: {
      title: `${data.name}`,
      description: data.description,
      url: data.url,
      siteName: `${data.name}`,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: `${data.name}`,
      card: "summary_large_image",
    },
    verification: {
      google: "",
      yandex: "",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TransitionProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
              <TooltipProvider delayDuration={0}>
                <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
                  <FlickeringGrid
                    className="h-full w-full"
                    squareSize={2}
                    gridGap={2}
                    style={{
                      maskImage: "linear-gradient(to bottom, black, transparent)",
                      WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                    }}
                  />
                </div>
                <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
                  {children}
                </div>
                <Navbar />
              </TooltipProvider>
            </ThemeProvider>
          </TransitionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

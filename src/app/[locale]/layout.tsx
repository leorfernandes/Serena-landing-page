import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Amatic_SC, Great_Vibes, Quicksand } from 'next/font/google';
import { notFound } from 'next/navigation';
import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import { routing } from '@/libs/I18nRouting';
import '@/styles/global.css';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ['400'] });
const permanentMarker = Amatic_SC({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  icons: [
    {
      rel: 'person-meditating',
      url: '/meditating.jpg',
    },
  ],
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${greatVibes.className} ${quicksand.className} ${permanentMarker.className}`}>
      <body>
        <NextIntlClientProvider>
          <PostHogProvider>
            {props.children}
          </PostHogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

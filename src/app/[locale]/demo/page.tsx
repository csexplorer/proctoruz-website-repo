import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { siteConfig } from '@/lib/site';
import { DemoClient } from './DemoClient';

type Props = {
  params: Promise<{ locale: Locale }>;
};

const copy = {
  uz: {
    metaTitle: 'ProctorUZ self-service demo',
    metaDescription: 'Demo LMS orqali ProctorUZ secure exam flowini sinab ko‘ring.',
    title: 'ProctorUZ demo flowini o‘zingiz sinab ko‘ring',
    lead:
      'Qisqa formani to‘ldiring, demo LMSga kiring, desktop appni o‘rnating va org cabinetda o‘z reportingizni magic link orqali ko‘ring.',
    name: 'Ism va familiya',
    university: 'Universitet yoki tashkilot',
    email: 'Ish emaili',
    submit: 'Start interactive demo',
    loading: 'Demo tayyorlanmoqda...',
    success: 'Demo workspace tayyor',
    successLead: 'Avval desktop appni o‘rnating. Keyin demo imtihonni oching.',
    openDemo: 'Open demo exam',
    openDemoInstalled: 'App o‘rnatilgan bo‘lsa: Open demo exam',
    download: 'Download desktop app',
    downloadFirst: '1-qadam: Download desktop app',
    error: 'Demo yaratishda xatolik yuz berdi',
    steps: ['Demo student workspace ochiladi', 'Start with ProctorUZ bosiladi', 'Exam tugagach report magic link bilan ochiladi']
  },
  ru: {
    metaTitle: 'Демо ProctorUZ',
    metaDescription: 'Проверьте secure exam flow через демо LMS.',
    title: 'Попробуйте demo flow ProctorUZ самостоятельно',
    lead:
      'Заполните короткую форму, откройте demo LMS, установите desktop app и посмотрите отчет в org cabinet через magic link.',
    name: 'Имя и фамилия',
    university: 'Университет или организация',
    email: 'Рабочий email',
    submit: 'Start interactive demo',
    loading: 'Готовим демо...',
    success: 'Demo workspace готов',
    successLead: 'Сначала установите desktop app. Затем откройте demo exam.',
    openDemo: 'Open demo exam',
    openDemoInstalled: 'Если app уже установлен: Open demo exam',
    download: 'Download desktop app',
    downloadFirst: 'Шаг 1: Download desktop app',
    error: 'Не удалось создать demo',
    steps: ['Откроется demo student workspace', 'Нажмите Start with ProctorUZ', 'После exam отчет откроется через magic link']
  },
  en: {
    metaTitle: 'ProctorUZ self-service demo',
    metaDescription: 'Try the ProctorUZ secure exam flow through the demo LMS.',
    title: 'Try the ProctorUZ demo flow yourself',
    lead:
      'Fill in a short form, open the demo LMS, install the desktop app, complete the exam, and view your org cabinet report through a magic link.',
    name: 'Full name',
    university: 'University or organization',
    email: 'Work email',
    submit: 'Start interactive demo',
    loading: 'Preparing demo...',
    success: 'Demo workspace is ready',
    successLead: 'Install the desktop app first. Then open the demo exam.',
    openDemo: 'Open demo exam',
    openDemoInstalled: 'Already installed? Open demo exam',
    download: 'Download desktop app',
    downloadFirst: 'Step 1: Download desktop app',
    error: 'Could not create demo',
    steps: ['A demo student workspace opens', 'Click Start with ProctorUZ', 'After the exam, open the report with a magic link']
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const page = copy[locale];

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/${locale}/demo`
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteConfig.domain}/${locale}/demo`
    }
  };
}

export default async function DemoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DemoClient copy={copy[locale]} demoApiUrl={siteConfig.demoApiUrl} />;
}

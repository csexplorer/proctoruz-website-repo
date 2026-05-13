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
    metaDescription: 'Demo LMS orqali ProctorUZ ilovasini sinab ko‘ring.',
    title: 'ProctorUZ demo ilovasini o‘zingiz sinab ko‘ring',
    lead:
      'Qisqa formani to‘ldiring, demo LMSga kiring, desktop appni o‘rnating va org cabinetda o‘z reportingizni magic link orqali ko‘ring.',
    name: 'Ism va familiya',
    university: 'Universitet yoki tashkilot',
    phone: 'Telefon raqam',
    phoneInvalid: 'Telefon raqamni +998 00 000 00 00 formatida kiriting.',
    photo: 'Yuz rasmi',
    photoPlaceholder: 'Rasm faylini tanlang',
    photoInvalid: 'JPG, PNG yoki WebP formatidagi 5 MB gacha bo‘lgan rasm yuklang.',
    submit: 'Start interactive demo',
    loading: 'Demo tayyorlanmoqda...',
    success: 'Demo workspace tayyor',
    successLead: 'Bu sahifani ochiq qoldiring. Har bir qadam alohida tabda ochiladi.',
    openDemoInstalled: '2-qadam: Demo examni alohida tabda oching',
    downloadFirst: '1-qadam: Download desktop app',
    viewReport: '3-qadam: Reportni cabinet.proctor.uz da ko‘rish',
    checkReport: 'Reportni tekshirish',
    reportWaiting: 'Report exam yakunlangandan keyin aktiv bo‘ladi.',
    reportReady: 'Report tayyor. Teacher/admin review oynasini oching.',
    startNew: 'Yangi demo boshlash',
    expired: 'Demo muddati tugagan. Yangi demo boshlang.',
    error: 'Demo yaratishda xatolik yuz berdi',
    steps: ['Desktop appni yuklab oling', 'Demo examni alohida tabda oching', 'Exam tugagach reportni ko‘ring']
  },
  ru: {
    metaTitle: 'Демо ProctorUZ',
    metaDescription: 'Проверьте приложение ProctorUZ через демо LMS.',
    title: 'Попробуйте demo приложение ProctorUZ самостоятельно',
    lead:
      'Заполните короткую форму, откройте demo LMS, установите desktop app и посмотрите отчет в org cabinet через magic link.',
    name: 'Имя и фамилия',
    university: 'Университет или организация',
    phone: 'Номер телефона',
    phoneInvalid: 'Введите номер в формате +998 00 000 00 00.',
    photo: 'Фото лица',
    photoPlaceholder: 'Выберите файл изображения',
    photoInvalid: 'Загрузите JPG, PNG или WebP изображение до 5 МБ.',
    submit: 'Start interactive demo',
    loading: 'Готовим демо...',
    success: 'Demo workspace готов',
    successLead: 'Оставьте эту страницу открытой. Каждый шаг откроется в отдельной вкладке.',
    openDemoInstalled: 'Шаг 2: Откройте demo exam в отдельной вкладке',
    downloadFirst: 'Шаг 1: Download desktop app',
    viewReport: 'Шаг 3: Посмотреть report в cabinet.proctor.uz',
    checkReport: 'Проверить report',
    reportWaiting: 'Report станет доступен после завершения exam.',
    reportReady: 'Report готов. Откройте teacher/admin review.',
    startNew: 'Начать новое демо',
    expired: 'Срок demo истек. Начните новое demo.',
    error: 'Не удалось создать demo',
    steps: ['Скачайте desktop app', 'Откройте demo exam в отдельной вкладке', 'После exam откройте report']
  },
  en: {
    metaTitle: 'ProctorUZ self-service demo',
    metaDescription: 'Try the ProctorUZ application through the demo LMS.',
    title: 'Try the ProctorUZ demo application yourself',
    lead:
      'Fill in a short form, open the demo LMS, install the desktop app, complete the exam, and view your org cabinet report through a magic link.',
    name: 'Full name',
    university: 'University or organization',
    phone: 'Phone number',
    phoneInvalid: 'Enter the phone number in +998 00 000 00 00 format.',
    photo: 'Face photo',
    photoPlaceholder: 'Choose an image file',
    photoInvalid: 'Upload a JPG, PNG, or WebP image up to 5 MB.',
    submit: 'Start interactive demo',
    loading: 'Preparing demo...',
    success: 'Demo workspace is ready',
    successLead: 'Keep this page open. Each step opens in a separate tab.',
    openDemoInstalled: 'Step 2: Open demo exam in a separate tab',
    downloadFirst: 'Step 1: Download desktop app',
    viewReport: 'Step 3: View report in cabinet.proctor.uz',
    checkReport: 'Check report',
    reportWaiting: 'The report becomes available after the exam is completed.',
    reportReady: 'Report is ready. Open teacher/admin review.',
    startNew: 'Start new demo',
    expired: 'Demo expired. Start a new demo.',
    error: 'Could not create demo',
    steps: ['Download the desktop app', 'Open demo exam in a separate tab', 'View report after the exam']
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

  return <DemoClient copy={copy[locale]} apiBaseUrl={siteConfig.apiBaseUrl} />;
}

import type { Locale } from '@/i18n/routing';

export type SiteContent = {
  nav: {
    features: string;
    problems: string;
    audiences: string;
    download: string;
    demo: string;
    privacy: string;
    terms: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      eyebrow: string;
      title: string;
      lead: string;
      primaryCta: string;
      secondaryCta: string;
      trust: string[];
    };
    problemsTitle: string;
    problemsLead: string;
    problems: Array<{ title: string; text: string }>;
    featuresTitle: string;
    featuresLead: string;
    features: Array<{ title: string; text: string }>;
    audiencesTitle: string;
    audiences: Array<{ title: string; text: string }>;
    faqTitle: string;
    faqs: Array<{ question: string; answer: string }>;
    ctaTitle: string;
    ctaText: string;
  };
  download: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    latest: string;
    fallbackNotice: string;
    primaryAction: string;
    otherDownloads: string;
    version: string;
    released: string;
    size: string;
    checksum: string;
    noChecksum: string;
    returnTitle: string;
    returnLead: string;
    returnAction: string;
    returnCardAction: string;
    requirementsTitle: string;
    requirements: string[];
    stepsTitle: string;
    steps: string[];
  };
  legal: {
    privacyTitle: string;
    privacyText: string;
    termsTitle: string;
    termsText: string;
    contactTitle: string;
    contactText: string;
  };
};

export const content: Record<Locale, SiteContent> = {
  uz: {
    nav: {
      features: 'Imkoniyatlar',
      problems: 'Yechimlar',
      audiences: 'Kimlar uchun',
      download: 'Yuklab olish',
      demo: 'Demo so‘rash',
      privacy: 'Maxfiylik',
      terms: 'Shartlar'
    },
    home: {
      metaTitle: 'Online imtihonlar uchun xavfsiz proktoring',
      metaDescription:
        'Proctor.uz masofaviy imtihonlarda shaxsni aniqlash, monitoring va secure exam browser orqali nazoratni kuchaytiradi.',
      hero: {
        eyebrow: 'Secure exam delivery',
        title: 'Online imtihonlarni ishonchli va nazoratli o‘tkazing.',
        lead:
          'Proctor.uz universitetlar, o‘quv markazlari va sertifikatsiya jamoalariga masofaviy imtihonlarda cheating xavfini kamaytirish, talabani tekshirish va sessiya dalillarini tartibli ko‘rishga yordam beradi.',
        primaryCta: 'Desktop app yuklab olish',
        secondaryCta: 'Demo so‘rash',
        trust: ['Secure exam browser', 'Camera va screen monitoring', 'Session reports']
      },
      problemsTitle: 'Qaysi muammolarni hal qiladi?',
      problemsLead:
        'Masofaviy imtihonlarda ishonch faqat video qo‘ng‘iroq bilan yaratilmaydi. Tizim imtihon jarayonini boshidan oxirigacha tartibli kuzatishi kerak.',
      problems: [
        {
          title: 'Cheating xavfi',
          text: 'Browser lock, activity flags va session evidence imtihon qoidalarini buzishni aniqlashga yordam beradi.'
        },
        {
          title: 'Shaxsni tekshirish',
          text: 'Kamera asosidagi identity checks imtihonni topshirayotgan odam ro‘yxatdan o‘tgan nomzod ekanini tasdiqlashga xizmat qiladi.'
        },
        {
          title: 'Katta guruhlarni nazorat qilish',
          text: 'Instructorlar yuzlab sessiyalarni bir joydan kuzatadi, shubhali holatlar esa alohida ajratiladi.'
        },
        {
          title: 'Operatsion xarajat',
          text: 'Auditoriya, nazoratchi va logistika xarajatlari kamayadi, lekin imtihon intizomi saqlanadi.'
        }
      ],
      featuresTitle: 'Asosiy imkoniyatlar',
      featuresLead:
        'Proctor.uz imtihon xavfsizligi, kuzatuv va keyingi audit uchun kerakli asosiy oqimlarni bitta mahsulotga jamlaydi.',
      features: [
        {
          title: 'Secure exam browser',
          text: 'Nomzod imtihon vaqtida kerakli oynadan chiqmasligi va ruxsatsiz vositalardan foydalanmasligi uchun cheklovlar.'
        },
        {
          title: 'Camera, mic va screen monitoring',
          text: 'Imtihon muhitini ko‘rish, eshitish va ekran faoliyatini kuzatish uchun monitoring.'
        },
        {
          title: 'Face va identity checks',
          text: 'Sessiya boshida va davomida shaxsga oid signallarni tekshirish.'
        },
        {
          title: 'Suspicious activity flags',
          text: 'E’tibor talab qiladigan holatlar instructor review uchun belgilab boriladi.'
        },
        {
          title: 'Exam session reports',
          text: 'Har bir sessiya bo‘yicha dalillar, vaqtlar va holatlar auditga tayyor ko‘rinishda saqlanadi.'
        },
        {
          title: 'Admin workflows',
          text: 'Imtihon, guruh, nomzod va review jarayonlarini boshqarish uchun operatsion oqimlar.'
        }
      ],
      audiencesTitle: 'Kimlar uchun?',
      audiences: [
        {
          title: 'Universitetlar',
          text: 'Oraliq, yakuniy va kirish imtihonlarini masofadan boshqarish.'
        },
        {
          title: 'O‘quv markazlari',
          text: 'Kurs yakuni testlari va sertifikat imtihonlarida adolatli baholash.'
        },
        {
          title: 'Sertifikatsiya tashkilotlari',
          text: 'Professional imtihonlarda identity, monitoring va audit izlarini saqlash.'
        },
        {
          title: 'Enterprise training',
          text: 'Ichki compliance va training assessment jarayonlarini nazorat qilish.'
        }
      ],
      faqTitle: 'Ko‘p so‘raladigan savollar',
      faqs: [
        {
          question: 'Desktop app nima uchun kerak?',
          answer:
            'Secure exam browser imtihon muhiti ustidan ko‘proq nazorat beradi: browser cheklovlari, monitoring va session evidence shu app orqali ishlaydi.'
        },
        {
          question: 'Payload CMS kerakmi?',
          answer:
            'Birinchi versiya uchun shart emas. Kontent kodda saqlansa tezroq, arzonroq va deploy qilish osonroq bo‘ladi.'
        },
        {
          question: 'Proctor.uz qaysi tashkilotlarga mos?',
          answer:
            'Masofaviy yoki hybrid imtihon o‘tkazadigan universitetlar, o‘quv markazlari, sertifikatsiya va enterprise training jamoalari uchun.'
        }
      ],
      ctaTitle: 'Imtihon oqimingizni xavfsizroq qiling.',
      ctaText:
        'Desktop appni yuklab oling yoki jamoangiz uchun demo muhokamasini boshlang.'
    },
    download: {
      metaTitle: 'Proctoruz Secure Exam appni yuklab olish',
      metaDescription:
        'Windows, macOS va Linux uchun proctoruz-secure-exam desktop app installerlarini yuklab oling.',
      title: 'Proctoruz Secure Exam',
      lead:
        'Online imtihon vaqtida secure browser, monitoring va session evidence uchun desktop appni o‘rnating.',
      latest: 'Latest release',
      fallbackNotice:
        'GitHub Releases hozircha o‘qilmadi. Quyidagi linklar fallback konfiguratsiyadan ko‘rsatilmoqda.',
      primaryAction: 'Yuklab olish',
      otherDownloads: 'Boshqa yuklamalar',
      version: 'Versiya',
      released: 'Chiqarilgan sana',
      size: 'Hajm',
      checksum: 'Checksum',
      noChecksum: 'Checksum topilmadi',
      returnTitle: 'Demo imtihonga qaytish',
      returnLead:
        'Appni yuklab olib o‘rnating. O‘rnatish tugagach shu sahifaga qayting va demo imtihonni oching.',
      returnAction: 'App o‘rnatildi, demo examni ochish',
      returnCardAction: 'O‘rnatgandan keyin demo examni ochish',
      requirementsTitle: 'System requirements',
      requirements: [
        'Windows 10/11 yoki macOS 12+',
        'Ishlaydigan kamera va mikrofon',
        'Stabil internet ulanishi',
        'Imtihon vaqtida screen recording ruxsati'
      ],
      stepsTitle: 'O‘rnatish',
      steps: [
        'Operatsion tizimingizga mos installerni yuklab oling.',
        'Appni o‘rnating va kerakli camera, microphone, screen permissions bering.',
        'Imtihon platformasidagi link orqali sessiyaga kiring.'
      ]
    },
    legal: {
      privacyTitle: 'Maxfiylik siyosati',
      privacyText:
        'Proctor.uz imtihon xavfsizligi uchun zarur bo‘lgan session, identity va monitoring ma’lumotlarini qayta ishlaydi. Yakuniy siyosat tashkilot shartnomasi va amaldagi qonunchilikka mos holda to‘ldirilishi kerak.',
      termsTitle: 'Foydalanish shartlari',
      termsText:
        'Desktop app va proktoring xizmati imtihon qoidalariga rioya qilish, ruxsatlarni to‘g‘ri berish va tashkilot belgilagan tartib asosida ishlatiladi.',
      contactTitle: 'Aloqa',
      contactText: 'Savollar, demo yoki yordam uchun support@proctor.uz manziliga yozing.'
    }
  },
  ru: {
    nav: {
      features: 'Возможности',
      problems: 'Решения',
      audiences: 'Для кого',
      download: 'Скачать',
      demo: 'Запросить демо',
      privacy: 'Конфиденциальность',
      terms: 'Условия'
    },
    home: {
      metaTitle: 'Безопасный прокторинг для онлайн-экзаменов',
      metaDescription:
        'Proctor.uz помогает проводить онлайн-экзамены с проверкой личности, мониторингом и secure exam browser.',
      hero: {
        eyebrow: 'Secure exam delivery',
        title: 'Проводите онлайн-экзамены под надежным контролем.',
        lead:
          'Proctor.uz помогает университетам, учебным центрам и сертификационным командам снижать риск нарушений, проверять личность кандидата и получать понятные отчеты по сессиям.',
        primaryCta: 'Скачать desktop app',
        secondaryCta: 'Запросить демо',
        trust: ['Secure exam browser', 'Мониторинг камеры и экрана', 'Отчеты по сессиям']
      },
      problemsTitle: 'Какие проблемы решает?',
      problemsLead:
        'Для доверия к удаленному экзамену недостаточно видеозвонка. Нужен управляемый процесс от входа до аудита.',
      problems: [
        {
          title: 'Риск списывания',
          text: 'Browser lock, activity flags и evidence помогают выявлять нарушения правил экзамена.'
        },
        {
          title: 'Проверка личности',
          text: 'Camera-based identity checks помогают подтвердить, что экзамен проходит зарегистрированный кандидат.'
        },
        {
          title: 'Контроль больших групп',
          text: 'Инструкторы видят множество сессий в одном интерфейсе, а подозрительные события выделяются отдельно.'
        },
        {
          title: 'Операционные затраты',
          text: 'Меньше расходов на аудитории, наблюдателей и логистику при сохранении дисциплины экзамена.'
        }
      ],
      featuresTitle: 'Основные возможности',
      featuresLead:
        'Proctor.uz объединяет безопасность экзамена, мониторинг и данные для последующего аудита.',
      features: [
        {
          title: 'Secure exam browser',
          text: 'Ограничения, которые помогают не покидать нужное окно и не использовать запрещенные инструменты.'
        },
        {
          title: 'Camera, mic и screen monitoring',
          text: 'Мониторинг окружения, звука и активности экрана во время экзамена.'
        },
        {
          title: 'Face и identity checks',
          text: 'Проверка сигналов личности в начале и в ходе сессии.'
        },
        {
          title: 'Suspicious activity flags',
          text: 'События, требующие внимания, отмечаются для review инструктором.'
        },
        {
          title: 'Exam session reports',
          text: 'Evidence, таймлайны и события по каждой сессии в удобном для аудита формате.'
        },
        {
          title: 'Admin workflows',
          text: 'Операционные процессы для экзаменов, групп, кандидатов и review.'
        }
      ],
      audiencesTitle: 'Для кого?',
      audiences: [
        {
          title: 'Университеты',
          text: 'Промежуточные, финальные и вступительные экзамены в удаленном формате.'
        },
        {
          title: 'Учебные центры',
          text: 'Справедливая оценка на финальных тестах и сертификационных экзаменах.'
        },
        {
          title: 'Организации сертификации',
          text: 'Identity, monitoring и audit trail для профессиональных экзаменов.'
        },
        {
          title: 'Enterprise training',
          text: 'Контроль внутренних compliance и training assessment процессов.'
        }
      ],
      faqTitle: 'Частые вопросы',
      faqs: [
        {
          question: 'Зачем нужен desktop app?',
          answer:
            'Secure exam browser дает больше контроля над экзаменационной средой: ограничения браузера, мониторинг и session evidence работают через приложение.'
        },
        {
          question: 'Нужен ли Payload CMS?',
          answer:
            'Для первой версии нет. Контент в коде быстрее, дешевле и проще в эксплуатации.'
        },
        {
          question: 'Кому подходит Proctor.uz?',
          answer:
            'Университетам, учебным центрам, сертификационным организациям и enterprise training командам.'
        }
      ],
      ctaTitle: 'Сделайте экзамены безопаснее.',
      ctaText:
        'Скачайте desktop app или начните обсуждение демо для вашей команды.'
    },
    download: {
      metaTitle: 'Скачать Proctoruz Secure Exam',
      metaDescription:
        'Скачайте desktop installer proctoruz-secure-exam для Windows, macOS и Linux.',
      title: 'Proctoruz Secure Exam',
      lead:
        'Установите desktop app для secure browser, мониторинга и session evidence во время онлайн-экзамена.',
      latest: 'Последний релиз',
      fallbackNotice:
        'GitHub Releases сейчас недоступен. Ниже показаны ссылки из fallback-конфигурации.',
      primaryAction: 'Скачать',
      otherDownloads: 'Другие загрузки',
      version: 'Версия',
      released: 'Дата релиза',
      size: 'Размер',
      checksum: 'Checksum',
      noChecksum: 'Checksum не найден',
      returnTitle: 'Вернуться к demo exam',
      returnLead:
        'Скачайте и установите app. После установки вернитесь на эту страницу и откройте demo exam.',
      returnAction: 'App установлен, открыть demo exam',
      returnCardAction: 'После установки открыть demo exam',
      requirementsTitle: 'System requirements',
      requirements: [
        'Windows 10/11 или macOS 12+',
        'Рабочая камера и микрофон',
        'Стабильное интернет-соединение',
        'Разрешение на screen recording во время экзамена'
      ],
      stepsTitle: 'Установка',
      steps: [
        'Скачайте installer для вашей операционной системы.',
        'Установите app и выдайте permissions для camera, microphone и screen.',
        'Войдите в сессию по ссылке из экзаменационной платформы.'
      ]
    },
    legal: {
      privacyTitle: 'Политика конфиденциальности',
      privacyText:
        'Proctor.uz обрабатывает session, identity и monitoring данные, необходимые для безопасности экзамена. Финальная политика должна быть дополнена с учетом договора и применимого законодательства.',
      termsTitle: 'Условия использования',
      termsText:
        'Desktop app и сервис прокторинга используются в рамках правил экзамена, корректно выданных permissions и процедур организации.',
      contactTitle: 'Контакты',
      contactText: 'По вопросам, демо или поддержке пишите на support@proctor.uz.'
    }
  },
  en: {
    nav: {
      features: 'Features',
      problems: 'Solutions',
      audiences: 'For teams',
      download: 'Download',
      demo: 'Request demo',
      privacy: 'Privacy',
      terms: 'Terms'
    },
    home: {
      metaTitle: 'Secure online proctoring for exams',
      metaDescription:
        'Proctor.uz helps teams run online exams with identity checks, monitoring, secure exam browser, and session reports.',
      hero: {
        eyebrow: 'Secure exam delivery',
        title: 'Run online exams with confidence and control.',
        lead:
          'Proctor.uz helps universities, training centers, and certification teams reduce cheating risk, verify candidates, and review exam session evidence in one operational flow.',
        primaryCta: 'Download desktop app',
        secondaryCta: 'Request demo',
        trust: ['Secure exam browser', 'Camera and screen monitoring', 'Session reports']
      },
      problemsTitle: 'What problems does it solve?',
      problemsLead:
        'Trust in remote exams needs more than a video call. The exam flow has to be controlled from entry to audit.',
      problems: [
        {
          title: 'Cheating risk',
          text: 'Browser lock, activity flags, and session evidence help teams detect exam rule violations.'
        },
        {
          title: 'Identity verification',
          text: 'Camera-based identity checks help confirm that the registered candidate is taking the exam.'
        },
        {
          title: 'Large cohort monitoring',
          text: 'Instructors can review many sessions from one place while suspicious events are highlighted.'
        },
        {
          title: 'Operational cost',
          text: 'Reduce room, invigilator, and logistics costs while keeping exam discipline intact.'
        }
      ],
      featuresTitle: 'Core capabilities',
      featuresLead:
        'Proctor.uz brings exam security, monitoring, and post-exam audit workflows into one product.',
      features: [
        {
          title: 'Secure exam browser',
          text: 'Controls that help candidates stay in the permitted exam window and avoid unauthorized tools.'
        },
        {
          title: 'Camera, mic, and screen monitoring',
          text: 'Monitor environment, sound, and screen activity during the exam session.'
        },
        {
          title: 'Face and identity checks',
          text: 'Review identity signals at session start and during the exam.'
        },
        {
          title: 'Suspicious activity flags',
          text: 'Events requiring attention are marked for instructor review.'
        },
        {
          title: 'Exam session reports',
          text: 'Evidence, timestamps, and events are preserved in an audit-ready format.'
        },
        {
          title: 'Admin workflows',
          text: 'Operational flows for exams, groups, candidates, and reviews.'
        }
      ],
      audiencesTitle: 'Who is it for?',
      audiences: [
        {
          title: 'Universities',
          text: 'Remote midterms, finals, and entrance exams.'
        },
        {
          title: 'Training centers',
          text: 'Fair assessment for course finals and certificate exams.'
        },
        {
          title: 'Certification bodies',
          text: 'Identity, monitoring, and audit trails for professional exams.'
        },
        {
          title: 'Enterprise training',
          text: 'Controlled internal compliance and training assessments.'
        }
      ],
      faqTitle: 'Frequently asked questions',
      faqs: [
        {
          question: 'Why does the exam need a desktop app?',
          answer:
            'The secure exam browser provides stronger control over the exam environment. Browser restrictions, monitoring, and session evidence run through the app.'
        },
        {
          question: 'Do we need Payload CMS?',
          answer:
            'Not for v1. Keeping content in code is faster, cheaper, and simpler to operate for this website.'
        },
        {
          question: 'Who should use Proctor.uz?',
          answer:
            'Universities, training centers, certification bodies, and enterprise training teams running remote or hybrid exams.'
        }
      ],
      ctaTitle: 'Make your exam flow more secure.',
      ctaText:
        'Download the desktop app or start a demo conversation for your team.'
    },
    download: {
      metaTitle: 'Download Proctoruz Secure Exam',
      metaDescription:
        'Download proctoruz-secure-exam desktop installers for Windows, macOS, and Linux.',
      title: 'Proctoruz Secure Exam',
      lead:
        'Install the desktop app for secure browser, monitoring, and session evidence during online exams.',
      latest: 'Latest release',
      fallbackNotice:
        'GitHub Releases could not be loaded. The links below come from fallback configuration.',
      primaryAction: 'Download',
      otherDownloads: 'Other downloads',
      version: 'Version',
      released: 'Release date',
      size: 'Size',
      checksum: 'Checksum',
      noChecksum: 'Checksum not found',
      returnTitle: 'Return to demo exam',
      returnLead:
        'Download and install the app. After installation, come back to this page and open the demo exam.',
      returnAction: 'App installed, open demo exam',
      returnCardAction: 'After installing, open demo exam',
      requirementsTitle: 'System requirements',
      requirements: [
        'Windows 10/11 or macOS 12+',
        'Working camera and microphone',
        'Stable internet connection',
        'Screen recording permission during the exam'
      ],
      stepsTitle: 'Installation',
      steps: [
        'Download the installer for your operating system.',
        'Install the app and allow camera, microphone, and screen permissions.',
        'Join the session from the link in your exam platform.'
      ]
    },
    legal: {
      privacyTitle: 'Privacy policy',
      privacyText:
        'Proctor.uz processes session, identity, and monitoring data required for exam security. The final policy should be completed according to customer agreements and applicable law.',
      termsTitle: 'Terms of use',
      termsText:
        'The desktop app and proctoring service are used according to exam rules, granted permissions, and organization procedures.',
      contactTitle: 'Contact',
      contactText: 'For questions, demo requests, or support, contact support@proctor.uz.'
    }
  }
};

export function getContent(locale: Locale) {
  return content[locale];
}

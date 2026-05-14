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
    requirementsTitle: string;
    requirements: string[];
    stepsTitle: string;
    steps: string[];
    pricingTitle: string;
    pricingText: string;
    pricingPlans: Array<{ title: string; text: string }>;
  };
  legal: {
    privacyTitle: string;
    privacyText: string;
    privacyIntro: string;
    privacySections: Array<{ title: string; body: string[] }>;
    termsTitle: string;
    termsText: string;
    termsIntro: string;
    termsSections: Array<{ title: string; body: string[] }>;
    lastUpdatedLabel: string;
    lastUpdated: string;
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
        'Proctor.uz masofaviy imtihonlarda shaxsni aniqlash, monitoring va ProctorUZ desktop app orqali nazoratni kuchaytiradi.',
      hero: {
        eyebrow: 'ProctorUZ delivery',
        title: 'Online imtihonlarni ishonchli va nazoratli o‘tkazing.',
        lead:
          'Proctor.uz universitetlar, o‘quv markazlari va sertifikatsiya jamoalariga masofaviy imtihonlarda cheating xavfini kamaytirish, talabani tekshirish va sessiya dalillarini tartibli ko‘rishga yordam beradi.',
        primaryCta: 'Desktop app yuklab olish',
        secondaryCta: 'Demo so‘rash',
        trust: ['ProctorUZ desktop app', 'Camera va screen monitoring', 'Session reports']
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
          title: 'ProctorUZ desktop app',
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
            'ProctorUZ desktop app imtihon muhiti ustidan ko‘proq nazorat beradi: browser cheklovlari, monitoring va session evidence shu app orqali ishlaydi.'
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
      metaTitle: 'ProctorUZ appni yuklab olish',
      metaDescription:
        'Windows, macOS va Linux uchun ProctorUZ desktop app installerlarini yuklab oling.',
      title: 'ProctorUZ',
      lead:
        'Online imtihon vaqtida ishonchli monitoring va session evidence uchun desktop appni o‘rnating.',
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
      ],
      pricingTitle: 'Ishtirokchilar uchun bepul',
      pricingText:
        'ProctorUZ desktop app Microsoft Store va rasmiy download sahifasida imtihon ishtirokchilari uchun bepul. Tashkilotlar Proctor.uz xizmatidan alohida shartnoma asosida foydalanadi.',
      pricingPlans: [
        {
          title: 'Pilot',
          text: 'Cheklangan imtihonlar yoki foydalanuvchilar bilan qisqa muddatli sinov.'
        },
        {
          title: 'Institution',
          text: 'Universitet yoki o‘quv markazining muntazam imtihon jarayonlari uchun subscription.'
        },
        {
          title: 'Enterprise',
          text: 'Maxsus SLA, LMS integratsiyasi, support va data retention shartlari.'
        }
      ]
    },
    legal: {
      privacyTitle: 'Maxfiylik siyosati',
      privacyText:
        'Proctor.uz imtihon xavfsizligi uchun zarur session, identity, camera, screen evidence va monitoring ma’lumotlarini qayta ishlaydi.',
      privacyIntro:
        'Ushbu siyosat ProctorUZ desktop app va Proctor.uz proktoring xizmatidan foydalanganda qanday ma’lumotlar yig‘ilishi, nima uchun ishlatilishi va kim bilan ulashilishi haqida tushuntiradi.',
      privacySections: [
        {
          title: 'Data controller va aloqa',
          body: [
            'Proctor.uz xizmat operatori sifatida imtihon tashkilotchilari bilan birga ishlaydi. Ba’zi holatlarda universitet, o‘quv markazi yoki sertifikatsiya tashkiloti asosiy data controller bo‘lishi mumkin.',
            'Maxfiylik savollari, data access so‘rovlari yoki support uchun support@proctor.uz manziliga yozing.'
          ]
        },
        {
          title: 'Qanday ma’lumotlar yig‘iladi',
          body: [
            'Launch token, device ID, app versiyasi, platforma, exam session ID, seans ID, participant ID, tashkilot ID va imtihon nomi qayta ishlanadi.',
            'Imtihon vaqtida kamera tasvirlari, liveness va face match natijalari, screen capture evidence, proctoring eventlar, risk metadata, timestamps va texnik connection holatlari qayta ishlanishi mumkin.',
            'App uzluksiz audio yozuvni kod darajasida yuklayotgani ko‘rinmaydi, lekin mikrofon ruxsati proktoring tayyorgarligi va tashkilot siyosati talab qilgan monitoring uchun so‘ralishi mumkin.'
          ]
        },
        {
          title: 'Kamera, ekran va identity checks',
          body: [
            'Kamera liveness, yuz mavjudligi, bir nechta yuz bor-yo‘qligi, gaze signal va identity/face match tekshiruvlari uchun ishlatiladi.',
            'Screen recording ruxsati imtihon xavfsizligi buzilishi ehtimoli bo‘lgan holatlarda ekran dalillarini olish va audit qilish uchun ishlatiladi.',
            'Face match va liveness natijalari nomzod identity holatini tasdiqlash, retry talab qilish yoki bloklash uchun ishlatilishi mumkin.'
          ]
        },
        {
          title: 'Maqsad va huquqiy asos',
          body: [
            'Ma’lumotlar imtihon xavfsizligini ta’minlash, session auditini yuritish, cheating xavfini aniqlash, support ko‘rsatish va tashkilot bilan tuzilgan shartnomani bajarish uchun ishlatiladi.',
            'Ruxsatlar app ichida va operatsion tizim darajasida so‘raladi. Imtihonga kirish orqali foydalanuvchi tashkilot imtihon qoidalari va ushbu siyosat doirasidagi monitoringga rozilik bildiradi.'
          ]
        },
        {
          title: 'Ulashish, saqlash va xavfsizlik',
          body: [
            'Session evidence va monitoring natijalari tegishli imtihon tashkilotchisi, vakolatli proktorlar, support jamoasi va zarur texnik provayderlar bilan cheklangan maqsadlarda ulashilishi mumkin.',
            'Ma’lumotlar https://api.proctor.uz orqali Proctor.uz serverlariga yuboriladi va tashkilot shartnomasi hamda amaldagi qonunchilikka muvofiq saqlanadi.',
            'Biz access control, encrypted transport, narrow IPC APIs va operatsion xavfsizlik choralaridan foydalanamiz, lekin internet orqali uzatiladigan har qanday tizim mutlaq xavfsizlikni kafolatlay olmaydi.'
          ]
        },
        {
          title: 'Foydalanuvchi huquqlari va yoshga oid holatlar',
          body: [
            'Foydalanuvchilar o‘z ma’lumotlariga kirish, tuzatish, o‘chirish yoki processing bo‘yicha e’tiroz bildirish uchun support@proctor.uz yoki imtihon tashkilotchisiga murojaat qilishi mumkin.',
            'Agar imtihon voyaga yetmaganlar uchun o‘tkazilsa, tashkilot ota-ona yoki qonuniy vakil roziligi talab qilinadimi-yo‘qligini belgilaydi.'
          ]
        }
      ],
      termsTitle: 'Foydalanish shartlari',
      termsText:
        'ProctorUZ desktop app va Proctor.uz proktoring xizmati imtihon qoidalari, kerakli ruxsatlar va tashkilot tartiblari asosida ishlatiladi.',
      termsIntro:
        'Ushbu shartlar ProctorUZ desktop appni o‘rnatish, Microsoft Store’dan bepul yuklab olish va imtihon sessiyalarida ishlatish qoidalarini belgilaydi.',
      termsSections: [
        {
          title: 'Xizmatdan foydalanish',
          body: [
            'ProctorUZ desktop app imtihon ishtirokchilari uchun bepul taqdim etiladi. Tashkilotlar Proctor.uz xizmatidan alohida subscription yoki service agreement asosida foydalanadi.',
            'App faqat ruxsat etilgan imtihon linklari, launch tokenlar va tashkilot belgilagan assessment jarayonlari uchun ishlatilishi kerak.'
          ]
        },
        {
          title: 'Imtihon qoidalari va ruxsatlar',
          body: [
            'Foydalanuvchi imtihon boshlanishidan oldin camera, microphone, screen recording va internet connection tayyorligini ta’minlashi kerak.',
            'Imtihon vaqtida app fullscreen yoki locked exam holatini qo‘llashi, ruxsatsiz oynalar, tashqi monitorlar yoki boshqa cheating signallarini flag qilishi mumkin.'
          ]
        },
        {
          title: 'Taqiqlangan harakatlar',
          body: [
            'Launch tokenni ulashish, app xavfsizlik cheklovlarini aylanib o‘tish, devtools yoki reverse engineering orqali nazoratni buzish, boshqa shaxs nomidan imtihon topshirish va evidence capture’ni bloklash taqiqlanadi.',
            'Qoidabuzarliklar session review, identity bloklanishi, imtihondan chetlatish yoki tashkilot intizomiy jarayonlariga olib kelishi mumkin.'
          ]
        },
        {
          title: 'Evidence va audit',
          body: [
            'Foydalanuvchi imtihon xavfsizligi uchun camera snapshots, screen evidence, identity result, timestamps va proctoring event metadata yozib borilishi mumkinligini qabul qiladi.',
            'Audit natijalari yakuniy baholash yoki intizomiy qaror uchun yagona asos bo‘lmasligi mumkin; tashkilot o‘z review tartibiga amal qiladi.'
          ]
        },
        {
          title: 'Mavjudlik, javobgarlik va yangilanishlar',
          body: [
            'Proctor.uz xizmatni barqaror ishlatishga harakat qiladi, lekin internet, qurilma, OS permission yoki uchinchi tomon LMS muammolari uchun uzluksiz ishlashni kafolatlamaydi.',
            'App va shartlar vaqti-vaqti bilan yangilanishi mumkin. Muhim o‘zgarishlar rasmiy sayt yoki app distribution kanallari orqali e’lon qilinadi.'
          ]
        },
        {
          title: 'Bekor qilish va huquqiy tartib',
          body: [
            'Tashkilot yoki Proctor.uz xavfsizlik, compliance yoki shartnoma buzilishi holatlarida session access yoki xizmatdan foydalanishni cheklashi mumkin.',
            'Governing law va dispute resolution shartlari tashkilot bilan tuzilgan service agreement yoki amaldagi qonunchilikka muvofiq belgilanadi.'
          ]
        }
      ],
      lastUpdatedLabel: 'Oxirgi yangilanish',
      lastUpdated: '14 May 2026',
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
        'Proctor.uz помогает проводить онлайн-экзамены с проверкой личности, мониторингом и desktop app ProctorUZ.',
      hero: {
        eyebrow: 'ProctorUZ delivery',
        title: 'Проводите онлайн-экзамены под надежным контролем.',
        lead:
          'Proctor.uz помогает университетам, учебным центрам и сертификационным командам снижать риск нарушений, проверять личность кандидата и получать понятные отчеты по сессиям.',
        primaryCta: 'Скачать desktop app',
        secondaryCta: 'Запросить демо',
        trust: ['Desktop app ProctorUZ', 'Мониторинг камеры и экрана', 'Отчеты по сессиям']
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
          title: 'Desktop app ProctorUZ',
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
            'Desktop app ProctorUZ дает больше контроля над экзаменационной средой: ограничения браузера, мониторинг и session evidence работают через приложение.'
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
      metaTitle: 'Скачать ProctorUZ',
      metaDescription:
        'Скачайте desktop installer ProctorUZ для Windows, macOS и Linux.',
      title: 'ProctorUZ',
      lead:
        'Установите desktop app ProctorUZ для мониторинга и session evidence во время онлайн-экзамена.',
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
      ],
      pricingTitle: 'Бесплатно для участников экзамена',
      pricingText:
        'Desktop app ProctorUZ бесплатен для участников экзамена в Microsoft Store и на официальной странице загрузки. Организации используют Proctor.uz по отдельному договору.',
      pricingPlans: [
        {
          title: 'Pilot',
          text: 'Краткосрочная проверка на ограниченном числе экзаменов или пользователей.'
        },
        {
          title: 'Institution',
          text: 'Подписка для регулярных экзаменационных процессов университета или учебного центра.'
        },
        {
          title: 'Enterprise',
          text: 'Индивидуальные SLA, LMS-интеграция, поддержка и условия хранения данных.'
        }
      ]
    },
    legal: {
      privacyTitle: 'Политика конфиденциальности',
      privacyText:
        'Proctor.uz обрабатывает session, identity, camera, screen evidence и monitoring данные, необходимые для безопасности экзамена.',
      privacyIntro:
        'Эта политика объясняет, какие данные обрабатываются при использовании desktop app ProctorUZ и сервиса Proctor.uz, зачем они нужны и с кем могут передаваться.',
      privacySections: [
        {
          title: 'Data controller и контакты',
          body: [
            'Proctor.uz работает как оператор сервиса совместно с организаторами экзаменов. В отдельных случаях университет, учебный центр или сертификационная организация может быть основным data controller.',
            'По вопросам конфиденциальности, доступа к данным или поддержки пишите на support@proctor.uz.'
          ]
        },
        {
          title: 'Какие данные собираются',
          body: [
            'Обрабатываются launch token, device ID, версия app, платформа, exam session ID, seans ID, participant ID, organization ID и название экзамена.',
            'Во время экзамена могут обрабатываться camera snapshots, результаты liveness и face match, screen capture evidence, proctoring events, risk metadata, timestamps и технический статус соединения.',
            'В текущем desktop code не видно загрузки непрерывной аудиозаписи, но microphone permission может запрашиваться для готовности прокторинга и monitoring, если это требуется политикой организации.'
          ]
        },
        {
          title: 'Камера, экран и identity checks',
          body: [
            'Камера используется для liveness, проверки наличия лица, обнаружения нескольких лиц, gaze signals и identity/face match checks.',
            'Screen recording permission используется для получения экранных доказательств и последующего audit при возможных нарушениях безопасности экзамена.',
            'Результаты face match и liveness могут использоваться для подтверждения identity, запроса retry или блокировки продолжения сессии.'
          ]
        },
        {
          title: 'Цель и правовое основание',
          body: [
            'Данные используются для безопасности экзамена, session audit, обнаружения cheating risk, поддержки и исполнения договора с организацией.',
            'Permissions запрашиваются в app и на уровне операционной системы. Входя в экзамен, пользователь принимает правила организации и monitoring в рамках этой политики.'
          ]
        },
        {
          title: 'Передача, хранение и безопасность',
          body: [
            'Session evidence и monitoring results могут передаваться соответствующему организатору экзамена, уполномоченным прокторам, support team и необходимым техническим провайдерам в ограниченных целях.',
            'Данные отправляются на серверы Proctor.uz через https://api.proctor.uz и хранятся согласно договору с организацией и применимому законодательству.',
            'Мы используем access control, encrypted transport, narrow IPC APIs и операционные меры безопасности, но ни одна система передачи через интернет не может гарантировать абсолютную безопасность.'
          ]
        },
        {
          title: 'Права пользователей и несовершеннолетние',
          body: [
            'Пользователи могут обратиться на support@proctor.uz или к организатору экзамена для доступа, исправления, удаления данных или возражения против processing.',
            'Если экзамен проводится для несовершеннолетних, организация определяет, требуется ли согласие родителя или законного представителя.'
          ]
        }
      ],
      termsTitle: 'Условия использования',
      termsText:
        'Desktop app ProctorUZ и сервис Proctor.uz используются согласно правилам экзамена, необходимым permissions и процедурам организации.',
      termsIntro:
        'Эти условия регулируют установку desktop app ProctorUZ, бесплатную загрузку из Microsoft Store и использование во время экзаменационных сессий.',
      termsSections: [
        {
          title: 'Использование сервиса',
          body: [
            'Desktop app ProctorUZ предоставляется участникам экзамена бесплатно. Организации используют сервис Proctor.uz по отдельной subscription или service agreement.',
            'App должна использоваться только с разрешенными exam links, launch tokens и assessment workflows, заданными организацией.'
          ]
        },
        {
          title: 'Правила экзамена и permissions',
          body: [
            'Пользователь должен до начала экзамена обеспечить готовность camera, microphone, screen recording и internet connection.',
            'Во время экзамена app может применять fullscreen или locked exam mode, а также отмечать неразрешенные окна, внешние мониторы и другие cheating signals.'
          ]
        },
        {
          title: 'Запрещенные действия',
          body: [
            'Запрещены передача launch token, обход security restrictions, попытки нарушить контроль через devtools или reverse engineering, сдача экзамена за другого человека и блокировка evidence capture.',
            'Нарушения могут привести к session review, identity block, удалению из экзамена или дисциплинарным процедурам организации.'
          ]
        },
        {
          title: 'Evidence и audit',
          body: [
            'Пользователь принимает, что для безопасности экзамена могут записываться camera snapshots, screen evidence, identity results, timestamps и proctoring event metadata.',
            'Audit results могут не быть единственным основанием для итоговой оценки или дисциплинарного решения; организация применяет собственный review process.'
          ]
        },
        {
          title: 'Доступность, ответственность и обновления',
          body: [
            'Proctor.uz стремится обеспечивать стабильную работу сервиса, но не гарантирует непрерывность при проблемах internet, device, OS permissions или сторонней LMS.',
            'App и условия могут периодически обновляться. Существенные изменения публикуются на официальном сайте или через каналы распространения app.'
          ]
        },
        {
          title: 'Прекращение доступа и право',
          body: [
            'Организация или Proctor.uz могут ограничить session access или использование сервиса при security, compliance или contract violations.',
            'Governing law и dispute resolution определяются service agreement с организацией или применимым законодательством.'
          ]
        }
      ],
      lastUpdatedLabel: 'Последнее обновление',
      lastUpdated: '14 мая 2026',
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
        'Proctor.uz helps teams run online exams with identity checks, monitoring, the ProctorUZ desktop app, and session reports.',
      hero: {
        eyebrow: 'ProctorUZ delivery',
        title: 'Run online exams with confidence and control.',
        lead:
          'Proctor.uz helps universities, training centers, and certification teams reduce cheating risk, verify candidates, and review exam session evidence in one operational flow.',
        primaryCta: 'Download desktop app',
        secondaryCta: 'Request demo',
        trust: ['ProctorUZ desktop app', 'Camera and screen monitoring', 'Session reports']
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
          title: 'ProctorUZ desktop app',
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
            'The ProctorUZ desktop app provides stronger control over the exam environment. Browser restrictions, monitoring, and session evidence run through the app.'
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
      metaTitle: 'Download ProctorUZ',
      metaDescription:
        'Download ProctorUZ desktop installers for Windows, macOS, and Linux.',
      title: 'ProctorUZ',
      lead:
        'Install the ProctorUZ desktop app for monitoring and session evidence during online exams.',
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
      ],
      pricingTitle: 'Free for exam participants',
      pricingText:
        'The ProctorUZ desktop app is free for exam participants in Microsoft Store and on the official download page. Institutions use Proctor.uz under a separate service agreement.',
      pricingPlans: [
        {
          title: 'Pilot',
          text: 'A short-term validation with limited exams or users.'
        },
        {
          title: 'Institution',
          text: 'A recurring subscription for regular university or training-center exam operations.'
        },
        {
          title: 'Enterprise',
          text: 'Custom SLA, LMS integration, support, and data retention terms.'
        }
      ]
    },
    legal: {
      privacyTitle: 'Privacy policy',
      privacyText:
        'Proctor.uz processes session, identity, camera, screen evidence, and monitoring data required for exam security.',
      privacyIntro:
        'This policy explains what data is processed when you use the ProctorUZ desktop app and Proctor.uz proctoring service, why it is used, and who it may be shared with.',
      privacySections: [
        {
          title: 'Data controller and contact',
          body: [
            'Proctor.uz operates the service together with exam organizations. In some cases, the university, training center, or certification provider is the primary data controller.',
            'For privacy questions, data access requests, or support, contact support@proctor.uz.'
          ]
        },
        {
          title: 'Data we collect',
          body: [
            'We process launch tokens, device ID, app version, platform, exam session ID, seans ID, participant ID, organization ID, and exam title.',
            'During an exam, we may process camera snapshots, liveness and face match results, screen capture evidence, proctoring events, risk metadata, timestamps, and technical connection status.',
            'The current desktop code does not visibly upload continuous audio, but microphone permission may be requested for proctoring readiness and monitoring required by the exam organization.'
          ]
        },
        {
          title: 'Camera, screen, and identity checks',
          body: [
            'The camera is used for liveness, face presence, multiple-face detection, gaze signals, and identity or face match checks.',
            'Screen recording permission is used to capture screen evidence for exam security review and audit when suspicious activity is detected.',
            'Face match and liveness results may be used to verify identity, require another attempt, or block continuation of the exam session.'
          ]
        },
        {
          title: 'Purpose and legal basis',
          body: [
            'Data is used to protect exam integrity, maintain session audit trails, detect cheating risk, provide support, and perform agreements with exam organizations.',
            'Permissions are requested in the app and by the operating system. By joining an exam, users accept the organization’s exam rules and monitoring described in this policy.'
          ]
        },
        {
          title: 'Sharing, retention, and security',
          body: [
            'Session evidence and monitoring results may be shared with the relevant exam organization, authorized proctors, support staff, and necessary technical providers for limited service purposes.',
            'Data is sent to Proctor.uz servers through https://api.proctor.uz and retained according to the organization agreement and applicable law.',
            'We use access controls, encrypted transport, narrow IPC APIs, and operational security measures, but no internet-based system can guarantee absolute security.'
          ]
        },
        {
          title: 'User rights and minors',
          body: [
            'Users may request access, correction, deletion, or object to processing by contacting support@proctor.uz or the exam organization.',
            'If an exam is delivered to minors, the exam organization determines whether parent or legal guardian consent is required.'
          ]
        }
      ],
      termsTitle: 'Terms of use',
      termsText:
        'The ProctorUZ desktop app and Proctor.uz proctoring service are used according to exam rules, required permissions, and organization procedures.',
      termsIntro:
        'These terms govern installing the ProctorUZ desktop app, downloading it for free from Microsoft Store, and using it during exam sessions.',
      termsSections: [
        {
          title: 'Using the service',
          body: [
            'The ProctorUZ desktop app is provided free for exam participants. Institutions use Proctor.uz under a separate subscription or service agreement.',
            'The app must be used only with authorized exam links, launch tokens, and assessment workflows provided by the exam organization.'
          ]
        },
        {
          title: 'Exam rules and permissions',
          body: [
            'Users must make sure camera, microphone, screen recording, and internet connection are ready before the exam starts.',
            'During an exam, the app may apply fullscreen or locked exam mode and flag unauthorized windows, external monitors, or other cheating signals.'
          ]
        },
        {
          title: 'Prohibited conduct',
          body: [
            'Users may not share launch tokens, bypass security restrictions, use devtools or reverse engineering to disrupt controls, take an exam for someone else, or block evidence capture.',
            'Violations may lead to session review, identity blocking, removal from the exam, or disciplinary procedures by the exam organization.'
          ]
        },
        {
          title: 'Evidence and audit',
          body: [
            'Users accept that camera snapshots, screen evidence, identity results, timestamps, and proctoring event metadata may be recorded for exam security.',
            'Audit results may not be the only basis for grading or disciplinary decisions; the exam organization applies its own review process.'
          ]
        },
        {
          title: 'Availability, liability, and updates',
          body: [
            'Proctor.uz works to keep the service reliable, but does not guarantee uninterrupted operation when issues come from internet access, devices, OS permissions, or third-party LMS platforms.',
            'The app and these terms may be updated from time to time. Material changes will be posted on the official website or app distribution channels.'
          ]
        },
        {
          title: 'Termination and governing terms',
          body: [
            'The exam organization or Proctor.uz may restrict session access or service use for security, compliance, or agreement violations.',
            'Governing law and dispute resolution are defined by the organization service agreement or applicable law.'
          ]
        }
      ],
      lastUpdatedLabel: 'Last updated',
      lastUpdated: 'May 14, 2026',
      contactTitle: 'Contact',
      contactText: 'For questions, demo requests, or support, contact support@proctor.uz.'
    }
  }
};

export function getContent(locale: Locale) {
  return content[locale];
}

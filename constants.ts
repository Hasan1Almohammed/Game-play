
import { type App } from './types';

export const APP_CATEGORIES: string[] = ['ألعاب', 'إنتاجية', 'اجتماعي', 'ترفيه', 'أدوات', 'تعليم'];

export const INITIAL_APPS: App[] = [
  {
    id: 1,
    name: 'مغامرة الفضاء',
    category: 'ألعاب',
    rating: 4.8,
    icon: 'https://picsum.photos/seed/spaceadv/200',
    description: 'استكشف المجرة في هذه المغامرة الفضائية الملحمية. قاتل الفضائيين، وقم بترقية سفينتك، واكتشف كواكب جديدة.',
    screenshots: ['https://picsum.photos/seed/spaceadv_ss1/600/400', 'https://picsum.photos/seed/spaceadv_ss2/600/400'],
  },
  {
    id: 2,
    name: 'مدير المهام',
    category: 'إنتاجية',
    rating: 4.9,
    icon: 'https://picsum.photos/seed/taskmaster/200',
    description: 'نظم حياتك مع مدير المهام. أداة بسيطة وقوية لتتبع مهامك اليومية وتحقيق أهدافك.',
    screenshots: ['https://picsum.photos/seed/taskmaster_ss1/600/400', 'https://picsum.photos/seed/taskmaster_ss2/600/400'],
  },
  {
    id: 3,
    name: 'كونكت',
    category: 'اجتماعي',
    rating: 4.5,
    icon: 'https://picsum.photos/seed/konnect/200',
    description: 'تواصل مع الأصدقاء والعائلة. شارك اللحظات، وأرسل الرسائل، وابق على اتصال مع من يهمك أمرهم.',
    screenshots: ['https://picsum.photos/seed/konnect_ss1/600/400'],
  },
  {
    id: 4,
    name: 'سينما تايم',
    category: 'ترفيه',
    rating: 4.7,
    icon: 'https://picsum.photos/seed/cinematime/200',
    description: 'بوابتك إلى عالم الأفلام والمسلسلات. شاهد أحدث الإصدارات، واكتشف الكلاسيكيات، واستمتع بوقتك.',
    screenshots: ['https://picsum.photos/seed/cinematime_ss1/600/400', 'https://picsum.photos/seed/cinematime_ss2/600/400', 'https://picsum.photos/seed/cinematime_ss3/600/400'],
  },
  {
    id: 5,
    name: 'مجموعة الأدوات',
    category: 'أدوات',
    rating: 4.6,
    icon: 'https://picsum.photos/seed/toolkit/200',
    description: 'كل الأدوات التي تحتاجها في تطبيق واحد: آلة حاسبة، مصباح يدوي، بوصلة، والمزيد.',
    screenshots: [],
  },
   {
    id: 6,
    name: 'عبقري الرياضيات',
    category: 'تعليم',
    rating: 4.9,
    icon: 'https://picsum.photos/seed/mathwiz/200',
    description: 'اجعل تعلم الرياضيات ممتعًا! ألعاب وألغاز تفاعلية لجميع الأعمار لتقوية مهاراتك الحسابية.',
    screenshots: ['https://picsum.photos/seed/mathwiz_ss1/600/400', 'https://picsum.photos/seed/mathwiz_ss2/600/400'],
  }
];

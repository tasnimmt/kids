// Country flashcards: flag, name, capital, map shape.
// Map shape: rough inline SVG paths (simplified silhouettes, kid-friendly).
const COUNTRIES = {
  title: { ms: 'Negara', en: 'Countries', ar: 'دول', zh: '国家' }, icon: '🌍',
  items: [
    {
      id: 'malaysia', flag: 'images/countries/flag-malaysia.svg', capital: { ms: 'Kuala Lumpur', en: 'Kuala Lumpur', ar: 'كوالالمبور', zh: '吉隆坡' },
      ms: 'Malaysia', en: 'Malaysia', ar: 'ماليزيا', zh: '马来西亚',
      map: 'M20,45 C25,30 40,20 55,25 C70,30 80,25 90,35 C85,50 75,55 60,52 C45,60 28,58 20,45 Z',
    },
    {
      id: 'indonesia', flag: 'images/countries/flag-indonesia.svg', capital: { ms: 'Jakarta', en: 'Jakarta', ar: 'جاكارتا', zh: '雅加达' },
      ms: 'Indonesia', en: 'Indonesia', ar: 'إندونيسيا', zh: '印度尼西亚',
      map: 'M15,40 C30,30 45,35 60,30 C75,25 85,35 80,45 C65,55 50,50 35,52 C25,50 15,48 15,40 Z',
    },
    {
      id: 'singapore', flag: 'images/countries/flag-singapore.svg', capital: { ms: 'Singapura', en: 'Singapore', ar: 'سنغافورة', zh: '新加坡' },
      ms: 'Singapura', en: 'Singapore', ar: 'سنغافورة', zh: '新加坡',
      map: 'M40,50 C45,45 55,45 60,50 C55,58 45,58 40,50 Z',
    },
    {
      id: 'japan', flag: 'images/countries/flag-japan.svg', capital: { ms: 'Tokyo', en: 'Tokyo', ar: 'طوكيو', zh: '东京' },
      ms: 'Jepun', en: 'Japan', ar: 'اليابان', zh: '日本',
      map: 'M55,15 C60,25 70,35 75,50 C70,65 60,70 55,60 C50,45 48,28 55,15 Z',
    },
    {
      id: 'china', flag: 'images/countries/flag-china.svg', capital: { ms: 'Beijing', en: 'Beijing', ar: 'بكين', zh: '北京' },
      ms: 'China', en: 'China', ar: 'الصين', zh: '中国',
      map: 'M20,35 C35,20 60,15 80,25 C90,35 85,50 70,55 C55,60 35,58 25,50 C18,45 15,40 20,35 Z',
    },
    {
      id: 'saudi-arabia', flag: 'images/countries/flag-saudi-arabia.svg', capital: { ms: 'Riyadh', en: 'Riyadh', ar: 'الرياض', zh: '利雅得' },
      ms: 'Arab Saudi', en: 'Saudi Arabia', ar: 'السعودية', zh: '沙特阿拉伯',
      map: 'M25,45 C35,35 55,30 75,35 C85,40 85,55 75,60 C60,65 40,62 30,55 C22,52 20,50 25,45 Z',
    },
    {
      id: 'egypt', flag: 'images/countries/flag-egypt.svg', capital: { ms: 'Kaherah', en: 'Cairo', ar: 'القاهرة', zh: '开罗' },
      ms: 'Mesir', en: 'Egypt', ar: 'مصر', zh: '埃及',
      map: 'M50,20 C58,25 60,45 58,70 C55,78 45,78 42,70 C40,45 42,25 50,20 Z',
    },
    {
      id: 'turkey', flag: 'images/countries/flag-turkey.svg', capital: { ms: 'Ankara', en: 'Ankara', ar: 'أنقرة', zh: '安卡拉' },
      ms: 'Turki', en: 'Turkey', ar: 'تركيا', zh: '土耳其',
      map: 'M20,45 C35,35 65,32 80,40 C85,48 75,55 60,56 C45,58 28,55 20,45 Z',
    },
    {
      id: 'united-kingdom', flag: 'images/countries/flag-united-kingdom.svg', capital: { ms: 'London', en: 'London', ar: 'لندن', zh: '伦敦' },
      ms: 'United Kingdom', en: 'United Kingdom', ar: 'المملكة المتحدة', zh: '英国',
      map: 'M45,15 C52,25 58,45 55,70 C50,78 42,75 42,65 C40,45 40,25 45,15 Z',
    },
    {
      id: 'france', flag: 'images/countries/flag-france.svg', capital: { ms: 'Paris', en: 'Paris', ar: 'باريس', zh: '巴黎' },
      ms: 'Perancis', en: 'France', ar: 'فرنسا', zh: '法国',
      map: 'M40,20 C50,18 60,25 58,40 C56,55 50,70 42,72 C35,68 32,50 33,35 C34,27 35,22 40,20 Z',
    },
    {
      id: 'united-states', flag: 'images/countries/flag-united-states.svg', capital: { ms: 'Washington, D.C.', en: 'Washington, D.C.', ar: 'واشنطن', zh: '华盛顿' },
      ms: 'Amerika Syarikat', en: 'United States', ar: 'الولايات المتحدة', zh: '美国',
      map: 'M15,30 C35,22 60,25 80,30 C85,40 80,55 65,58 C50,62 30,55 20,45 C14,40 12,35 15,30 Z',
    },
    {
      id: 'australia', flag: 'images/countries/flag-australia.svg', capital: { ms: 'Canberra', en: 'Canberra', ar: 'كانبرا', zh: '堪培拉' },
      ms: 'Australia', en: 'Australia', ar: 'أستراليا', zh: '澳大利亚',
      map: 'M25,45 C40,35 65,38 78,48 C80,58 68,65 50,64 C35,63 22,58 25,45 Z',
    },
    {
      id: 'india', flag: 'images/countries/flag-india.svg', capital: { ms: 'New Delhi', en: 'New Delhi', ar: 'نيودلهي', zh: '新德里' },
      ms: 'India', en: 'India', ar: 'الهند', zh: '印度',
      map: 'M40,15 C50,20 60,30 58,45 C55,60 48,75 42,70 C35,60 32,40 35,25 C36,20 38,15 40,15 Z',
    },
    {
      id: 'south-korea', flag: 'images/countries/flag-south-korea.svg', capital: { ms: 'Seoul', en: 'Seoul', ar: 'سيول', zh: '首尔' },
      ms: 'Korea Selatan', en: 'South Korea', ar: 'كوريا الجنوبية', zh: '韩国',
      map: 'M50,25 C58,32 62,45 58,58 C54,66 46,64 44,55 C42,42 44,30 50,25 Z',
    },
    {
      id: 'thailand', flag: 'images/countries/flag-thailand.svg', capital: { ms: 'Bangkok', en: 'Bangkok', ar: 'بانكوك', zh: '曼谷' },
      ms: 'Thailand', en: 'Thailand', ar: 'تايلاند', zh: '泰国',
      map: 'M45,18 C52,25 55,40 53,58 C50,70 44,72 41,62 C38,45 40,28 45,18 Z',
    },
    {
      id: 'qatar', flag: 'images/countries/flag-qatar.svg', capital: { ms: 'Doha', en: 'Doha', ar: 'الدوحة', zh: '多哈' },
      ms: 'Qatar', en: 'Qatar', ar: 'قطر', zh: '卡塔尔',
      map: 'M48,30 C55,35 57,50 52,65 C48,70 44,65 44,52 C44,42 45,33 48,30 Z',
    },
    {
      id: 'brunei', flag: 'images/countries/flag-brunei.svg', capital: { ms: 'Bandar Seri Begawan', en: 'Bandar Seri Begawan', ar: 'بندر سري بكاوان', zh: '斯里巴加湾市' },
      ms: 'Brunei', en: 'Brunei', ar: 'بروناي', zh: '文莱',
      map: 'M42,42 C50,40 58,44 57,52 C55,58 46,58 43,52 C41,48 41,44 42,42 Z',
    },
    {
      id: 'palestine', flag: 'images/countries/flag-palestine.svg', capital: { ms: 'Jerusalem', en: 'Jerusalem', ar: 'القدس', zh: '耶路撒冷' },
      ms: 'Palestin', en: 'Palestine', ar: 'فلسطين', zh: '巴勒斯坦',
      map: 'M48,25 C53,32 55,45 52,62 C50,68 45,66 44,56 C43,42 44,30 48,25 Z',
    },
    {
      id: 'germany', flag: 'images/countries/flag-germany.svg', capital: { ms: 'Berlin', en: 'Berlin', ar: 'برلين', zh: '柏林' },
      ms: 'Jerman', en: 'Germany', ar: 'ألمانيا', zh: '德国',
      map: 'M40,20 C52,18 62,28 58,45 C55,58 48,68 42,64 C36,55 34,38 36,28 C37,24 38,21 40,20 Z',
    },
    {
      id: 'brazil', flag: 'images/countries/flag-brazil.svg', capital: { ms: 'Brasília', en: 'Brasília', ar: 'برازيليا', zh: '巴西利亚' },
      ms: 'Brazil', en: 'Brazil', ar: 'البرازيل', zh: '巴西',
      map: 'M35,25 C55,20 72,30 74,45 C75,60 60,72 45,68 C32,64 25,50 28,38 C29,31 31,27 35,25 Z',
    },
  ],
};

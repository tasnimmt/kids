// Language settings: parent picks active languages, stored in localStorage.
const LANGS = [
  { code: 'ms', name: 'Bahasa Melayu' },
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'zh', name: '中文' },
];

const LangState = {
  key: 'kidsite.langs',
  get() {
    try {
      const saved = JSON.parse(localStorage.getItem(this.key));
      if (Array.isArray(saved) && saved.length) return saved;
    } catch (e) {}
    return ['ms', 'en', 'ar', 'zh']; // default: all four
  },
  set(codes) {
    localStorage.setItem(this.key, JSON.stringify(codes));
  },
};

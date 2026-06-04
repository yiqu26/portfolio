export type ProjectLink = { label: string; url: string }

export type MediaItem =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'video'; src: string; poster: string; alt?: string; loop?: boolean }

export type Frame = 'phone' | 'browser' | 'bare'

export type Project = {
  name: string
  year: string
  tagline: string
  frame: Frame
  url?: string
  media: MediaItem[]
  highlights: string[]
  stack: string[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    name: 'Trail Guide',
    year: '2026',
    tagline: '台灣步道資訊平台 — 搜尋、互動地圖、評論系統、PWA',
    frame: 'phone',
    url: 'trail.ngo-management-hub.com',
    media: [
      { type: 'image', src: '/projects/trail-home.png', alt: '首頁：探索台灣山林與熱門步道' },
      { type: 'image', src: '/projects/trail-1.png', alt: '步道搜尋頁與熱門關鍵字' },
      { type: 'image', src: '/projects/trail-2.png', alt: '搜尋結果列表與步道卡片' },
      { type: 'image', src: '/projects/trail-3.png', alt: '步道詳情頁與路線資訊' },
    ],
    highlights: [
      '從 2021 年 GoHiking 專案全面重構，前後端重寫',
      '步道搜尋／篩選、GPS 附近步道、Leaflet + OpenStreetMap 互動地圖',
      '評論系統：Cloudinary 圖片上傳、點讚、編輯／刪除、全螢幕 Lightbox',
      'PWA 離線緩存、深色模式、Google OAuth 登入',
    ],
    stack: ['React 19', 'TypeScript', 'ASP.NET Core 8', 'PostgreSQL', 'JWT', 'Leaflet'],
    links: [
      { label: 'Live', url: 'https://trail.ngo-management-hub.com/' },
      { label: 'GitHub', url: 'https://github.com/yiqu26/Trail-Guide' },
    ],
  },
  {
    name: 'NGO Management System',
    year: '2026',
    tagline: '非營利組織管理平台 — 員工後台 + 公眾前台，共用一套 API',
    frame: 'browser',
    url: 'ngo-management-hub.com',
    media: [
      { type: 'video', src: '/projects/ngo.mp4', poster: '/projects/ngo-home.png', alt: '公眾前台首頁操作示範' },
      { type: 'image', src: '/projects/ngo-purchase.png', alt: '物資認購頁面' },
      { type: 'image', src: '/projects/ngo-activity.png', alt: '活動報名總覽' },
    ],
    highlights: [
      '雙前端架構：React SPA 員工後台 + ASP.NET MVC SSR 公眾前台，共用 ASP.NET Core 9 API',
      'AI 三功能、OpenAI／Azure 雙 provider 切換：GPT-4o-mini 文案、DALL·E 3 封面、Whisper 語音轉文字',
      'ECPay 綠界金流：SHA-256 CheckMacValue 雙向驗證，回調確認後才扣庫存',
      '安全性：BCrypt 密碼雜湊（漸進遷移）、JWT Claims 取代 hardcoded ID',
    ],
    stack: ['ASP.NET Core 9', 'React 18', 'ASP.NET MVC', 'SQL Server', 'OpenAI', 'ECPay'],
    links: [
      { label: '前台', url: 'https://ngo-management-hub.com' },
      { label: '後台', url: 'https://admin.ngo-management-hub.com' },
      { label: 'GitHub', url: 'https://github.com/yiqu26/NGO-Admin-System' },
    ],
  },
  {
    name: 'Hokkori',
    year: '2026',
    tagline: '手作串珠手鏈品牌展示站 — 溫暖日系視覺，導流蝦皮',
    frame: 'bare',
    url: 'hokkori.pages.dev',
    media: [
      {
        type: 'video',
        src: '/projects/hokkori-intro.mp4',
        poster: '/projects/hokkori-poster.png',
        alt: 'Hokkori 品牌展示站開場動畫',
        loop: false,
      },
    ],
    highlights: [
      'Next.js + Tailwind + GSAP 打造的品牌展示網站',
      '溫暖療癒的日系視覺風格與捲動動畫',
      '作品集瀏覽 + 客製化說明，導流至蝦皮購物',
    ],
    stack: ['Next.js', 'Tailwind CSS', 'GSAP'],
    links: [{ label: 'Live', url: 'https://hokkori.pages.dev/' }],
  },
]

export const CONTACT_EMAIL = 'lanlin1999123@gmail.com'
export const GITHUB_URL = 'https://github.com/yiqu26'

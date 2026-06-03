export type Project = {
  name: string
  desc: string
  tags: string[]
  link?: string
  github?: string
  status?: 'live' | 'wip'
}

export const projects: Project[] = [
  {
    name: 'Trail Guide',
    desc: '台灣步道導覽平台。步道搜尋、GPS 附近推薦、評論系統、PWA 支援。',
    tags: ['React 19', 'TypeScript', 'ASP.NET Core', 'PostgreSQL'],
    link: 'https://trail-guide-eight.vercel.app',
    github: 'https://github.com/yiqu26/Trail-Guide',
    status: 'live',
  },
  {
    name: 'NGO Management System',
    desc: '非政府組織後台管理系統。活動管理、個案追蹤、物資分配、AI 優化功能。',
    tags: ['C#', 'ASP.NET Core', 'React', 'SQL Server', 'Docker'],
    github: 'https://github.com/yiqu26/NGO-Admin-System',
    status: 'live',
  },
  {
    name: 'Hokkori',
    desc: '手作串珠手鏈品牌展示網站。溫暖療癒的日系風格，導流蝦皮購物。',
    tags: ['Next.js', 'Tailwind CSS', 'GSAP'],
    link: 'https://hokkori.pages.dev/',
    status: 'live',
  },
]

export const CONTACT_EMAIL = 'lanlin1999123@gmail.com'
export const GITHUB_URL = 'https://github.com/yiqu26'

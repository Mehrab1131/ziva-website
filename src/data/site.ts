export interface Channel {
  id: string;
  title: string;
  description: string;
  /** Leave empty until the channel username is final. */
  url: string;
}

export const site = {
  name: "زیوا",
  latinName: "Ziva",
  tagline: "آموزش برای فهمیدن، نه فقط به خاطر سپردن.",
  description:
    "زیوا یک مجموعهٔ آموزشی با تمرکز بر آموزش عمیق و مفهومی زیست‌شناسی و علوم تجربی است. هدف ما، ایجاد درکی واقعی از پدیده‌های زنده و پرورش تفکر علمی در یادگیری است.",
  contactEmail: "hello@zivabio.ir",
  channels: [
    {
      id: "high-school-biology",
      title: "زیست‌شناسی دبیرستان",
      description: "مطالب تخصصی زیست‌شناسی دبیرستان و مسیرهای آموزشی زیوا.",
      url: "",
    },
    {
      id: "grade-7",
      title: "علوم هفتم",
      description: "کانال تخصصی علوم هفتم برای آموزش علوم و پیگیری مطالب زیوا.",
      url: "",
    },
    {
      id: "grade-8",
      title: "علوم هشتم",
      description: "کانال تخصصی علوم هشتم برای آموزش علوم و پیگیری مطالب زیوا.",
      url: "",
    },
    {
      id: "grade-9",
      title: "علوم نهم",
      description: "کانال تخصصی علوم نهم برای آموزش علوم و پیگیری مطالب زیوا.",
      url: "",
    },
    {
      id: "announcements",
      title: "اطلاع‌رسانی و برنامه‌ها",
      description: "آخرین اطلاعیه‌ها و برنامه‌های آموزشی زیوا.",
      url: "",
    },
  ] satisfies Channel[],
};

export const navItems = [
  { label: "خانه", href: "/" },
  { label: "درباره زیوا", href: "/about/" },
  { label: "آموزش‌ها", href: "/education/" },
  { label: "دوره‌ها", href: "/courses/" },
  { label: "منابع", href: "/resources/" },
  { label: "مقالات", href: "/articles/" },
  { label: "ارتباط", href: "/contact/" },
];

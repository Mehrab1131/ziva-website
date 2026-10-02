# Ziva Website

وب‌سایت رسمی «زیوا»؛ یک سایت استاتیک، RTL و performance-first با Astro، با تمرکز بر آموزش زیست‌شناسی و علوم تجربی.

## معماری

```text
Astro (static) → npm run build → dist/ → GitHub Pages → zivabio.ir
```

اصول اصلی پروژه:

- Static-first و بدون JavaScript سمت کلاینت
- فونت Vazirmatn به‌صورت local (بدون CDN خارجی)
- CSS دست‌نویس و سبک که داخل هر صفحه inline می‌شود
- HTML معنایی و دسترس‌پذیر
- مقالات با Markdown و Astro Content Collections
- SEO پایه: canonical، Open Graph، Twitter Card، Schema.org، robots.txt و sitemap

## اجرا روی سیستم شما

Node.js نسخهٔ ۲۲.۱۲ یا بالاتر لازم است.

```bash
npm ci            # نصب وابستگی‌ها
npm run dev       # سرور توسعه
npm run check     # بررسی TypeScript/Astro
npm run build     # ساخت خروجی در dist/
npm run preview   # مشاهدهٔ خروجی build
```

قبل از هر انتشار، `npm run check && npm run build && npm run preview` را اجرا و نتیجه را محلی بررسی کنید.

## ساختار

```text
src/
  components/   کامپوننت‌های قابل‌استفادهٔ مجدد
  content/      مقالات (Markdown)
  data/         اطلاعات سایت، منو و کانال‌ها (site.ts)
  layouts/      BaseLayout (head، header، footer)
  lib/          توابع کمکی (تاریخ، مرتب‌سازی مقالات)
  pages/        مسیرها، شامل 404
  styles/       global.css
public/         فونت‌ها، تصاویر، robots.txt، CNAME
```

## مقالات

هر مقاله یک فایل Markdown در `src/content/articles/` است و frontmatter آن باید با schema در `src/content.config.ts` هم‌خوان باشد.

## انتشار (GitHub Pages)

با هر push به شاخهٔ `main`، workflow در `.github/workflows/deploy.yml` پروژه را check و build می‌کند و روی GitHub Pages منتشر می‌کند. دامنهٔ سفارشی در `public/CNAME` تعریف شده است.

مراحل راه‌اندازی در تنظیمات مخزن:

1. Settings ← Pages ← Source: **GitHub Actions**
2. Custom domain: `zivabio.ir` و فعال‌کردن **Enforce HTTPS**
3. رکوردهای DNS دامنه طبق راهنمای GitHub برای Apex domain

## مجوز

کد پروژه تحت MIT License است. فونت Vazirmatn تابع مجوز خود پروژه است. محتوای آموزشی، نام تجاری و لوگوی «زیوا» تحت مجوز کد قرار نمی‌گیرند (جزئیات در `CONTENT-LICENSE.md`).

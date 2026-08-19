# Ziva Website

وب‌سایت رسمی «زیوا»؛ یک سایت استاتیک، RTL و performance-first با Astro، با تمرکز بر آموزش زیست‌شناسی و علوم تجربی.

## معماری پروژه

```text
Astro Static
    ↓
npm run build
    ↓
dist/
    ↓
Cloudflare Workers Static Assets
    ↓
zivabio.ir
```

اصول اصلی پروژه:

- Static-first
- Zero client-side JavaScript by default
- بدون SSR و بدون `@astrojs/cloudflare`
- بدون CDN خارجی برای assetهای اصلی
- فونت Vazirmatn به‌صورت local
- HTML معنایی و دسترس‌پذیر
- CSS دست‌نویس و سبک
- مقالات با Markdown و Astro Content Collections
- SEO پایه شامل canonical، Open Graph، Twitter Card، Schema.org، robots.txt و sitemap

## پیش‌نیاز

Node.js و npm نصب باشد. سپس:

```bash
npm ci
npm run dev
```

برای بررسی TypeScript/Astro:

```bash
npm run check
```

برای build تولیدی:

```bash
npm run build
```

خروجی در `dist/` ساخته می‌شود.

## مقالات آموزشی

مقالات در مسیر زیر قرار دارند:

```text
src/content/articles/
```

هر مقاله یک فایل Markdown است و frontmatter آن باید مطابق نمونه‌های موجود باشد.

فهرست مقالات:

```text
/articles/
```

مسیر هر مقاله بر اساس شناسه فایل ساخته می‌شود.

## فونت

فونت‌های Vazirmatn مورد استفاده سایت در مسیر زیر قرار دارند و در Repository نگهداری می‌شوند:

```text
public/fonts/
```

در صورت نیاز می‌توان آن‌ها را با `npm run fetch-fonts` از مخزن رسمی Vazirmatn دریافت کرد.

منبع رسمی: https://github.com/rastikerdar/vazirmatn

## SEO و assetهای عمومی

- `public/robots.txt` برای robots.txt
- `@astrojs/sitemap` برای تولید sitemap
- `public/images/og-image.png` برای Open Graph و Twitter Card
- `public/images/ziva-logo.png` برای favicon و apple-touch-icon
- metadata و Schema.org در `src/layouts/BaseLayout.astro`

## Cloudflare Workers

این پروژه به‌صورت Static روی Cloudflare Workers Static Assets منتشر می‌شود.

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Static asset directory: `dist`
- Wrangler configuration: `wrangler.jsonc`

برای تغییرات معمول، ابتدا build و check محلی انجام شود و سپس commit/push انجام شود. Deployment از طریق Cloudflare به‌صورت خودکار انجام می‌شود.

**این پروژه نباید صرفاً برای deployment به SSR یا Cloudflare adapter منتقل شود.**

## GitHub Actions

فایل workflow در:

```text
.github/workflows/deploy.yml
```

قرار دارد و در صورت استفاده از GitHub Actions برای انتشار، build و deployment را روی push به `main` انجام می‌دهد.

## شخصی‌سازی

اطلاعات عمومی سایت و لینک کانال‌ها در `src/data/site.ts` قرار دارد.

لوگو و آیکن تلگرام در `public/images/` قرار دارند.

## مجوز

کد پروژه تحت MIT License است. فونت Vazirmatn تابع مجوز خود پروژه است. محتوای آموزشی، نام تجاری و لوگوی «زیوا» تحت مجوز کد قرار نمی‌گیرند.

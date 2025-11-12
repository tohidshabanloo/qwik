# Qwik City Resume App ⚡️

A modern, SEO-optimized resume website built with Qwik and QwikCity, featuring RTL support for Persian/Farsi content.

- [Qwik Docs](https://qwik.dev/)
- [Discord](https://qwik.dev/chat)
- [Qwik GitHub](https://github.com/QwikDev/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

## Why Qwik vs React.js? / چرا Qwik به جای React.js؟

### English

#### **Performance Benefits**

1. **Zero JavaScript by Default**
   - Qwik ships **zero JavaScript** to the browser initially, loading code only when needed
   - React requires the entire framework to be downloaded and hydrated before interactivity
   - Result: **Faster initial page loads** and better Core Web Vitals scores

2. **Resumability**
   - Qwik applications are "resumable" - they can continue from where the server left off without re-executing code
   - React requires full hydration, re-executing all component logic on the client
   - Result: **Instant interactivity** without waiting for JavaScript to load

3. **Lazy Loading at Granular Level**
   - Qwik lazy-loads individual components and event handlers on-demand
   - React typically loads entire component trees even if not immediately needed
   - Result: **Smaller bundle sizes** and faster time-to-interactive

4. **Better SEO**
   - Qwik's resumability means better server-side rendering without hydration overhead
   - React's hydration can cause content shifts and slower initial render
   - Result: **Better search engine rankings** and improved user experience

5. **Progressive Enhancement**
   - Qwik works even with JavaScript disabled (for static content)
   - React requires JavaScript to function
   - Result: **More accessible** and resilient applications

#### **Developer Experience**

- **Similar Syntax**: Qwik uses JSX like React, making it easy to learn
- **TypeScript First**: Built with TypeScript from the ground up
- **Better Bundle Analysis**: Clear visibility into what code is loaded when

---

### فارسی

#### **مزایای عملکردی**

1. **بدون JavaScript به صورت پیش‌فرض**
   - Qwik در ابتدا **هیچ JavaScript** به مرورگر ارسال نمی‌کند و کد را فقط در صورت نیاز بارگذاری می‌کند
   - React نیاز دارد که کل فریمورک دانلود و هیدراته شود قبل از تعاملی شدن
   - نتیجه: **بارگذاری سریع‌تر صفحات** و امتیاز بهتر در Core Web Vitals

2. **قابلیت Resume (ادامه)**
   - برنامه‌های Qwik "قابل ادامه" هستند - می‌توانند از جایی که سرور متوقف شده ادامه دهند بدون اجرای مجدد کد
   - React نیاز به هیدراته کامل دارد و تمام منطق کامپوننت را در کلاینت دوباره اجرا می‌کند
   - نتیجه: **تعامل فوری** بدون انتظار برای بارگذاری JavaScript

3. **بارگذاری تنبل در سطح جزئی**
   - Qwik کامپوننت‌ها و هندلرهای رویداد را به صورت جداگانه و در صورت نیاز بارگذاری می‌کند
   - React معمولاً کل درخت کامپوننت‌ها را بارگذاری می‌کند حتی اگر فوراً نیاز نباشد
   - نتیجه: **اندازه باندل کوچک‌تر** و زمان تعامل سریع‌تر

4. **سئو بهتر**
   - قابلیت Resume در Qwik به معنای رندر سمت سرور بهتر بدون سربار هیدراته است
   - هیدراته React می‌تواند باعث جابجایی محتوا و رندر اولیه کندتر شود
   - نتیجه: **رتبه‌بندی بهتر در موتورهای جستجو** و تجربه کاربری بهبود یافته

5. **بهبود تدریجی**
   - Qwik حتی با غیرفعال بودن JavaScript کار می‌کند (برای محتوای استاتیک)
   - React نیاز به JavaScript برای عملکرد دارد
   - نتیجه: **دسترسی‌پذیری بیشتر** و برنامه‌های مقاوم‌تر

#### **تجربه توسعه‌دهنده**

- **سینتکس مشابه**: Qwik از JSX مانند React استفاده می‌کند که یادگیری را آسان می‌کند
- **اولویت TypeScript**: از ابتدا با TypeScript ساخته شده است
- **تحلیل باندل بهتر**: دید واضح‌تر از اینکه چه کدی چه زمانی بارگذاری می‌شود

---

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.dev/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.dev/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Features

- ✅ **RTL Support**: Full right-to-left layout for Persian/Farsi content
- ✅ **Vazirmatn Font**: Beautiful Persian typography
- ✅ **SEO Optimized**: Meta tags, Open Graph, structured data (JSON-LD), and sitemap
- ✅ **Responsive Design**: Works perfectly on all devices
- ✅ **Zero JavaScript by Default**: Fast initial load with Qwik's resumability

## Add Integrations and deployment

Use the `npm run qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/).

```shell
npm run qwik add # or `yarn qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```

## SEO Configuration

This project includes comprehensive SEO optimization:

- **Meta Tags**: Description, keywords, Open Graph, Twitter Cards
- **Structured Data**: JSON-LD schema for Person/Resume
- **Sitemap**: Available at `/sitemap.xml`
- **Robots.txt**: Configured for search engine crawlers
- **Canonical URLs**: Proper canonical link tags
- **Language Tags**: Proper hreflang attributes for Persian content

Make sure to update the canonical URL in `src/routes/index.tsx` and the sitemap URL in `public/robots.txt` with your actual domain before deploying.

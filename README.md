**OnlineQuranPak.com** is a [Next.js](https://nextjs.org) 16 project for an online Quran academy, using the App Router and Turbopack.

## Run the project

- **Install dependencies**

  ```bash
  npm install
  ```

- **Development server**

  ```bash
  npm run dev
  ```

  Then open `http://localhost:3000` in your browser.

- **Production build**

  ```bash
  npm run build
  npm start
  ```

## Routes

- **`/`**: Default home page (`app/page.tsx`).
- **`/home`**: Public home page (`app/(public-routes)/home/page.tsx`) composed from `HeroSection`.

## Metadata & SEO

- **Open Graph image**: `app/opengraph-image.tsx`
- **Twitter image**: `app/twitter-image.tsx`
- **Apple icon**: `app/apple-icon.tsx`
- **Sitemap**: `app/sitemap.ts`
- **Web App Manifest**: `app/manifest.ts`

All of these are implemented using Next.js metadata routes and will be used automatically by Next.js during build and at runtime.


import Image from "next/image";

export default function HeroSection({ submitted }: { submitted?: string }) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 text-center sm:gap-8 lg:gap-10">
        {submitted && (
          <div
            className={`mx-auto w-full max-w-md rounded-full px-4 py-2 text-xs font-medium sm:text-sm ${
              submitted === "1"
                ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-200 dark:ring-emerald-900/60"
                : "bg-red-50 text-red-800 ring-1 ring-red-100 dark:bg-red-950/40 dark:text-red-200 dark:ring-red-900/60"
            }`}
          >
            {submitted === "1"
              ? "Thank you! We have received your details and will contact you soon."
              : "Something went wrong while submitting the form. Please try again."}
          </div>
        )}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/assets/Academy-Logo-Final.svg"
            alt="Online Quran Pak logo"
            width={180}
            height={180}
            className="h-16 w-auto sm:h-20 lg:h-24"
            priority
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Online Quran Pak
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:mt-2 sm:text-4xl lg:text-5xl">
            We’re upgrading our website 🚀
          </h1>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 sm:text-base">
            We are currently upgrading Online Quran Pak to provide a better
            learning experience for our students. Our new website will be live
            soon.
          </p>
        </div>

        <div className="space-y-3 rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            For admissions &amp; classes
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            📞 WhatsApp:{" "}
            <a
              href="https://wa.me/923396260260"
              target="_blank"
              rel="noreferrer"
              title="Chat on WhatsApp"
              className="font-medium text-emerald-600 hover:underline"
            >
              +92 339 6260260
            </a>
            <br />
            ✉️ Email:{" "}
            <a
              href="mailto:onlinequranpakinfo@gmail.com"
              className="font-medium text-emerald-600 hover:underline"
            >
              onlinequranpakinfo@gmail.com
            </a>
          </p>
        </div>

        <div className="grid gap-4 rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Stay connected with us
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <li>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/onlinequranpak.official/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  @onlinequranpak.official
                </a>
              </li>
              <li>
                TikTok:{" "}
                <a
                  href="https://www.tiktok.com/@onlinequranpak.official"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  @onlinequranpak.official
                </a>
              </li>
              <li>
                Threads:{" "}
                <a
                  href="https://www.threads.com/@onlinequranpak.official"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  @onlinequranpak.official
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/company/online-quran-pak/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  Online Quran Pak
                </a>
              </li>
              <li>
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/onlinequranpak.official/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  @onlinequranpak.official
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-xl bg-zinc-50 p-4 text-left ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
            <div>
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Get 1 free trial class
              </h2>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
                Share a few details and we&apos;ll notify you when the new
                experience goes live and send you a free trial class offer.
              </p>
            </div>
            <form
              className="mt-4 space-y-2"
              action="/api/contact"
              method="post"
            >
              <div className="grid gap-2 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="h-10 rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="h-10 rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                />
              </div>
              <input
                type="text"
                name="course"
                placeholder="Course you are interested in"
                className="h-10 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
              />
              <div className="grid gap-2 sm:grid-cols-2">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile / WhatsApp"
                  className="h-10 rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="h-10 rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                />
              </div>
              <button
                type="submit"
                className="mt-1 h-10 w-full rounded-md bg-emerald-600 px-4 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Submit &amp; get free trial
              </button>
            </form>
          </div>
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          Online Quran Pak is currently undergoing improvements to serve you
          better. Our new website will launch soon.
        </p>
      </div>
    </section>
  );
}


import Image from "next/image";
import LeadForm from "./LeadForm";

export default function MaintenancePage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 text-center sm:gap-8 lg:gap-10">
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
            We are currently upgrading Online Quran Pak to provide a better learning experience
            for our students. Our new website will be live soon.
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

          <LeadForm />
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          Online Quran Pak is currently undergoing improvements to serve you better. Our new
          website will launch soon.
        </p>
      </div>
    </section>
  );
}

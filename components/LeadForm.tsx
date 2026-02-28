"use client";

import { useState } from "react";

const inputClass =
  "h-10 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      course: (form.elements.namedItem("course") as HTMLInputElement).value.trim(),
      mobile: (form.elements.namedItem("mobile") as HTMLInputElement).value.trim(),
      country: (form.elements.namedItem("country") as HTMLInputElement).value.trim(),
    };

    if (!data.email) {
      setStatus("error");
      setMessage("Email is required.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thank you! We have received your details and will contact you soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="flex flex-col justify-between rounded-xl bg-zinc-50 p-4 text-left ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
      <div>
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          Get 1 free trial class
        </h2>
        <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
          Share a few details and we&apos;ll notify you when the new experience goes live and
          send you a free trial class offer.
        </p>
      </div>
      <form className="mt-4 space-y-2" onSubmit={handleSubmit}>
        <div className="grid gap-2 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className={inputClass}
            disabled={status === "loading"}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className={inputClass}
            disabled={status === "loading"}
          />
        </div>
        <input
          type="text"
          name="course"
          placeholder="Course you are interested in"
          className={inputClass}
          disabled={status === "loading"}
        />
        <div className="grid gap-2 sm:grid-cols-2">
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile / WhatsApp"
            className={inputClass}
            disabled={status === "loading"}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className={inputClass}
            disabled={status === "loading"}
          />
        </div>
        {message && (
          <p
            className={`text-xs font-medium ${
              status === "success"
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {message}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-1 h-10 w-full rounded-md bg-emerald-600 px-4 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Submit & get free trial"}
        </button>
      </form>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Something went wrong
          </h2>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-4 rounded-md bg-black px-4 py-2 text-sm font-medium text-white dark:bg-zinc-50 dark:text-black"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}


export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}


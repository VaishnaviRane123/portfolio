import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="text-xs tracking-[0.2em] text-[#2563eb]">404</p>
      <h1 className="serif mt-5 text-6xl font-medium md:text-8xl">
        Not Found
      </h1>
      <p className="mt-5 text-[#666] dark:text-[#a1a1a1]">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-[#171717] px-6 py-3 text-sm text-white dark:bg-white dark:text-[#0a0a0a]"
      >
        Back to Home
      </Link>
    </main>
  );
}

"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="text-xs tracking-[0.2em] text-[#2563eb]">ERROR</p>
      <h1 className="serif mt-5 text-6xl font-medium">Something went wrong</h1>
      <p className="mt-5 text-sm" style={{ color: "var(--muted)" }}>
        {error.message}
      </p>
      <button
        onClick={reset}
        className="mt-10 rounded-full px-6 py-3 text-sm"
        style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
      >
        Try again
      </button>
    </div>
  );
}

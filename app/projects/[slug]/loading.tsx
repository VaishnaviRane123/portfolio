export default function Loading() {
  return (
    <div className="container-main py-12">
      <div className="h-6 w-40 animate-pulse rounded" style={{ backgroundColor: "var(--hover)" }} />
      <div className="mt-16 h-20 w-3/4 animate-pulse rounded" style={{ backgroundColor: "var(--hover)" }} />
      <div className="mt-8 h-5 w-1/2 animate-pulse rounded" style={{ backgroundColor: "var(--hover)" }} />
    </div>
  );
}

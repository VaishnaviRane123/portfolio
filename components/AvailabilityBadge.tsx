import { profile } from "@/data/profile";

export default function AvailabilityBadge() {
  if (!profile.available) return null;

  return (
    <div className="mb-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#666] dark:text-[#a1a1a1]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      Currently available for opportunities
    </div>
  );
}

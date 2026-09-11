interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="text-xs font-medium tracking-widest text-[#2563eb]">
        {number}
      </span>

      <h2 className="serif text-4xl font-medium md:text-5xl">{title}</h2>
    </div>
  );
}

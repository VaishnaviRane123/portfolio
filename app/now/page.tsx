import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Now",
  description: "What I'm currently working on.",
};

export default function NowPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <div className="container-main">
          <SectionHeading number="—" title="Now" />
          <p className="max-w-2xl text-base leading-8" style={{ color: "var(--muted)" }}>
            Last updated: {new Date().toLocaleDateString("en-IN", {
              month: "long", year: "numeric"
            })}
          </p>

          <div className="mt-12 space-y-8 max-w-2xl">
            <div>
              <h3 className="serif text-2xl">Learning</h3>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                <li>• Advanced Next.js patterns (RSC, streaming)</li>
                <li>• System design fundamentals</li>
                <li>• AWS cloud services</li>
              </ul>
            </div>

            <div>
              <h3 className="serif text-2xl">Building</h3>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                <li>• NovaBank — full-stack banking platform</li>
                <li>• Personal portfolio (this site)</li>
              </ul>
            </div>

            <div>
              <h3 className="serif text-2xl">Reading</h3>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                <li>• <em>Clean Code</em> by Robert C. Martin</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";
import { Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";

const WEB3FORMS_ACCESS_KEY = "8272975e-25bb-4331-887d-6587fb514bfe";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact — ${form.name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Submission failed.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please email me directly.");
    }
  };

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // on success:
  toast.success("Message sent!");

  return (
    <section id="contact" className="section section-border">
      <div className="container-main">
        <SectionHeading number="09" title="Contact" />

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p
              className="text-lg leading-8"
              style={{ color: "var(--foreground)" }}
            >
              I&apos;m open to internship and full-time opportunities. Feel free
              to reach out.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="block border-b pb-3 text-sm transition hover:opacity-70"
                style={{ borderColor: "var(--border)" }}
              >
                <span style={{ color: "var(--muted)" }}>Email</span>
                <p className="mt-1">{profile.email}</p>
                  <button onClick={copyEmail} className="text-xs">
                    {copied ? "✓ Copied" : "Copy"}
                  </button>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="block border-b pb-3 text-sm transition hover:opacity-70"
                style={{ borderColor: "var(--border)" }}
              >
                <span style={{ color: "var(--muted)" }}>Phone</span>
                <p className="mt-1">{profile.phone}</p>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b pb-3 text-sm transition hover:opacity-70"
                style={{ borderColor: "var(--border)" }}
              >
                <span style={{ color: "var(--muted)" }}>GitHub</span>
                <p className="mt-1">github.com/VaishnaviRane123</p>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b pb-3 text-sm transition hover:opacity-70"
                style={{ borderColor: "var(--border)" }}
              >
                <span style={{ color: "var(--muted)" }}>LinkedIn</span>
                <p className="mt-1">linkedin.com/in/vaishnavi-rane-ce</p>
              </a>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border bg-transparent px-4 py-3 text-sm outline-none transition"
              style={{ borderColor: "var(--border)" }}
            />

            <input
              type="email"
              required
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border bg-transparent px-4 py-3 text-sm outline-none transition"
              style={{ borderColor: "var(--border)" }}
            />

            <textarea
              required
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none border bg-transparent px-4 py-3 text-sm outline-none transition"
              style={{ borderColor: "var(--border)" }}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition disabled:opacity-60"
              style={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                <CheckCircle2 size={16} />
                Message sent! I&apos;ll reply to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                <XCircle size={16} />
                {errorMsg || `Something went wrong. Email me at ${profile.email}`}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

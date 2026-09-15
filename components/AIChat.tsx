"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "Tell me about NovaBank",
  "What is Vaishnavi's experience?",
  "What are her top skills?",
  "Is she open to opportunities?",
];

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();
      const reply =
        data.reply ||
        data.error ||
        "Sorry, I couldn't generate a response right now.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong. Please try again or use the contact form.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open AI assistant"
        className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all no-print ${
          open ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        style={{
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
        }}
      >
        <Sparkles size={22} />
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 flex w-[calc(100vw-48px)] max-w-[380px] flex-col overflow-hidden rounded-2xl border shadow-2xl no-print"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--background)",
            height: "min(560px, calc(100vh - 48px))",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between border-b px-4 py-3"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--card)",
            }}
          >
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#2563eb]" />
              <div>
                <p className="text-sm font-semibold">Ask AI About Me</p>
                <p
                  className="text-[10px]"
                  style={{ color: "var(--muted)" }}
                >
                  Powered by Gemini
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-full p-1 transition hover:opacity-70"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div>
                <p
                  className="mb-4 text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  Hi! 👋 I'm Vaishnavi's AI assistant. Ask me anything about
                  her projects, experience, or skills.
                </p>
                <div className="space-y-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="block w-full rounded-lg border px-3 py-2 text-left text-xs transition hover:opacity-70"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                    m.role === "user" ? "rounded-br-sm" : "rounded-bl-sm"
                  }`}
                  style={
                    m.role === "user"
                      ? {
                          backgroundColor: "var(--foreground)",
                          color: "var(--background)",
                        }
                      : {
                          backgroundColor: "var(--hover)",
                          color: "var(--foreground)",
                        }
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div
                  className="flex items-center gap-2 rounded-2xl rounded-bl-sm px-4 py-2 text-sm"
                  style={{ backgroundColor: "var(--hover)" }}
                >
                  <Loader2 size={14} className="animate-spin" />
                  <span style={{ color: "var(--muted)" }}>Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t p-3"
            style={{ borderColor: "var(--border)" }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={loading}
              className="flex-1 rounded-full border bg-transparent px-4 py-2 text-sm outline-none transition focus:opacity-100 disabled:opacity-50"
              style={{ borderColor: "var(--border)" }}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="flex h-9 w-9 items-center justify-center rounded-full transition disabled:opacity-40"
              style={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

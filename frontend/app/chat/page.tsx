"use client";

import AppShell from "../../components/AppShell";
import { useState } from "react";

export default function Chat() {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello. I'm MathSpace AI Tutor. Ask about a concept, formula, equation or application.",
    },
  ]);

  async function send() {
    if (!q.trim() || loading) return;

    const question = q;
    setQ("");
    setLoading(true);

    // Append user message immediately
    setMessages((m) => [...m, { role: "me", text: question }]);

    try {
      const r = await fetch("http://127.0.0.1:8000/api/ai/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, level: "Class 10" }),
      });

      if (!r.ok) {
        // Attempt to parse explicit JSON error message from FastAPI
        const errData = await r.json().catch(() => null);
        const detailMsg = errData?.detail || `Server status ${r.status}`;
        throw new Error(detailMsg);
      }

      const d = await r.json();

      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: d.answer || "The tutor could not answer this request.",
        },
      ]);
    } catch (err: any) {
      console.error("Chat error:", err);
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: `Error: ${err.message || "Backend unavailable"}. Ensure FastAPI is running on http://127.0.0.1:8000.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppShell>
      <main className="content">
        <div className="chat-layout">
          {/* Chat History Sidebar */}
          <aside className="history">
            <h3>CHAT HISTORY</h3>
            <div className="history-item active">New mathematics chat</div>
            <div className="history-item">Differentiation</div>
            <div className="history-item">Quadratic equations</div>
          </aside>

          {/* Chat Main Window */}
          <section className="chatbox">
            <div className="messages">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`bubble ${m.role === "ai" ? "ai" : "me"}`}
                >
                  {m.text}
                </div>
              ))}

              {/* Loading Indicator */}
              {loading && <div className="bubble ai thinking">Thinking...</div>}
            </div>

            {/* Message Input Box */}
            <div className="composer">
              <input
                type="text"
                value={q}
                disabled={loading}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask Anything"
              />
              <button
                className="solid"
                onClick={send}
                disabled={loading}
              >
                {loading ? "..." : "Ask →"}
              </button>
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}
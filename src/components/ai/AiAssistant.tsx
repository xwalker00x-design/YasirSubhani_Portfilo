import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  loadAiSettings,
  sendAiMessage,
  type ChatMessage,
} from "../../services/aiChat";
import { isAdminApp } from "../../utils/host";

const AiAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Yasir's AI assistant. Ask about projects, skills, experience, or how to get in touch.",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const settings = loadAiSettings();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  if (!settings.enabled && !isAdminApp()) return null;

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: ChatMessage = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setLoading(true);
    try {
      const history = next.filter(
        (m, i) => !(i === 0 && m.role === "assistant")
      );
      const reply = await sendAiMessage(history);
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: `Sorry, I couldn't respond. ${msg}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        type="button"
        aria-label="Open AI assistant"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed z-[60] w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-lg ${
          isAdminApp() ? "bottom-6 right-6 bg-indigo-600" : "bottom-24 right-6 bg-gradient-to-br from-[#915EFF] to-[#3b82f6]"
        }`}
      >
        AI
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed z-[60] w-[min(100vw-2rem,380px)] h-[min(70vh,520px)] rounded-2xl border border-white/10 bg-[#0a0a14]/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden ${
              isAdminApp() ? "bottom-24 right-6" : "bottom-40 right-6"
            }`}
          >
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold text-sm">Portfolio AI</p>
                <p className="text-secondary text-xs">Powered by OpenRouter</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white text-xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`text-sm rounded-xl px-3 py-2 max-w-[90%] ${
                    m.role === "user"
                      ? "ml-auto bg-[#915EFF]/30 text-white"
                      : "mr-auto bg-white/5 text-gray-200"
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <p className="text-secondary text-xs animate-pulse">Thinking…</p>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about Yasir's work…"
                className="flex-1 bg-black-100 text-white text-sm rounded-lg border border-gray-800 px-3 py-2 focus:border-[#915EFF] focus:outline-none"
              />
              <button
                type="button"
                onClick={send}
                disabled={loading}
                className="px-4 py-2 rounded-lg bg-[#915EFF] text-white text-sm font-medium disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiAssistant;

"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zM8.722 3.4687a4.9126 4.9126 0 0 1 8.56 0l1.107 1.918H14.075a7.4812 7.4812 0 0 0-6.48 3.744l-2.146 3.717-1.11-1.921a4.9125 4.9125 0 0 1 4.383-7.458zm10.749 6.2778a4.914 4.914 0 0 1 2.457 4.269A4.914 4.914 0 0 1 20.088 17.5h-2.214l-4.331-7.5H23.11l-3.638-6.302a4.9113 4.9113 0 0 1 1.748 6.048zm-8.834 10.784a4.9126 4.9126 0 0 1-8.56 0l-1.107-1.918h4.314a7.481 7.481 0 0 0 6.48-3.743l2.146-3.717 1.11 1.921a4.9125 4.9125 0 0 1-4.383 7.457zm-1.848-15.06h-5.9a4.9114 4.9114 0 0 1-1.749-6.048 4.9106 4.9106 0 0 1 6.634-1.78l3.639 2.102-2.146 3.717a7.49 7.49 0 0 0-1.879 4.343l1.401-2.334zM12 15.658a3.658 3.658 0 1 1 0-7.316 3.658 3.658 0 0 1 0 7.316z" />
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-blue-500">
    <path d="M12 24c-.11 0-.21-.03-.3-.1-.08-.06-.15-.14-.2-.23l-3.23-7.54-7.54-3.23c-.23-.1-.36-.33-.33-.58.02-.24.19-.44.43-.5l7.63-1.83 1.83-7.63c.06-.24.26-.41.5-.43.25-.03.48.1.58.33l3.23 7.54 7.54 3.23c.23.1.36.33.33.58-.02.24-.19.44-.43.5l-7.63 1.83-1.83 7.63c-.06.24-.26.41-.5.43-.03.01-.06.01-.08.01zm-3.04-8.79l2.58 6.03 1.5-6.24 6.24-1.5-6.03-2.58-1.5 6.24-2.79.05z" />
    <path d="M11 13H5V7h6v6z" fill="url(#gemini-grad)" />
    <defs>
      <linearGradient id="gemini-grad" x1="5" y1="7" x2="11" y2="13" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4285F4" />
        <stop offset="1" stopColor="#EA4335" />
      </linearGradient>
    </defs>
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#D97757]">
    {/* Anthropic / Claude Star Approximation */}
    <path d="M12 0l2.5 8.5H24l-7.5 5.2 2.7 8.3L12 16.2 6.8 22l2.7-8.3L2 8.5h9.5L12 0z" />
  </svg>
);

const PerplexityIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-emerald-600 dark:text-emerald-400">
    {/* A generic grid interlocking minimal pattern to simulate Perplexity */}
    <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
    <rect x="2" y="2" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const NotebookLMIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-600 dark:text-yellow-400">
    <path d="M19 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 19V5h2v14H7zm12 0H11V5h8v14zm-6-8h4v-2h-4v2zm0-4h4V5h-4v2z" />
    <path d="M3 5h2v14H3z" />
  </svg>
);

const GrokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-black dark:text-white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LoveArtIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-pink-500">
    {/* Stylized Heart with brush/stars */}
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    <circle cx="16" cy="7" r="1.5" fill="white" />
    <path d="M15 5h2v2h-2z" fill="white" />
  </svg>
);

const AntigravityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-indigo-500 drop-shadow-md">
    {/* Clean stylized 'G' combined with arrows pointing outwards representing Antigravity */}
    <path d="M21 12A9 9 0 1 1 12 3c2.4 0 4.6 1 6.1 2.6" />
    <path d="M12 12h8" />
    <path d="M12 12L12 3" />
    <path d="M10 2L14 6L10 10" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const AI_TOOLS = [
  { id: 1, name: "Gemini", description: "Research, ideation and content references", icon: <GeminiIcon /> },
  { id: 2, name: "ChatGPT", description: "Copywriting, brainstorming and prompt crafting", icon: <ChatGPTIcon /> },
  { id: 3, name: "Claude", description: "Problem solving and creative feedback", icon: <ClaudeIcon /> },
  { id: 4, name: "Google Antigravity", description: "Building and managing my portfolio website", icon: <AntigravityIcon /> },
  { id: 5, name: "NotebookLM", description: "Organizing research and project notes", icon: <NotebookLMIcon /> },
  { id: 6, name: "Perplexity", description: "Quick fact checking and web research", icon: <PerplexityIcon /> },
  { id: 7, name: "Grok", description: "Trend analysis and creative exploration", icon: <GrokIcon /> },
  { id: 8, name: "LoveArt", description: "AI image generation for visual concepts", icon: <LoveArtIcon /> },
];

export default function AIToolkit() {
  return (
    <section id="ai-toolkit" className="relative z-10 bg-gray-50 transition-colors duration-300 dark:bg-[#121212] px-8 py-20 text-gray-900 dark:text-white md:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="mb-6 text-3xl font-bold md:text-5xl">AI Toolkit & Creative Stack</h3>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {AI_TOOLS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="group relative flex flex-col justify-start overflow-hidden rounded-xl border border-cyan-500/30 bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-gray-800 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] dark:bg-white/5 dark:hover:bg-white/10"
            >
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
                  {item.name}
                </h4>
                <p className="text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

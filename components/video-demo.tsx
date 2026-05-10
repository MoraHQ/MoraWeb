"use client";

import { useState } from "react";

export default function VideoDemo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative py-24 px-6 overflow-hidden section-light">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4F6EF7] font-semibold mb-4">
            See it live
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-5 leading-tight">
            Watch it happen
          </h2>
          <p className="text-[#6B7280] text-[1.05rem] max-w-md mx-auto text-balance leading-relaxed">
            Voice to confirmed purchase in under two minutes. Real product, real transaction.
          </p>
        </div>

        {/* Cinematic video frame */}
        <div
          className="relative group cursor-pointer"
          onClick={() => setPlaying(true)}
          role="button"
          tabIndex={0}
          aria-label="Play Mora demo video"
          onKeyDown={(e) => e.key === "Enter" && setPlaying(true)}
        >
          {/* Main frame shell */}
          <div
            className="relative rounded-[18px] overflow-hidden border border-gray-200"
            style={{
              boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {/* App chrome - macOS-style title bar */}
            <div
              className="flex items-center gap-0 px-5 py-3 border-b"
              style={{
                background: "linear-gradient(180deg, rgba(16,20,38,0.98) 0%, rgba(10,14,28,0.98) 100%)",
                borderColor: "rgba(99,102,241,0.12)",
              }}
            >
              {/* Traffic lights */}
              <div className="flex items-center gap-2 mr-5">
                <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.3)" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.3)" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#28C840", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.3)" }} />
              </div>

              {/* Address bar */}
              <div
                className="flex-1 h-[26px] rounded-md flex items-center gap-2 px-3 max-w-xs mx-auto"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Lock icon */}
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" className="opacity-40">
                  <rect x="1" y="4" width="7" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M3 4V3a1.5 1.5 0 013 0v1" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <span className="text-[10px] text-white/40 font-mono tracking-tight">mora.ai</span>
              </div>

              {/* Right side spacer */}
              <div className="w-[52px]" />
            </div>

            {/* Video thumbnail area — dark bg is correct for a product demo window */}
            <div
              className="relative aspect-video flex flex-col items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #0A0E20 0%, #0D1228 40%, #080C1C 100%)",
              }}
            >
              {/* Subtle grid lines */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
                aria-hidden
              />

              {/* Radial vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(6,10,24,0.8) 100%)",
                }}
                aria-hidden
              />

              {/* Decorative waveform */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none" aria-hidden>
                <svg width="640" height="110" viewBox="0 0 640 110" fill="none" preserveAspectRatio="xMidYMid meet">
                  {[...Array(42)].map((_, i) => {
                    const heights = [18,30,50,68,88,78,58,42,28,48,72,92,82,62,38,22,42,68,98,78,52,32,58,88,72,48,28,52,78,62,42,32,58,82,68,48,28,42,62,38,25,45];
                    const h = heights[i] ?? 38;
                    return (
                      <rect
                        key={i}
                        x={i * 15.5 + 4}
                        y={(110 - h) / 2}
                        width={5}
                        height={h}
                        rx={2.5}
                        fill="url(#waveGrad)"
                        opacity={0.5 + (i % 4) * 0.15}
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#818CF8" />
                      <stop offset="100%" stopColor="#4F6EF7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Play button + label */}
              <div className="relative z-10 flex flex-col items-center gap-7">
                {/* Play ring + button */}
                <div className="relative">
                  {/* Outer pulse ring */}
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-500 ${playing ? "opacity-0" : "opacity-100 group-hover:scale-125 group-hover:opacity-0"}`}
                    style={{
                      background: "rgba(79,110,247,0.15)",
                      transform: "scale(1.5)",
                      filter: "blur(2px)",
                    }}
                    aria-hidden
                  />
                  <div
                    className={`relative w-[72px] h-[72px] rounded-full flex items-center justify-center transition-all duration-300 ${
                      playing ? "scale-90 opacity-40" : "group-hover:scale-110"
                    }`}
                    style={{
                      background: "#4F6EF7",
                      boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 0 32px rgba(79,110,247,0.45), 0 0 64px rgba(79,110,247,0.2)",
                    }}
                  >
                    {playing ? (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                        <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                      </svg>
                    ) : (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="white" className="ml-1">
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-white font-semibold text-base tracking-tight">
                    See a full purchase in under 2 minutes
                  </p>
                  <p className="text-white/40 text-sm mt-1.5 font-mono text-xs tracking-wide">
                    Voice input to confirmed order
                  </p>
                </div>
              </div>

              {/* Bottom-right badge */}
              <div className="absolute bottom-5 right-5 flex items-center gap-1.5 badge">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" strokeLinecap="round" />
                </svg>
                <span>1:32</span>
              </div>

              {/* Bottom-left live indicator */}
              <div className="absolute bottom-5 left-5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.8)" }} />
                <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">Real product</span>
              </div>
            </div>

            {/* Bottom chrome bar */}
            <div
              className="flex items-center justify-between px-5 py-2 border-t"
              style={{
                background: "rgba(10,14,28,0.98)",
                borderColor: "rgba(99,102,241,0.1)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4F6EF7]/60" />
                <span className="text-[10px] text-white/30 font-mono">demo.mp4</span>
              </div>
              <span className="text-[10px] text-white/25 font-mono">HD 1080p</span>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-[#6B7280]/60 text-xs mt-5 tracking-wide">
          No signup required to watch. Real product. Real payment flow.
        </p>
      </div>
    </section>
  );
}

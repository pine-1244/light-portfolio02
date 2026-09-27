import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <video
        ref={ref}
        src="/video/hero-robot.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="aspect-video w-full object-cover"
      />
    </div>
  );
}

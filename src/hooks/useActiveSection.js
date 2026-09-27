import { useEffect, useState } from "react";

export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return;

    let ticking = false;

    const computeActive = () => {
      ticking = false;
      const offset = window.innerHeight * 0.3;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= offset) {
          current = el.id;
        }
      }
      const lastEl = elements[elements.length - 1];
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (nearBottom) current = lastEl.id;

      setActiveId((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(computeActive);
      }
    };

    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids]);

  return activeId;
}

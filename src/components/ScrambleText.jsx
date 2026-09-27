import { useRef } from "react";
import { useInView } from "framer-motion";
import { useScramble } from "../hooks/useScramble";

export default function ScrambleText({ text, as: Tag = "span", className = "", speed = 1 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const output = useScramble(text, { trigger: inView, speed });

  return (
    <Tag ref={ref} className={className}>
      <span aria-hidden="true">{output}</span>
      <span className="sr-only">{text}</span>
    </Tag>
  );
}

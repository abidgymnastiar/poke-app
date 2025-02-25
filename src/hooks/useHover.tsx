import { useState } from "react";

export function useHover(): [
  boolean,
  { onMouseEnter: () => void; onMouseLeave: () => void }
] {
  const [isHovered, setIsHovered] = useState(false);

  const eventHandlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return [isHovered, eventHandlers];
}

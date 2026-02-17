import { useState, useCallback } from "react";

/**
 * Reusable wrapper that adds a cursor-following light blue glow on hover.
 * Use across the project for cards, list items, or any clickable/hoverable surface.
 *
 * @param {React.ReactNode} children - Content to wrap
 * @param {string} [className] - Classes for the outer wrapper (card styles, layout)
 * @param {string} [glowColor] - CSS color for glow center (default: light blue)
 * @param {number} [glowOpacity] - Center opacity 0–1 (default: 0.25)
 * @param {number} [glowRadius] - Gradient radius % (default: 70)
 */
function CursorGlowCard({
  children,
  className = "",
  glowColor = "147, 197, 253",
  glowOpacity = 0.25,
  glowRadius = 70,
  ...rest
}) {
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursor({ x, y });
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const glowStyle = {
    background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(${glowColor}, ${glowOpacity}) 0%, rgba(${glowColor}, ${glowOpacity * 0.5}) 35%, transparent ${glowRadius}%)`,
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity duration-200"
          style={glowStyle}
          aria-hidden
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default CursorGlowCard;

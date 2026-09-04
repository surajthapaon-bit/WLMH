export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden mix-blend-overlay"
    >
      <svg className="h-full w-full opacity-[0.055]" xmlns="http://www.w3.org/2000/svg">
        <filter id="archive-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#archive-grain)" />
      </svg>
    </div>
  );
}

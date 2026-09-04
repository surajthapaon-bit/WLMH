type LakeSceneProps = {
  className?: string;
};

export function LakeScene({ className }: LakeSceneProps) {
  return (
    <div aria-hidden="true" className={className} style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 420"
        preserveAspectRatio="xMidYMax slice"
        className="block h-full w-full"
        role="img"
      >
        <title>Night lake under a quiet moon</title>
        <defs>
          <linearGradient id="lake-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0c0d0b" stopOpacity="0" />
            <stop offset="28%" stopColor="#10120f" />
            <stop offset="58%" stopColor="#151a18" />
            <stop offset="100%" stopColor="#0f1518" />
          </linearGradient>
          <linearGradient id="lake-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a2830" />
            <stop offset="40%" stopColor="#121c22" />
            <stop offset="100%" stopColor="#0c0d0b" />
          </linearGradient>
          <radialGradient id="lake-moon-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e7deca" stopOpacity="0.5" />
            <stop offset="46%" stopColor="#7d9aaa" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#7d9aaa" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lake-reflection" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4c8ae" stopOpacity="0.3" />
            <stop offset="45%" stopColor="#7d9aaa" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#7d9aaa" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lake-sheen-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7d9aaa" stopOpacity="0" />
            <stop offset="50%" stopColor="#7d9aaa" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#7d9aaa" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="1440" height="420" fill="url(#lake-sky)" />

        <g className="stars">
          <circle className="star" cx="180" cy="48" r="0.9" fill="#e7deca" opacity="0.55" />
          <circle className="star" cx="310" cy="92" r="0.7" fill="#e7deca" opacity="0.35" />
          <circle className="star" cx="470" cy="36" r="0.8" fill="#e7deca" opacity="0.45" />
          <circle className="star" cx="690" cy="70" r="0.6" fill="#e7deca" opacity="0.28" />
          <circle className="star" cx="860" cy="40" r="0.9" fill="#e7deca" opacity="0.5" />
          <circle className="star" cx="1218" cy="52" r="0.8" fill="#e7deca" opacity="0.4" />
          <circle className="star" cx="90" cy="110" r="0.5" fill="#e7deca" opacity="0.22" />
          <circle className="star" cx="560" cy="100" r="0.5" fill="#e7deca" opacity="0.2" />
          <circle className="star" cx="1320" cy="88" r="0.55" fill="#e7deca" opacity="0.25" />
        </g>

        <ellipse cx="1120" cy="148" rx="58" ry="58" fill="url(#lake-moon-glow)" />
        <circle cx="1120" cy="148" r="12" fill="#e7deca" opacity="0.92" />
        <circle cx="1115" cy="144" r="4" fill="#d4c8ae" opacity="0.28" />

        <path
          d="M0 188 C 240 176, 420 204, 640 190 C 860 176, 1100 206, 1440 184 L 1440 420 L 0 420 Z"
          fill="url(#lake-water)"
        />

        <rect x="1084" y="188" width="72" height="140" fill="url(#lake-reflection)" opacity="0.9" />

        <g fill="none" stroke="#7d9aaa" strokeLinecap="round">
          <path d="M0 198 H1440" strokeOpacity="0.2" strokeWidth="0.9" />
          <path d="M0 220 H1440" strokeOpacity="0.13" strokeWidth="0.7" />
          <path d="M0 246 H1440" strokeOpacity="0.1" strokeWidth="0.6" />
          <path d="M0 276 H1440" strokeOpacity="0.08" strokeWidth="0.6" />
          <path d="M0 312 H1440" strokeOpacity="0.06" strokeWidth="0.5" />
          <path d="M0 352 H1440" strokeOpacity="0.045" strokeWidth="0.5" />
          <path d="M80 210 H340" strokeOpacity="0.16" strokeWidth="0.7" />
          <path d="M980 216 H1300" strokeOpacity="0.15" strokeWidth="0.7" />
        </g>

        <rect
          className="lake-sheen"
          x="0"
          y="196"
          width="1440"
          height="86"
          fill="url(#lake-sheen-grad)"
        />
      </svg>
      <style>{`
        .lake-sheen {
          transform-box: fill-box;
          transform-origin: center;
          animation: lake-sheen 14s ease-in-out infinite;
        }
        .star:nth-child(odd) { animation: star-dim 7s ease-in-out infinite; }
        .star:nth-child(even) { animation: star-dim 9s ease-in-out infinite reverse; }
        @keyframes lake-sheen {
          0%, 100% { opacity: 0.35; transform: translateX(-6%); }
          50% { opacity: 0.8; transform: translateX(8%); }
        }
        @keyframes star-dim {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.7; }
        }
        @media (prefers-reduced-motion: reduce) {
          .lake-sheen, .star { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

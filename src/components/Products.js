import React from "react";

function FanSVG({ color = "#0f0f0f" }) {
  return (
    <svg viewBox="0 0 120 120" role="img" aria-label="Вентилятор"
         style={{ width: "100%", height: "100%" }}>
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e9e9e9" />
        </radialGradient>
      </defs>

      {/* диск */}
      <circle cx="60" cy="60" r="56" fill="url(#g)" stroke="#ddd" />

      {/* лопасти */}
      <g transform="translate(60 60)" fill={color}>
        <path d="M0,-6 L0,-40 C0,-48 8,-52 16,-50 C24,-48 28,-40 24,-32 L10,-6 Z" />
        <path d="M6,0 L40,0 C48,0 52,8 50,16 C48,24 40,28 32,24 L6,10 Z" />
        <path d="M0,6 L0,40 C0,48 -8,52 -16,50 C-24,48 -28,40 -24,32 L-10,6 Z" />
        <path d="M-6,0 L-40,0 C-48,0 -52,-8 -50,-16 C-48,-24 -40,-28 -32,-24 L-6,-10 Z" />
      </g>

      {/* ступица */}
      <circle cx="60" cy="60" r="10" fill="#fff" stroke={color} strokeWidth="3" />
    </svg>
  );
}

const palette = ["#111", "#1a3d7c", "#0b7d6c", "#7c1a1a", "#5a3cae", "#a05a00"];

export default function Products() {
  const items = new Array(9).fill(null);

  return (
    <section id="prod" className="section">
      <div className="container">
        <h2>Продукция</h2>
        <div className="grid cols-3">
          {items.map((_, i) => (
            <figure className="product-card" key={i} style={{ aspectRatio: "1/1" }}>
              <div style={{ width: "100%", height: "100%", padding: 12 }}>
                <FanSVG color={palette[i % palette.length]} />
              </div>
              {}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

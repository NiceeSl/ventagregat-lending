import React, { useState } from "react";

export default function Header(){
  const base = process.env.PUBLIC_URL || "";
  const [src, setSrc] = useState(`${base}/logo.png`);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* Логотип крупный — без текста рядом */}
        <a href="#top" className="brand" aria-label="Вентагрегат">
          <img
            src={src}
            alt="Логотип"
            style={{
              display: "block",
              height: "70px",
              width: "auto",
              objectFit: "contain"
            }}
            onError={() => {
              if (!src.endsWith("/logo.jpg")) setSrc(`${base}/logo.jpg`);
            }}
          />
        </a>

        <nav className="nav">
          <a href="#hero">Производство</a>
          <a href="#prod">Продукция</a>
          <a href="#catalog">Прайс-листы</a>
          <a href="#contact">Контакты</a>
          <a href="tel:+71111111111">☎ (111) 111-1111</a>
        </nav>
      </div>
    </header>
  );
}

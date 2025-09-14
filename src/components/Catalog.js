import React, { useState } from "react";

export default function Catalog(){
  const base = process.env.PUBLIC_URL || "";
  const [cover, setCover] = useState(`${base}/catalog-cover.jpg`);

  return (
    <section id="catalog" className="section" style={{paddingTop:32}}>
      <div className="container">
        <h2>Каталог продукции</h2>

        <div className="grid cols-2" style={{alignItems:"start"}}>
          {}
          <div className="catalog__box">
            <img
              src={cover}
              alt="Каталог (обложка)"
              style={{width:"100%", borderRadius:12, aspectRatio:"4/3", objectFit:"cover"}}
              onError={() => {
                if (!cover.endsWith("/catalog-cover.png")) {
                  setCover(`${base}/catalog-cover.png`);
                }
              }}
            />
          </div>

          {}
          <div className="catalog__box" style={{display:"grid",placeItems:"center",color:"#999"}}>
            <div style={{textAlign:"center"}}>
              <p style={{marginTop:0}}>Здесь можно разместить PDF/ссылки на прайс-листы.</p>
              <a className="btn" href="#" onClick={(e)=>e.preventDefault()}>Скачать прайс</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

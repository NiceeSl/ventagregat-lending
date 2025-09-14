import React from "react";

export default function Office(){
  const mapSrc =
    "https://yandex.ru/map-widget/v1/?um=constructor%3A7c2b3ab98f36a9a9a1b9e2b7a86b7d2f3af2a39f5a2ed7f1f2bd8e65a0e8b9f7&source=constructor";

  return (
    <section className="section" style={{paddingTop:32}}>
      <div className="container">
        <h2 className="office__title">Наш офис</h2>

        <div className="grid cols-2" style={{alignItems:"start"}}>
          <div>
            <div style={{position:"relative", width:"100%", border:"1px solid #eee", borderRadius:14, overflow:"hidden"}}>
              {/* Соотношение сторон 4:3 */}
              <div style={{paddingTop:"75%"}} />
              <iframe
                title="Карта офиса"
                src={mapSrc}
                style={{position:"absolute", inset:0, width:"100%", height:"100%", border:0}}
                allowFullScreen
              />
            </div>
          </div>

          <div className="office__info">
            <div>Ventagregat@yandex.ru</div>
            <div>+7 111 111 11 11</div>
            <div>г. Москва, ул. Душинская 18К1</div>
          </div>
        </div>
      </div>
    </section>
  );
}

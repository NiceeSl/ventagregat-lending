import React,{useState} from "react";

export default function Contact(){
  const [tel,setTel] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(`Спасибо! Мы перезвоним на номер: ${tel}`);
    setTel("");
  };

  return (
    <section id="contact" className="section" style={{paddingTop:16}}>
      <div className="container">
        <h2 className="contact__title" style={{textAlign:"left"}}>Связаться с нами</h2>

        <div className="contact__grid">
          <form onSubmit={submit} style={{display:"flex",gap:12,maxWidth:520}}>
            <input className="input" type="tel" placeholder="Телефон *" value={tel}
                   onChange={(e)=>setTel(e.target.value)} required />
            <button className="btn" type="submit">Отправить</button>
          </form>

          <p style={{margin:0,color:"var(--muted)"}}>
            Готовы сделать первый шаг? Оставьте свой номер телефона. Наш консультант свяжется с вами.
          </p>
        </div>
      </div>
    </section>
  );
}

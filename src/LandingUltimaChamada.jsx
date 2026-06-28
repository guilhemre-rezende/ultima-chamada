import React, { useState, useEffect, useRef } from "react";

/**
 * Landing page — "O Caso da Última Chamada"
 * Direção: dossiê criminal arquivado, à meia-luz. Escuridão cor de tinta,
 * ouro de arquivo, vermelho de carimbo; evidências em papel creme sobre o escuro.
 * Assinatura: o registro da ligação das 23h47 contra a necropsia riscada.
 *
 * Sem dependências externas além de fontes do Google. Cores via CSS no <style>.
 */

const EVIDENCIAS = [
  { tag: "E-03", t: "Necropsia", d: "A hora da morte — a âncora de todo o caso." },
  { tag: "E-04", t: "Registro de chamadas", d: "A ligação que não devia existir." },
  { tag: "E-05", t: "Log de Wi-Fi", d: "O álibi que desmorona à meia-noite." },
  { tag: "E-09", t: "Diário da vítima", d: "“Os números do Rui não batem.”" },
  { tag: "06", t: "Depoimentos", d: "Seis transcrições. Algumas mentem melhor que outras." },
  { tag: "17", t: "Evidências catalogadas", d: "Verdadeiras, falsas e parciais — separe você." },
  { tag: "M-01", t: "Mapa da cena", d: "Onde cada um disse estar. E onde o corpo caiu." },
  { tag: "ANX", t: "Prints, extratos, recibos", d: "O ruído onde se esconde o sinal." },
  { tag: "★", t: "Solução lacrada", d: "Com dicas em 3 níveis. Abra só quando fechar a teoria." },
];

const PASSOS = [
  { n: "01", t: "Receba o dossiê", d: "PDF completo, pronto para imprimir ou jogar direto na tela." },
  { n: "02", t: "Investigue", d: "Leia os documentos, cruze horários e separe a verdade da mentira plantada." },
  { n: "03", t: "Acuse e confira", d: "Preencha a acusação, abra a seção lacrada e some seus pontos." },
];

const DEPOIMENTOS = [
  { q: "Jurei que era a ex-esposa. A necropsia me humilhou.", a: "A. — resolveu em dois dias" },
  { q: "Joguei com a família no domingo. Acusamos três inocentes antes de cair a ficha.", a: "grupo de cinco" },
  { q: "Achei que ia ser fácil. A ligação das 23h47 não saía da minha cabeça.", a: "T. — patente Experiente" },
];

const FAQ = [
  { q: "Preciso comprar mais alguma coisa?", a: "Não. Todo o caso — documentos, evidências, solução e pontuação — está dentro do PDF." },
  { q: "Dá para jogar sozinho?", a: "Sim. Funciona de 1 a 6 pessoas: solo, em dupla ou como uma noite de detetives em grupo." },
  { q: "Imprimo ou jogo na tela?", a: "Os dois. Foi diagramado para ler bem no papel e no celular/computador." },
  { q: "Tem cenas pesadas?", a: "Não. É um mistério de dedução, 100% fictício e sem gore. A tensão está na lógica, não no sangue." },
  { q: "E se eu travar?", a: "Há um sistema de dicas em três níveis — do empurrão sutil até o nome do culpado." },
  { q: "A solução vem junto?", a: "Vem, numa seção lacrada no fim. Só abra quando tiver coragem de cravar sua acusação." },
];

export default function LandingUltimaChamada() {
  const [openFaq, setOpenFaq] = useState(0);
  const rootRef = useRef(null);

  // Scroll reveal
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = rootRef.current ? rootRef.current.querySelectorAll(".reveal") : [];
    if (reduce) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = rootRef.current.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="dch-root" ref={rootRef}>
      <style>{CSS}</style>

      {/* NAV */}
      <nav className="dch-nav">
        <span className="dch-caseno">DOSSIÊ Nº 0447‑VE</span>
        <span className="dch-classif">CONFIDENCIAL</span>
        <a href="#receber" onClick={scrollTo("#receber")} className="dch-navcta">
          Receber o dossiê
        </a>
      </nav>

      {/* HERO */}
      <header className="dch-hero">
        <div className="dch-grain" aria-hidden="true" />
        <Blood variant={1} style={{ top: "-40px", right: "-60px", width: "360px", height: "360px", transform: "rotate(18deg)" }} />
        <Blood variant={2} style={{ bottom: "-50px", left: "-70px", width: "300px", height: "300px", opacity: 0.12, transform: "rotate(-12deg)" }} />
        <div className="dch-hero-inner">
          <p className="dch-eyebrow dch-fade d1">
            Arquivo criminal · Unidade de casos reabertos
          </p>

          <h1 className="dch-title">
            <span className="dch-fade d2">O CASO DA</span>
            <span className="dch-fade d3">ÚLTIMA CHAMADA</span>
          </h1>

          <p className="dch-sub dch-fade d4">
            Uma morte. Uma ligação que não devia existir.
          </p>

          {/* Assinatura: a evidência da ligação impossível */}
          <div className="dch-callcard dch-fade d5" role="img" aria-label="Registro de chamada às 23h47 contra a necropsia que aponta óbito até 23h">
            <div className="dch-callcard-tab">REGISTRO DE CHAMADAS · APARELHO DA VÍTIMA</div>
            <div className="dch-callrow">
              <span className="dch-time">23:47</span>
              <span className="dch-callmeta">
                <span className="dch-dot" /> chamada efetuada · duração 0:08
              </span>
            </div>
            <div className="dch-contra">
              <span className="dch-strike">NECROPSIA — ÓBITO REGISTRADO ATÉ 23:00</span>
            </div>
            <p className="dch-verdict">Mortos não telefonam.</p>
          </div>

          <div className="dch-cta-row dch-fade d6">
            <a href="#receber" onClick={scrollTo("#receber")} className="dch-btn dch-btn-primary">
              Receber o dossiê
            </a>
            <a href="#dentro" onClick={scrollTo("#dentro")} className="dch-btn dch-btn-ghost">
              Ver o que há dentro ↓
            </a>
          </div>
        </div>
      </header>

      {/* PREMISSA */}
      <section className="dch-sec dch-premissa">
        <Blood variant={2} style={{ top: "20px", right: "-40px", width: "260px", height: "260px", opacity: 0.1, transform: "rotate(8deg)" }} />
        <div className="dch-wrap reveal">
          <p className="dch-eyebrow gold">A premissa</p>
          <h2 className="dch-h2">Arquivaram como acidente.<br />Você vai reabrir.</h2>
          <p className="dch-lead">
            Otávio Marin foi encontrado morto ao pé de uma escada, numa pousada perdida na
            serra. A primeira investigação foi rápida e conveniente — concluíram{" "}
            <Redact>queda acidental</Redact> e fecharam a pasta.
          </p>
          <p className="dch-lead">
            Só que o laudo diz que ele morreu <em>antes das onze</em>. E o celular dele fez uma
            ligação às <strong className="dch-red">23h47</strong>. Alguém telefonou por um morto —
            e essa pessoa jurava estar a quilômetros dali.
          </p>
          <blockquote className="dch-pull">“a última chamada não fecha”</blockquote>
        </div>
      </section>

      {/* DENTRO DO ENVELOPE */}
      <section className="dch-sec dch-dentro" id="dentro">
        <Blood variant={1} style={{ bottom: "40px", left: "-50px", width: "240px", height: "240px", opacity: 0.09, transform: "rotate(-20deg)" }} />
        <div className="dch-wrap">
          <div className="dch-sec-head reveal">
            <p className="dch-eyebrow gold">Dentro do envelope</p>
            <h2 className="dch-h2">31 páginas de provas.<br />Nem todas verdadeiras.</h2>
            <p className="dch-note">
              Um dossiê completo cai nas suas mãos. Algumas peças apontam o culpado. Outras foram
              plantadas para te enganar — e o jogo é separar uma coisa da outra.
            </p>
          </div>

          <div className="dch-grid">
            {EVIDENCIAS.map((ev, i) => (
              <article className="dch-evi reveal" style={{ transitionDelay: `${(i % 3) * 70}ms` }} key={ev.tag + i}>
                <span className="dch-evi-tag">{ev.tag}</span>
                <h3 className="dch-evi-t">{ev.t}</h3>
                <p className="dch-evi-d">{ev.d}</p>
                <span className="dch-pin" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FICHA TÉCNICA */}
      <section className="dch-sec dch-ficha">
        <div className="dch-wrap reveal">
          <div className="dch-ficha-grid">
            <Spec k="Jogadores" v="1 a 6" />
            <Spec k="Duração" v="60–120 min" />
            <Spec k="Faixa" v="14+" />
            <Spec k="Dificuldade" v="Intermediária" />
            <Spec k="Modo" v="Solo · dupla · grupo" />
            <Spec k="Formato" v="PDF — papel ou tela" />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="dch-sec dch-passos">
        <div className="dch-wrap">
          <div className="dch-sec-head reveal">
            <p className="dch-eyebrow gold">Como funciona</p>
            <h2 className="dch-h2">Da pasta fechada à acusação final.</h2>
          </div>
          <ol className="dch-passos-list">
            {PASSOS.map((p) => (
              <li className="dch-passo reveal" key={p.n}>
                <span className="dch-passo-n">{p.n}</span>
                <div>
                  <h3 className="dch-passo-t">{p.t}</h3>
                  <p className="dch-passo-d">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="dch-sec dch-depo">
        <div className="dch-wrap">
          <div className="dch-sec-head reveal">
            <p className="dch-eyebrow gold">Relatos de quem investigou</p>
            <h2 className="dch-h2">Eles também acharam que seria fácil.</h2>
          </div>
          <div className="dch-depo-grid">
            {DEPOIMENTOS.map((d, i) => (
              <figure className="dch-depo-card reveal" style={{ transitionDelay: `${i * 80}ms` }} key={i}>
                <blockquote>“{d.q}”</blockquote>
                <figcaption>{d.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="dch-sec dch-faq">
        <div className="dch-wrap dch-faq-wrap">
          <div className="dch-sec-head reveal">
            <p className="dch-eyebrow gold">Antes de aceitar o caso</p>
            <h2 className="dch-h2">Perguntas frequentes</h2>
          </div>
          <ul className="dch-faq-list reveal">
            {FAQ.map((f, i) => {
              const open = openFaq === i;
              return (
                <li className={"dch-faq-item" + (open ? " open" : "")} key={i}>
                  <button
                    className="dch-faq-q"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <span className="dch-faq-mark" aria-hidden="true">{open ? "–" : "+"}</span>
                  </button>
                  <div className="dch-faq-a" style={{ maxHeight: open ? "240px" : "0px" }}>
                    <p>{f.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="dch-sec dch-final" id="receber">
        <div className="dch-grain" aria-hidden="true" />
        <Blood variant={1} style={{ top: "-30px", left: "2%", width: "320px", height: "320px", opacity: 0.2, transform: "rotate(-8deg)" }} />
        <Blood variant={2} style={{ bottom: "-40px", right: "0%", width: "340px", height: "340px", opacity: 0.18, transform: "rotate(14deg)" }} />
        <div className="dch-wrap dch-final-inner reveal">
          <span className="dch-stamp">REABERTO</span>
          <h2 className="dch-final-h">O caso está na sua mesa.</h2>
          <p className="dch-final-sub">Reabra. Investigue. Prove o impossível.</p>

          <div className="dch-price">
            {/* Ajuste o valor e o link do seu checkout aqui */}
            <span className="dch-price-val">R$ 11,99</span>
            <span className="dch-price-cap">PDF imediato · pagamento único</span>
          </div>

          <a href="https://pay.kiwify.com.br/1jsA2x1" target="_blank" rel="noopener noreferrer" className="dch-btn dch-btn-primary dch-btn-lg">
            Receber o dossiê
          </a>
          <p className="dch-fiction">
            Caso 100% fictício. Personagens, locais e documentos são invenção.
            Qualquer semelhança com fatos reais é coincidência.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="dch-footer">
        <div className="dch-wrap dch-footer-inner">
          <div>
            <p className="dch-foot-title">O Caso da Última Chamada</p>
            <p className="dch-foot-brand">
              um produto <span className="dch-linka">Linka<span className="dch-linka-dot" /></span>
            </p>
          </div>
          <div className="dch-social">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="TikTok">TikTok</a>
            <a href="#" aria-label="WhatsApp">WhatsApp</a>
          </div>
        </div>
        <p className="dch-foot-fine">DOSSIÊ Nº 0447‑VE · CONFIDENCIAL · © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

function Spec({ k, v }) {
  return (
    <div className="dch-spec">
      <span className="dch-spec-k">{k}</span>
      <span className="dch-spec-v">{v}</span>
    </div>
  );
}

function Redact({ children }) {
  return (
    <span className="dch-redact" tabIndex={0}>
      <span className="dch-redact-bar" aria-hidden="true" />
      <span className="dch-redact-txt">{children}</span>
    </span>
  );
}

/* Mancha de sangue decorativa (SVG). variant 1|2, posição via props. */
function Blood({ variant = 1, style, className = "" }) {
  return (
    <span className={"dch-blood " + className} style={style} aria-hidden="true">
      <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
        {variant === 1 ? (
          <g fill="currentColor">
            <path d="M122 26c20 1 33 17 38 38 6 1 12-3 19 1 9 5 7 17 13 23 9 9 4 24-7 27-3 13-19 20-31 14-8 13-29 15-39 4-4 7-15 7-19 0-15 1-27-11-22-25-13-3-19-19-10-29-7-12 0-28 14-30 1-19 16-34 35-33z" />
            <ellipse cx="90" cy="158" rx="5" ry="17" />
            <ellipse cx="148" cy="166" rx="4" ry="13" />
            <ellipse cx="118" cy="182" rx="3.5" ry="11" />
            <circle cx="80" cy="196" r="5" />
            <circle cx="150" cy="192" r="4" />
            <circle cx="38" cy="64" r="7" />
            <circle cx="202" cy="52" r="5" />
            <circle cx="214" cy="118" r="4.5" />
            <circle cx="28" cy="138" r="4" />
            <circle cx="64" cy="28" r="3.5" />
            <circle cx="190" cy="186" r="6" />
            <circle cx="20" cy="100" r="3" />
          </g>
        ) : (
          <g fill="currentColor">
            <path d="M96 30c16-6 36 2 41 20 9-2 20-3 26 7 6 9-1 19 4 27 7 12-2 27-16 27-3 12-17 19-29 13-10 11-30 8-35-7-15 1-26-13-19-27-12-7-12-26 1-32-5-15 6-31 22-31 1-9 2-18 4-17z" />
            <ellipse cx="74" cy="150" rx="5" ry="18" />
            <ellipse cx="132" cy="158" rx="4" ry="13" />
            <circle cx="66" cy="190" r="5" />
            <circle cx="140" cy="186" r="4.5" />
            <circle cx="200" cy="70" r="6" />
            <circle cx="206" cy="140" r="4" />
            <circle cx="34" cy="58" r="5" />
            <circle cx="24" cy="120" r="3.5" />
            <circle cx="176" cy="36" r="4" />
            <circle cx="188" cy="196" r="5" />
          </g>
        )}
      </svg>
    </span>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,500&family=Special+Elite&family=Spectral:ital,wght@0,300;0,400;0,500;1,400&display=swap');

.dch-root{
  --ink:#0d0b08;
  --ink2:#080604;
  --panel:#14110d;
  --paper:#e9e0cd;
  --paper2:#f3ecda;
  --gold:#c9a24a;
  --gold-dim:#8d7536;
  --red:#b0291c;
  --red-hot:#d2402e;
  --txt:#d9cdb4;
  --txt-dim:#a99c7e;
  --line:#3a3122;

  background:var(--ink);
  color:var(--txt);
  font-family:'Spectral',Georgia,serif;
  font-weight:300;
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}
.dch-root *{box-sizing:border-box;}
.dch-root ::selection{background:var(--red);color:#f3ecda;}

.dch-wrap{max-width:1080px;margin:0 auto;padding:0 28px;position:relative;z-index:2;}

/* ---------- manchas de sangue ---------- */
.dch-blood{
  position:absolute;z-index:1;pointer-events:none;
  color:#9e2417;opacity:.16;
  width:300px;height:300px;line-height:0;
}
.dch-blood svg{width:100%;height:100%;display:block;}

/* ---------- tipografia utilitária ---------- */
.dch-eyebrow{
  font-family:'Special Elite',monospace;
  font-size:11px;letter-spacing:.32em;text-transform:uppercase;
  color:var(--txt-dim);margin:0 0 18px;
}
.dch-eyebrow.gold{color:var(--gold);}
.dch-h2{
  font-family:'Playfair Display',serif;font-weight:700;
  font-size:clamp(28px,5vw,46px);line-height:1.08;
  color:var(--paper);margin:0 0 22px;letter-spacing:.5px;
}
.dch-red{color:var(--red-hot);}

/* ---------- NAV ---------- */
.dch-nav{
  position:sticky;top:0;z-index:30;
  display:flex;align-items:center;gap:16px;
  padding:13px 28px;
  background:rgba(8,6,4,.82);
  backdrop-filter:blur(8px);
  border-bottom:1px solid var(--line);
  font-family:'Special Elite',monospace;
}
.dch-caseno{font-size:11px;letter-spacing:.2em;color:var(--gold);}
.dch-classif{
  font-size:9.5px;letter-spacing:.25em;color:var(--red-hot);
  border:1px solid var(--red);padding:2px 8px;border-radius:2px;
}
.dch-navcta{
  margin-left:auto;font-size:11px;letter-spacing:.12em;text-transform:uppercase;
  color:var(--paper);text-decoration:none;
  border-bottom:1px solid var(--gold-dim);padding-bottom:2px;
  transition:color .25s,border-color .25s;
}
.dch-navcta:hover{color:var(--gold);border-color:var(--gold);}

/* ---------- grão / atmosfera ---------- */
.dch-grain{
  position:absolute;inset:0;pointer-events:none;z-index:0;
  background:
    radial-gradient(120% 80% at 50% -10%, rgba(176,41,28,.16), rgba(0,0,0,0) 55%),
    radial-gradient(140% 120% at 50% 120%, rgba(0,0,0,.6), rgba(0,0,0,0) 60%);
  mix-blend-mode:screen;opacity:.9;
}

/* ---------- HERO ---------- */
.dch-hero{
  position:relative;overflow:hidden;
  padding:84px 28px 92px;
  text-align:center;
  background:
    radial-gradient(100% 70% at 50% 0%, #1b150d 0%, var(--ink) 60%),
    var(--ink);
  border-bottom:1px solid var(--line);
}
.dch-hero-inner{position:relative;z-index:2;max-width:760px;margin:0 auto;}
.dch-title{
  font-family:'Playfair Display',serif;font-weight:900;
  font-size:clamp(38px,8.5vw,82px);line-height:.98;letter-spacing:1px;
  margin:6px 0 0;color:var(--paper);
  text-shadow:0 2px 0 rgba(0,0,0,.5);
}
.dch-title span{display:block;}
.dch-sub{
  font-family:'Spectral',serif;font-style:italic;font-weight:400;
  font-size:clamp(15px,2.4vw,20px);color:var(--gold);
  margin:18px 0 0;
}

/* call card — assinatura */
.dch-callcard{
  position:relative;
  max-width:430px;margin:38px auto 0;
  background:linear-gradient(180deg,#15110b,#100d08);
  border:1px solid var(--line);
  border-top:2px solid var(--gold-dim);
  border-radius:3px;
  padding:18px 20px 20px;
  text-align:left;
  box-shadow:0 24px 60px -28px rgba(0,0,0,.9), inset 0 1px 0 rgba(201,162,74,.08);
}
.dch-callcard-tab{
  font-family:'Special Elite',monospace;font-size:9.5px;letter-spacing:.18em;
  color:var(--txt-dim);text-transform:uppercase;margin-bottom:14px;
}
.dch-callrow{display:flex;align-items:baseline;gap:16px;flex-wrap:wrap;}
.dch-time{
  font-family:'Special Elite',monospace;font-size:46px;line-height:1;
  color:var(--red-hot);
  text-shadow:0 0 18px rgba(210,64,46,.55);
  animation:dch-pulse 2.6s ease-in-out infinite;
}
.dch-callmeta{font-family:'Special Elite',monospace;font-size:11px;color:var(--txt);letter-spacing:.05em;}
.dch-dot{
  display:inline-block;width:7px;height:7px;border-radius:50%;
  background:var(--red-hot);margin-right:6px;vertical-align:middle;
  box-shadow:0 0 8px var(--red-hot);
}
.dch-contra{margin-top:14px;padding-top:12px;border-top:1px dashed var(--line);}
.dch-strike{
  font-family:'Special Elite',monospace;font-size:11px;letter-spacing:.06em;
  color:var(--txt-dim);position:relative;display:inline-block;
}
.dch-strike::after{
  content:"";position:absolute;left:-2px;right:-2px;top:50%;height:1.5px;
  background:var(--red);transform:rotate(-1.5deg);
}
.dch-verdict{
  font-family:'Playfair Display',serif;font-style:italic;font-weight:500;
  font-size:18px;color:var(--paper);margin:14px 0 0;
}

/* CTAs */
.dch-cta-row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:34px;}
.dch-btn{
  display:inline-block;font-family:'Special Elite',monospace;
  font-size:13px;letter-spacing:.1em;text-transform:uppercase;
  text-decoration:none;cursor:pointer;border-radius:2px;
  padding:14px 26px;transition:transform .2s, background .25s, color .25s, border-color .25s, box-shadow .25s;
}
.dch-btn-primary{
  background:var(--red);color:#f6eed9;
  border:1px solid var(--red-hot);
  box-shadow:0 14px 36px -16px rgba(176,41,28,.8);
}
.dch-btn-primary:hover{background:var(--red-hot);transform:translateY(-2px);}
.dch-btn-ghost{
  background:transparent;color:var(--txt);
  border:1px solid var(--line);
}
.dch-btn-ghost:hover{border-color:var(--gold-dim);color:var(--gold);transform:translateY(-2px);}
.dch-btn-lg{padding:17px 40px;font-size:14px;}

/* ---------- seções base ---------- */
.dch-sec{position:relative;padding:88px 0;border-bottom:1px solid var(--line);overflow:hidden;}
.dch-sec-head{max-width:640px;margin:0 0 44px;}
.dch-note,.dch-lead{font-size:clamp(15px,2.1vw,18px);color:var(--txt);}
.dch-lead{margin:0 0 16px;max-width:640px;}
.dch-lead em{font-style:italic;color:var(--paper);}
.dch-lead strong{font-weight:500;}
.dch-note{color:var(--txt-dim);}

/* tarja de censura */
.dch-redact{position:relative;display:inline-block;cursor:help;outline:none;}
.dch-redact-txt{
  color:var(--paper);opacity:0;transition:opacity .3s;
  font-style:italic;
}
.dch-redact-bar{
  position:absolute;inset:-1px -3px;background:#000;border-radius:1px;
  transition:opacity .3s;box-shadow:0 1px 0 rgba(255,255,255,.06);
}
.dch-redact:hover .dch-redact-txt,.dch-redact:focus .dch-redact-txt{opacity:1;}
.dch-redact:hover .dch-redact-bar,.dch-redact:focus .dch-redact-bar{opacity:0;}

.dch-pull{
  font-family:'Playfair Display',serif;font-style:italic;font-weight:500;
  font-size:clamp(22px,4vw,34px);color:var(--gold);
  margin:34px 0 0;padding:0 0 0 22px;border-left:3px solid var(--red);
}

/* ---------- grid de evidências ---------- */
.dch-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.dch-evi{
  position:relative;
  background:linear-gradient(170deg,var(--paper2),var(--paper));
  color:#211b11;
  border:1px solid #c8b78f;
  border-radius:2px;
  padding:22px 20px 20px;
  box-shadow:0 18px 40px -26px rgba(0,0,0,.85);
  transition:transform .28s ease, box-shadow .28s ease;
}
.dch-evi:nth-child(3n+1){transform:rotate(-.5deg);}
.dch-evi:nth-child(3n){transform:rotate(.5deg);}
.dch-evi:hover{transform:translateY(-5px) rotate(0deg);box-shadow:0 26px 52px -24px rgba(0,0,0,.95);}
.dch-evi-tag{
  font-family:'Special Elite',monospace;font-size:10px;letter-spacing:.12em;
  color:#fff;background:var(--red);padding:3px 9px;border-radius:2px;
  display:inline-block;margin-bottom:12px;
}
.dch-evi-t{
  font-family:'Playfair Display',serif;font-weight:700;font-size:19px;
  margin:0 0 7px;color:#1a150d;line-height:1.15;
}
.dch-evi-d{font-size:13.5px;line-height:1.5;color:#5a4f37;margin:0;}
.dch-pin{
  position:absolute;top:-7px;left:50%;transform:translateX(-50%);
  width:13px;height:13px;border-radius:50%;
  background:radial-gradient(circle at 35% 30%, #e7705f, var(--red) 60%, #5e120c);
  box-shadow:0 3px 6px rgba(0,0,0,.6);
}

/* ---------- ficha técnica ---------- */
.dch-ficha{background:var(--ink2);padding:54px 0;}
.dch-ficha-grid{
  display:grid;grid-template-columns:repeat(6,1fr);
  border:1px solid var(--line);border-radius:3px;overflow:hidden;
}
.dch-spec{
  display:flex;flex-direction:column;gap:7px;align-items:center;text-align:center;
  padding:24px 12px;border-right:1px solid var(--line);
}
.dch-spec:last-child{border-right:none;}
.dch-spec-k{font-family:'Special Elite',monospace;font-size:9.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--txt-dim);}
.dch-spec-v{font-family:'Playfair Display',serif;font-size:18px;color:var(--gold);font-weight:500;}

/* ---------- passos ---------- */
.dch-passos-list{list-style:none;margin:0;padding:0;display:grid;gap:4px;}
.dch-passo{
  display:flex;gap:24px;align-items:flex-start;
  padding:26px 0;border-top:1px solid var(--line);
}
.dch-passo:first-child{border-top:none;}
.dch-passo-n{
  font-family:'Special Elite',monospace;font-size:34px;color:var(--gold-dim);
  line-height:1;min-width:62px;
}
.dch-passo-t{font-family:'Playfair Display',serif;font-weight:700;font-size:22px;color:var(--paper);margin:0 0 6px;}
.dch-passo-d{margin:0;color:var(--txt-dim);font-size:15.5px;max-width:560px;}

/* ---------- depoimentos ---------- */
.dch-depo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.dch-depo-card{
  background:linear-gradient(180deg,#15110b,var(--panel));
  border:1px solid var(--line);border-left:2px solid var(--red);
  border-radius:3px;padding:24px 22px;margin:0;
}
.dch-depo-card blockquote{
  font-family:'Spectral',serif;font-style:italic;font-size:16px;
  color:var(--paper);margin:0 0 16px;line-height:1.5;
}
.dch-depo-card figcaption{
  font-family:'Special Elite',monospace;font-size:11px;letter-spacing:.08em;
  color:var(--gold);text-transform:uppercase;
}

/* ---------- FAQ ---------- */
.dch-faq-wrap{max-width:760px;}
.dch-faq-list{list-style:none;margin:0;padding:0;}
.dch-faq-item{border-top:1px solid var(--line);}
.dch-faq-item:last-child{border-bottom:1px solid var(--line);}
.dch-faq-q{
  width:100%;display:flex;justify-content:space-between;gap:16px;align-items:center;
  background:none;border:none;cursor:pointer;text-align:left;
  padding:22px 2px;color:var(--paper);
  font-family:'Playfair Display',serif;font-weight:500;font-size:clamp(16px,2.3vw,19px);
}
.dch-faq-q:hover{color:var(--gold);}
.dch-faq-mark{font-family:'Special Elite',monospace;color:var(--red-hot);font-size:22px;line-height:1;}
.dch-faq-a{overflow:hidden;transition:max-height .35s ease;}
.dch-faq-a p{margin:0 0 22px;color:var(--txt-dim);font-size:15.5px;max-width:660px;}

/* ---------- CTA final ---------- */
.dch-final{
  position:relative;overflow:hidden;text-align:center;
  padding:96px 0;border-bottom:none;
  background:radial-gradient(110% 80% at 50% 0%, #1a140c, var(--ink2) 65%);
}
.dch-final-inner{position:relative;z-index:2;max-width:620px;}
.dch-stamp{
  display:inline-block;font-family:'Special Elite',monospace;
  font-size:12px;letter-spacing:.3em;color:var(--red-hot);
  border:2px solid var(--red);padding:6px 16px;border-radius:3px;
  transform:rotate(-4deg);opacity:.85;margin-bottom:26px;
}
.dch-final-h{
  font-family:'Playfair Display',serif;font-weight:900;
  font-size:clamp(30px,6vw,52px);color:var(--paper);margin:0 0 14px;line-height:1.05;
}
.dch-final-sub{font-family:'Spectral',serif;font-style:italic;font-size:18px;color:var(--gold);margin:0 0 34px;}
.dch-price{display:flex;flex-direction:column;align-items:center;gap:4px;margin-bottom:26px;}
.dch-price-val{font-family:'Playfair Display',serif;font-weight:700;font-size:42px;color:var(--paper);}
.dch-price-cap{font-family:'Special Elite',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--txt-dim);}
.dch-fiction{font-family:'Special Elite',monospace;font-size:10px;letter-spacing:.08em;color:#6f6147;margin:30px auto 0;max-width:440px;line-height:1.6;text-transform:uppercase;}

/* ---------- FOOTER ---------- */
.dch-footer{background:var(--ink2);padding:42px 0 30px;}
.dch-footer-inner{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap;}
.dch-foot-title{font-family:'Playfair Display',serif;font-weight:700;font-size:20px;color:var(--paper);margin:0 0 4px;}
.dch-foot-brand{font-family:'Special Elite',monospace;font-size:11px;letter-spacing:.1em;color:var(--txt-dim);margin:0;text-transform:uppercase;}
.dch-linka{color:var(--paper);position:relative;}
.dch-linka-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#2ecc71;margin-left:4px;}
.dch-social{display:flex;gap:20px;}
.dch-social a{font-family:'Special Elite',monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--txt-dim);text-decoration:none;transition:color .25s;}
.dch-social a:hover{color:var(--gold);}
.dch-foot-fine{font-family:'Special Elite',monospace;font-size:9.5px;letter-spacing:.2em;color:#5a4e38;text-align:center;margin:36px 0 0;}

/* ---------- animações ---------- */
@keyframes dch-pulse{0%,100%{text-shadow:0 0 18px rgba(210,64,46,.55);}50%{text-shadow:0 0 30px rgba(210,64,46,.9);}}
.dch-fade{opacity:0;transform:translateY(18px);animation:dch-in .9s cubic-bezier(.2,.7,.2,1) forwards;}
.dch-fade.d1{animation-delay:.05s}.dch-fade.d2{animation-delay:.18s}.dch-fade.d3{animation-delay:.3s}
.dch-fade.d4{animation-delay:.46s}.dch-fade.d5{animation-delay:.62s}.dch-fade.d6{animation-delay:.82s}
@keyframes dch-in{to{opacity:1;transform:none;}}
.reveal{opacity:0;transform:translateY(24px);transition:opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}

/* foco acessível */
.dch-root a:focus-visible,.dch-root button:focus-visible{outline:2px solid var(--gold);outline-offset:3px;border-radius:2px;}

/* ---------- responsivo ---------- */
@media(max-width:860px){
  .dch-grid,.dch-depo-grid{grid-template-columns:1fr 1fr;}
  .dch-ficha-grid{grid-template-columns:repeat(3,1fr);}
  .dch-spec:nth-child(3){border-right:none;}
  .dch-spec:nth-child(1),.dch-spec:nth-child(2),.dch-spec:nth-child(3){border-bottom:1px solid var(--line);}
}
@media(max-width:560px){
  .dch-grid,.dch-depo-grid,.dch-ficha-grid{grid-template-columns:1fr;}
  .dch-spec{border-right:none;border-bottom:1px solid var(--line);}
  .dch-spec:last-child{border-bottom:none;}
  .dch-sec{padding:64px 0;}
  .dch-hero{padding:60px 22px 70px;}
  .dch-classif{display:none;}
  .dch-passo{gap:14px;}
  .dch-passo-n{min-width:44px;font-size:26px;}
  .dch-time{font-size:38px;}
}
@media(prefers-reduced-motion:reduce){
  .dch-fade,.reveal{animation:none!important;opacity:1!important;transform:none!important;transition:none!important;}
  .dch-time{animation:none!important;}
}
`;

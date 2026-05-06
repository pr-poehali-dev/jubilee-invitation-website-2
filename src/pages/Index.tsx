import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const JUBILEE_DATE = new Date("2026-05-23T17:00:00");

const GALLERY_IMAGES = [
  {
    src: "https://cdn.poehali.dev/projects/745fa52e-4f1c-46d5-b22c-799fedcd745a/bucket/e796eef2-b20e-4f64-9234-e07261516cc5.jpeg",
    caption: "Юбиляр",
    year: "2026",
  },
  {
    src: "https://cdn.poehali.dev/projects/745fa52e-4f1c-46d5-b22c-799fedcd745a/bucket/4878e4d8-7496-4c89-9986-aa8862c90dfb.jpeg",
    caption: "Пётр Егорович",
    year: "2026",
  },
  {
    src: "https://cdn.poehali.dev/projects/745fa52e-4f1c-46d5-b22c-799fedcd745a/bucket/5c18512f-6d0a-4690-a8be-746a8180ebc2.jpeg",
    caption: "В народном костюме",
    year: "2026",
  },
  {
    src: "https://cdn.poehali.dev/projects/745fa52e-4f1c-46d5-b22c-799fedcd745a/bucket/24ab09e8-4e04-485f-85f0-f0625d04a5e8.jpeg",
    caption: "С историей родного края",
    year: "2026",
  },
];

function useCountdown(targetDate: Date) {
  const calc = () => {
    const diff = targetDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

export default function Index() {
  const navigate = useNavigate();
  const time = useCountdown(JUBILEE_DATE);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen yakut-pattern"
      style={{ backgroundColor: "var(--beige)" }}
    >
      {/* Hero секция */}
      <section className="relative overflow-hidden">
        <div className="yakut-border-bottom absolute bottom-0 left-0 right-0 z-10" />

        <div
          className="w-full"
          style={{
            background:
              "linear-gradient(180deg, var(--brown) 0%, var(--brown-light) 100%)",
            padding: "60px 20px 80px",
          }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6 animate-fade-in">
              <span className="diamond-sm" />
              <span className="diamond" />
              <span className="diamond-sm" />
            </div>

            <p
              className="animate-fade-in-up delay-100"
              style={{
                fontFamily: "'Golos Text', sans-serif",
                color: "var(--gold-light)",
                fontSize: "14px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                opacity: 0,
                marginBottom: "12px",
              }}
            >
              Дорогой гость, вы приглашены на
            </p>

            <h1
              className="animate-fade-in-up delay-200"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--cream)",
                fontSize: "clamp(42px, 8vw, 80px)",
                fontWeight: 700,
                lineHeight: 1.1,
                opacity: 0,
                marginBottom: "8px",
              }}
            >
              Юбилей
            </h1>

            <div
              className="animate-fade-in-up delay-300 shimmer"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--gold-light)",
                fontSize: "clamp(60px, 12vw, 120px)",
                fontWeight: 700,
                lineHeight: 1,
                opacity: 0,
              }}
            >
              65
            </div>

            <h2
              className="animate-fade-in-up delay-400"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--cream)",
                fontSize: "clamp(22px, 4vw, 36px)",
                fontWeight: 400,
                fontStyle: "italic",
                opacity: 0,
                marginTop: "8px",
              }}
            >
              Иванова Петра Егоровича
            </h2>

            <div className="flex items-center justify-center mt-6 mb-2 animate-fade-in-up delay-500" style={{ opacity: 0 }}>
              <span className="diamond-sm" />
              <span className="diamond" />
              <span className="diamond-sm" />
            </div>
          </div>
        </div>
      </section>

      <div className="h-6" />

      {/* Фото юбиляра */}
      <section className="max-w-2xl mx-auto px-4 mb-10">
        <div className="section-card p-8 text-center animate-fade-in-up delay-200" style={{ opacity: 0 }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="diamond-sm" />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--brown)",
                fontSize: "28px",
                fontWeight: 600,
              }}
            >
              Юбиляр
            </h2>
            <span className="diamond-sm" />
          </div>

          <div className="relative inline-block">
            <div
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                border: "6px solid var(--gold)",
                padding: "6px",
                margin: "0 auto",
                boxShadow: "0 0 0 2px var(--brown-light), 0 8px 30px rgba(92,61,30,0.25)",
                overflow: "hidden",
              }}
            >
              <img
                src="https://cdn.poehali.dev/projects/745fa52e-4f1c-46d5-b22c-799fedcd745a/bucket/4878e4d8-7496-4c89-9986-aa8862c90dfb.jpeg"
                alt="Юбиляр"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>

          <p
            className="mt-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontStyle: "italic",
              color: "var(--brown-light)",
              lineHeight: 1.6,
            }}
          >
            «Жизнь, прожитая с теплом и любовью,<br />
            оставляет след в сердцах навсегда»
          </p>
        </div>
      </section>

      {/* Дата и время */}
      <section className="max-w-2xl mx-auto px-4 mb-10">
        <div className="section-card p-8 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="diamond-sm" />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--brown)",
                fontSize: "28px",
                fontWeight: 600,
              }}
            >
              Дата и время
            </h2>
            <span className="diamond-sm" />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div
              style={{
                background: "linear-gradient(135deg, var(--brown), var(--brown-light))",
                borderRadius: "12px",
                padding: "16px 24px",
                textAlign: "center",
                color: "var(--cream)",
                minWidth: "130px",
              }}
            >
              <Icon name="Calendar" size={24} className="mx-auto mb-2" style={{ color: "var(--gold-light)" }} />
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--gold-light)",
                }}
              >
                23 мая 2026
              </div>
              <div style={{ fontSize: "12px", opacity: 0.85, marginTop: "2px", letterSpacing: "1px" }}>
                суббота
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, var(--brown), var(--brown-light))",
                borderRadius: "12px",
                padding: "16px 24px",
                textAlign: "center",
                color: "var(--cream)",
                minWidth: "130px",
              }}
            >
              <Icon name="Clock" size={24} className="mx-auto mb-2" style={{ color: "var(--gold-light)" }} />
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--gold-light)",
                }}
              >
                17:00 — 23:00
              </div>
              <div style={{ fontSize: "12px", opacity: 0.85, marginTop: "2px", letterSpacing: "1px" }}>
                время проведения
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Обратный отсчёт */}
      <section className="max-w-2xl mx-auto px-4 mb-10">
        <div className="section-card p-8 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="diamond-sm" />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--brown)",
                fontSize: "28px",
                fontWeight: 600,
              }}
            >
              До праздника осталось
            </h2>
            <span className="diamond-sm" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { value: time.days, label: "дней" },
              { value: time.hours, label: "часов" },
              { value: time.minutes, label: "минут" },
              { value: time.seconds, label: "секунд" },
            ].map((item) => (
              <div key={item.label} className="countdown-block">
                <div className="countdown-number">{String(item.value).padStart(2, "0")}</div>
                <div className="countdown-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Адрес с картой */}
      <section className="max-w-2xl mx-auto px-4 mb-10">
        <div className="section-card p-8 animate-fade-in-up delay-400" style={{ opacity: 0 }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="diamond-sm" />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--brown)",
                fontSize: "28px",
                fontWeight: 600,
              }}
            >
              Место проведения
            </h2>
            <span className="diamond-sm" />
          </div>

          <div className="flex items-start gap-3 mb-5">
            <Icon name="MapPin" size={22} style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "var(--brown)",
                }}
              >
                Банкетный зал «Фортуна»
              </p>
              <p style={{ color: "var(--brown-light)", fontSize: "15px", marginTop: "4px", lineHeight: 1.5 }}>
                Намский улус, с. Крест-Кытыл,<br />
                ул. Москвитина, д. 11/1
              </p>
            </div>
          </div>

          {/* 2GIS карта */}
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              border: "2px solid var(--beige-dark)",
              height: "280px",
            }}
          >
            <iframe
              src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A62.4667%2C%22lon%22%3A129.6833%2C%22zoom%22%3A13%7D%7D"
              width="100%"
              height="280"
              style={{ border: "none" }}
              title="Карта 2GIS"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href="https://2gis.ru/yakutsk/search/%D0%9A%D1%80%D0%B5%D1%81%D1%82-%D0%9A%D1%8B%D1%82%D1%8B%D0%BB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              style={{ textDecoration: "none", fontSize: "14px" }}
            >
              <Icon name="Navigation" size={16} />
              Открыть маршрут в 2GIS
            </a>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="max-w-2xl mx-auto px-4 mb-10">
        <div className="section-card p-8 animate-fade-in-up delay-400" style={{ opacity: 0 }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="diamond-sm" />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--brown)",
                fontSize: "28px",
                fontWeight: 600,
              }}
            >
              Галерея фотографий
            </h2>
            <span className="diamond-sm" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                style={{ position: "relative", cursor: "pointer" }}
                onClick={() => setLightbox(img.src)}
              >
                <img src={img.src} alt={img.caption} className="gallery-img" />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(transparent, rgba(92,61,30,0.75))",
                    borderRadius: "0 0 8px 8px",
                    padding: "20px 10px 8px",
                    color: "var(--cream)",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  <div>{img.caption}</div>
                  <div style={{ color: "var(--gold-light)", fontSize: "11px" }}>{img.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Подтверждение участия */}
      <section className="max-w-2xl mx-auto px-4 mb-10">
        <div className="section-card p-8 animate-fade-in-up delay-500 text-center" style={{ opacity: 0 }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="diamond-sm" />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--brown)",
                fontSize: "28px",
                fontWeight: 600,
              }}
            >
              Подтверждение участия
            </h2>
            <span className="diamond-sm" />
          </div>
          <p style={{ color: "var(--brown-light)", fontSize: "15px", marginBottom: "24px", lineHeight: 1.6 }}>
            Пожалуйста, подтвердите своё присутствие на торжестве. Для этого перейдите на страницу подтверждения.
          </p>
          <button
            className="btn-primary"
            onClick={() => navigate("/confirm")}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="CheckCircle" size={18} />
              Подтвердить присутствие
            </span>
          </button>
        </div>
      </section>

      {/* Нижний декор */}
      <footer
        style={{
          background: "linear-gradient(180deg, var(--brown-light) 0%, var(--brown) 100%)",
          padding: "40px 20px",
          textAlign: "center",
          marginTop: "20px",
          position: "relative",
        }}
      >
        <div className="yakut-border-top absolute top-0 left-0 right-0" style={{ transform: "scaleY(-1)" }} />
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="diamond-sm" />
          <span className="diamond" />
          <span className="diamond-sm" />
        </div>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "var(--gold-light)",
            fontSize: "20px",
            fontStyle: "italic",
          }}
        >
          С любовью ждём вас на нашем празднике!
        </p>
        <p style={{ color: "rgba(240,232,216,0.6)", fontSize: "13px", marginTop: "8px" }}>
          23 мая 2026 • с. Крест-Кытыл • Банкетный зал «Фортуна»
        </p>
      </footer>

      {/* Лайтбокс */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <img
            src={lightbox}
            alt=""
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: "12px",
              border: "3px solid var(--gold)",
            }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              background: "var(--gold)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--brown)",
            }}
          >
            <Icon name="X" size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PASSWORD = "124567890";

export default function Confirm() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: "", guests: "1", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!unlocked) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4 yakut-pattern"
        style={{ backgroundColor: "var(--beige)" }}
      >
        <div className="section-card p-8 w-full max-w-sm text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="diamond-sm" />
            <Icon name="Lock" size={28} style={{ color: "var(--brown)" }} />
            <span className="diamond-sm" />
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--brown)",
              fontSize: "26px",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            Закрытая страница
          </h2>
          <p style={{ color: "var(--brown-light)", fontSize: "14px", marginBottom: "24px" }}>
            Введите пароль для подтверждения присутствия
          </p>

          <form onSubmit={handleUnlock} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: `1.5px solid ${error ? "#e53e3e" : "var(--border)"}`,
                background: "var(--beige)",
                fontSize: "15px",
                color: "var(--brown)",
                outline: "none",
                boxSizing: "border-box",
                textAlign: "center",
                letterSpacing: "4px",
              }}
            />
            {error && (
              <p style={{ color: "#e53e3e", fontSize: "13px", margin: "-8px 0" }}>
                Неверный пароль. Попробуйте снова.
              </p>
            )}
            <button type="submit" className="btn-primary">
              Войти
            </button>
          </form>

          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: "16px",
              background: "none",
              border: "none",
              color: "var(--brown-light)",
              fontSize: "13px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            ← Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen px-4 py-10 yakut-pattern"
      style={{ backgroundColor: "var(--beige)" }}
    >
      <div className="max-w-lg mx-auto">
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "none",
            color: "var(--brown-light)",
            fontSize: "14px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          <Icon name="ArrowLeft" size={16} />
          Вернуться на главную
        </button>

        <div className="section-card p-8">
          <div className="flex items-center justify-center gap-3 mb-2">
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
          <p style={{ color: "var(--brown-light)", fontSize: "14px", textAlign: "center", marginBottom: "28px" }}>
            Юбилей Иванова Петра Егоровича • 23 мая 2026
          </p>

          {submitted ? (
            <div className="text-center py-8">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  background: "linear-gradient(135deg, var(--brown), var(--brown-light))",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Icon name="Check" size={32} style={{ color: "var(--gold-light)" }} />
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "26px",
                  color: "var(--brown)",
                  marginBottom: "8px",
                }}
              >
                Спасибо, {form.name}!
              </h3>
              <p style={{ color: "var(--brown-light)", fontSize: "15px", lineHeight: 1.6 }}>
                Ваше участие подтверждено.<br />
                Ждём вас 23 мая в банкетном зале «Фортуна»!
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <span className="diamond-sm" />
                <span className="diamond" />
                <span className="diamond-sm" />
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--brown)",
                    marginBottom: "6px",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Ваше имя *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Иван Иванович Петров"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1.5px solid var(--border)",
                    background: "var(--beige)",
                    fontSize: "15px",
                    color: "var(--brown)",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--brown)",
                    marginBottom: "6px",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Количество гостей *
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1.5px solid var(--border)",
                    background: "var(--beige)",
                    fontSize: "15px",
                    color: "var(--brown)",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                >
                  {["1", "2", "3", "4", "5+"].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === "1" ? "гость" : n === "5+" ? "гостей и более" : "гостя"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--brown)",
                    marginBottom: "6px",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Телефон для связи
                </label>
                <input
                  type="tel"
                  placeholder="+7 (914) 000-00-00"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1.5px solid var(--border)",
                    background: "var(--beige)",
                    fontSize: "15px",
                    color: "var(--brown)",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--brown)",
                    marginBottom: "6px",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Пожелания
                </label>
                <textarea
                  placeholder="Особые пожелания, диетические предпочтения..."
                  rows={3}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1.5px solid var(--border)",
                    background: "var(--beige)",
                    fontSize: "15px",
                    color: "var(--brown)",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ alignSelf: "center" }}>
                Подтвердить участие
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

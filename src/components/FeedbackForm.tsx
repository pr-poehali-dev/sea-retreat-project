import { useState } from "react";
import Icon from "@/components/ui/icon";

interface FeedbackFormProps {
  compact?: boolean;
}

export default function FeedbackForm({ compact = false }: FeedbackFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://functions.poehali.dev/bfc83f06-5a9a-4b9f-b7ac-3598ff3bc98d", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, form_type: "feedback" }),
      });
      setSent(true);
      setForm({ name: "", phone: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center py-10 px-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "linear-gradient(135deg, #0891b2, #14b8a6)" }}>
          <Icon name="CheckCheck" size={28} className="text-white" />
        </div>
        <h3 className="font-bold text-xl text-ocean-deep mb-2">Спасибо за обращение!</h3>
        <p className="text-muted-foreground text-sm">Мы перезвоним вам в течение 30 минут.</p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-ocean-mid text-sm underline underline-offset-2 hover:text-ocean-deep transition-colors"
        >
          Отправить ещё одно сообщение
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-4" : "space-y-5"}>
      <div className={compact ? "" : "grid md:grid-cols-2 gap-5"}>
        <div>
          <label className="block text-sm font-semibold text-ocean-deep mb-2">
            Ваше имя *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="Иван Иванов"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-ocean-mid transition-all text-foreground text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ocean-deep mb-2">
            Телефон *
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            placeholder="+7 (000) 000-00-00"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-ocean-mid transition-all text-foreground text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-ocean-deep mb-2">
          Сообщение
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder="Задайте вопрос или опишите, что вас интересует..."
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-ocean-mid transition-all text-foreground text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary text-sm py-3.5 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {loading ? (
          <>
            <Icon name="Loader2" size={16} className="animate-spin" />
            Отправляем...
          </>
        ) : (
          <>
            <Icon name="Send" size={16} />
            Отправить сообщение
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  );
}
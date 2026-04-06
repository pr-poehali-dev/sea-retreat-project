import Icon from "@/components/ui/icon";

const cabins = [
  { name: "Уютный домик", price: "от 3 500 ₽/ночь" },
  { name: "Семейный домик", price: "от 5 500 ₽/ночь" },
  { name: "VIP коттедж", price: "от 9 900 ₽/ночь" },
];

interface ContactsFooterProps {
  scrollTo: (id: string) => void;
  formData: { name: string; phone: string; message: string };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; phone: string; message: string }>>;
  formSent: boolean;
  handleFormSubmit: (e: React.FormEvent) => void;
  bookingData: { name: string; phone: string; dates: string; cabin: string; guests: string };
  setBookingData: React.Dispatch<React.SetStateAction<{ name: string; phone: string; dates: string; cabin: string; guests: string }>>;
  bookingSent: boolean;
  handleBookingSubmit: (e: React.FormEvent) => void;
}

export default function ContactsFooter({
  scrollTo,
  formData,
  setFormData,
  formSent,
  handleFormSubmit,
  bookingData,
  setBookingData,
  bookingSent,
  handleBookingSubmit,
}: ContactsFooterProps) {
  return (
    <>
      {/* BOOKING */}
      <section id="booking" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-2 border-white/30" />
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border-2 border-white/20" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block text-sm font-semibold text-ocean-light uppercase tracking-widest mb-4">
              Онлайн запись
            </div>
            <h2 className="font-display text-5xl font-bold text-white mb-4">
              Выберите даты и забронируйте отдых
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Планируете поездку на выходные, семейный отпуск или отдых у моря
              на несколько дней? Свяжитесь с нами — подберём лучший вариант.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {bookingSent ? (
              <div className="glass-card rounded-3xl p-12 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display text-2xl font-bold text-ocean-deep mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-muted-foreground">
                  Мы свяжемся с вами в ближайшее время для подтверждения
                  бронирования.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleBookingSubmit}
                className="glass-card rounded-3xl p-8 space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-ocean-deep mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) =>
                        setBookingData((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-ocean-mid transition-all text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ocean-deep mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      required
                      value={bookingData.phone}
                      onChange={(e) =>
                        setBookingData((p) => ({ ...p, phone: e.target.value }))
                      }
                      placeholder="+7 (000) 000-00-00"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-ocean-mid transition-all text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ocean-deep mb-2">
                    Тип домика
                  </label>
                  <select
                    value={bookingData.cabin}
                    onChange={(e) =>
                      setBookingData((p) => ({ ...p, cabin: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-ocean-mid transition-all text-foreground"
                  >
                    <option value="">Выберите домик</option>
                    {cabins.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name} — {c.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-ocean-deep mb-2">
                      Дата заезда
                    </label>
                    <input
                      type="date"
                      value={bookingData.dates}
                      onChange={(e) =>
                        setBookingData((p) => ({ ...p, dates: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-ocean-mid transition-all text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ocean-deep mb-2">
                      Дата выезда
                    </label>
                    <input
                      type="date"
                      value={bookingData.guests}
                      onChange={(e) =>
                        setBookingData((p) => ({ ...p, guests: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-ocean-mid transition-all text-foreground"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-ocean-deep mb-2">
                      Количество гостей
                    </label>
                    <select
                      value={bookingData.cabin}
                      onChange={(e) =>
                        setBookingData((p) => ({ ...p, cabin: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-ocean-mid transition-all text-foreground"
                    >
                      <option value="">Выберите</option>
                      <option value="1-2">1–2 человека</option>
                      <option value="3-4">3–4 человека</option>
                      <option value="5+">5+ человек</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <a
                      href="tel:+79000000000"
                      className="w-full btn-primary text-center text-sm py-3 block"
                    >
                      📞 Позвонить и забронировать
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-base py-4 text-center block"
                >
                  Отправить заявку на бронирование
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-semibold text-ocean-mid uppercase tracking-widest mb-4">
              Свяжитесь с нами
            </div>
            <h2 className="section-title">Контакты</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-ocean-deep">
                Как нас найти
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: "Phone",
                    label: "Телефон",
                    value: "+7 (900) 000-00-00",
                    href: "tel:+79000000000",
                  },
                  {
                    icon: "MapPin",
                    label: "Адрес",
                    value: "Московская область, с. Лесное, ул. Береговая, 1",
                  },
                  {
                    icon: "Clock",
                    label: "Режим работы",
                    value: "Круглосуточно, 365 дней в году",
                  },
                  {
                    icon: "Mail",
                    label: "Email",
                    value: "info@baza-otdyha.ru",
                    href: "mailto:info@baza-otdyha.ru",
                  },
                ].map(({ icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/40 hover:bg-secondary transition-colors"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #0891b2, #14b8a6)",
                      }}
                    >
                      <Icon name={icon} size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="font-semibold text-ocean-deep hover:text-ocean-mid transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="font-semibold text-ocean-deep">
                          {value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                  Написать нам
                </div>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://wa.me/79000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm"
                  >
                    <span>💬</span> WhatsApp
                  </a>
                  <a
                    href="tel:+79000000000"
                    className="flex items-center gap-2 border-2 border-ocean-mid text-ocean-mid hover:bg-ocean-mid hover:text-white px-5 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm"
                  >
                    <Icon name="Phone" size={16} /> Позвонить
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-border shadow-sm">
                <h4 className="font-bold text-ocean-deep mb-4">
                  Задать вопрос
                </h4>
                {formSent ? (
                  <div className="text-center py-6">
                    <div className="text-4xl mb-2">✅</div>
                    <div className="font-semibold text-ocean-deep">
                      Сообщение отправлено!
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Ответим в течение 30 минут
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-ocean-mid transition-all text-foreground text-sm"
                    />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, phone: e.target.value }))
                      }
                      placeholder="Телефон"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-ocean-mid transition-all text-foreground text-sm"
                    />
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="Ваш вопрос..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-ocean-mid transition-all text-foreground text-sm resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full btn-primary text-sm py-3 block text-center"
                    >
                      Отправить вопрос
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-xl text-ocean-deep">
                Мы на карте
              </h3>
              <div className="rounded-3xl overflow-hidden shadow-xl h-96 border border-border">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.617617,55.755864&z=12&l=map&pt=37.617617,55.755864,pm2rdm"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Карта расположения базы отдыха"
                />
              </div>
              <div className="bg-secondary/40 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <div className="font-semibold text-ocean-deep text-sm">
                      Как доехать
                    </div>
                    <div className="text-muted-foreground text-sm mt-1">
                      90 км от Москвы по Ярославскому шоссе. Поворот на с.
                      Лесное, ехать 5 км по грунтовой дороге. Координаты для
                      навигатора: 56.1234, 37.5678
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-ocean-deep text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-light to-teal flex items-center justify-center text-lg">
                🌊
              </div>
              <div>
                <div className="font-bold font-display">
                  База отдыха у моря
                </div>
                <div className="text-white/50 text-xs">
                  Круглый год
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                ["about", "О нас"],
                ["advantages", "Преимущества"],
                ["cabins", "Домики"],
                ["services", "Услуги"],
                ["contacts", "Контакты"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/79000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-colors"
              >
                <span>💬</span>
              </a>
              <a
                href="tel:+79000000000"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-ocean-mid flex items-center justify-center transition-colors"
              >
                <Icon name="Phone" size={16} className="text-white" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
            © 2026 База отдыха у моря. Все права защищены. | Телефон: +7 (900) 000-00-00 | Email: info@baza-more.ru
          </div>
        </div>
      </footer>
    </>
  );
}
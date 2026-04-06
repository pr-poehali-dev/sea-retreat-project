import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/66ae829b-e98a-4b94-a8d3-321775b785ad/files/42ccb1a2-74be-4527-b829-a50095735bd0.jpg";
const CABIN_IMAGE =
  "https://cdn.poehali.dev/projects/66ae829b-e98a-4b94-a8d3-321775b785ad/files/48cd214a-d246-47ae-9345-5228b2e35e33.jpg";
const ACTIVITIES_IMAGE =
  "https://cdn.poehali.dev/projects/66ae829b-e98a-4b94-a8d3-321775b785ad/files/d4881bab-4db7-42a0-b329-4e7512877f4d.jpg";

const cabins = [
  {
    name: "Уютный домик",
    guests: "2–4 чел.",
    price: "от 3 500 ₽/ночь",
    features: ["Вид на море", "Веранда", "Мангал"],
    emoji: "🏡",
  },
  {
    name: "Семейный домик",
    guests: "4–6 чел.",
    price: "от 5 500 ₽/ночь",
    features: ["2 спальни", "Терраса", "Парковка"],
    emoji: "🏠",
  },
  {
    name: "VIP коттедж",
    guests: "до 8 чел.",
    price: "от 9 900 ₽/ночь",
    features: ["Панорамный вид", "Баня", "Лодка"],
    emoji: "🏰",
  },
];

const services = [
  { icon: "Waves", title: "Море рядом", desc: "Выход к морю в 5 минутах от любого домика" },
  { icon: "Flame", title: "Баня и сауна", desc: "Русская баня на берегу с выходом к воде" },
  { icon: "Utensils", title: "Мангальная зона", desc: "Оборудованные места с дровами и столами" },
  { icon: "Bike", title: "Активный отдых", desc: "Велосипеды, каяки, волейбол, пляж" },
  { icon: "Baby", title: "Для детей", desc: "Детская площадка, безопасная территория" },
  { icon: "Coffee", title: "Питание", desc: "Домашняя кухня по предварительному заказу" },
];

const advantages = [
  "Круглогодичный отдых у моря",
  "Уютные домики для пары, семьи или компании",
  "Тишина, природа и чистый морской воздух",
  "Подходит для отдыха с детьми",
  "Пространство для барбекю и вечерних посиделок",
  "Баня, зона отдыха и комфортная территория",
  "Удобный формат для выходных и длительного проживания",
];

const galleryImages = [
  { src: HERO_IMAGE, alt: "Вид с высоты на базу" },
  { src: CABIN_IMAGE, alt: "Интерьер домика" },
  { src: ACTIVITIES_IMAGE, alt: "Активности" },
  { src: HERO_IMAGE, alt: "Море на закате" },
  { src: CABIN_IMAGE, alt: "Уютный вечер" },
  { src: ACTIVITIES_IMAGE, alt: "Пляж и причал" },
];

interface MainSectionsProps {
  scrollTo: (id: string) => void;
}

export default function MainSections({ scrollTo }: MainSectionsProps) {
  return (
    <>
      {/* PROBLEM */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block text-sm font-semibold text-ocean-mid uppercase tracking-widest mb-4">
              Звучит знакомо?
            </div>
            <h2 className="section-title mb-6">
              Устали от шума, суеты<br />
              <span className="font-display italic text-ocean-mid">и одинаковых отелей?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Иногда хочется не просто сменить обстановку, а действительно
              перезагрузиться. Подышать морским воздухом, пожить в тишине,
              провести время с семьёй или вдвоём, без спешки и городской нагрузки.
              Наша база отдыха создана именно для этого — чтобы вы могли отдыхать
              в своём ритме и чувствовать себя по-настоящему комфортно.
            </p>
          </div>

          {/* Три боли */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "😩", title: "Надоели шумные отели", desc: "Сотни незнакомых людей, очереди на завтрак, номер как коробка" },
              { emoji: "🌆", title: "Городская усталость", desc: "Пробки, экраны, уведомления — голова не отдыхает даже в отпуске" },
              { emoji: "💸", title: "Дорого и безлично", desc: "Платите за бренд, а не за ощущение. Хочется уюта, а не стандарта" },
            ].map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-border bg-white hover:border-ocean-mid/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-bold text-ocean-deep mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section
        id="offer"
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a4f6e 0%, #0891b2 50%, #14b8a6 100%)" }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-white/30" style={{ transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full border border-white/20" style={{ transform: "translate(-30%, 30%)" }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block text-sm font-semibold text-ocean-light uppercase tracking-widest mb-4">
              Наш ответ
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Здесь есть всё для отдыха,<br />
              <span className="italic">который запоминается</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Уютные домики, ухоженная территория, близость к морю, места для
              отдыха на свежем воздухе, баня, мангальная зона, детская площадка
              и инфраструктура для комфортного проживания в любое время года.
            </p>
            <p className="text-white font-semibold text-xl">
              Это не просто ночлег у моря. Это формат отдыха, где удобно жить,
              отдыхать и возвращаться снова.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "🌊", title: "Море рядом", desc: "5 минут пешком до пляжа. Просыпайтесь под звук волн" },
              { emoji: "🏡", title: "Домик как дома", desc: "Уютно, просторно, со всем необходимым для жизни" },
              { emoji: "🌿", title: "Природа вокруг", desc: "Чистый воздух, тишина, звёздное небо — не из окна, а вокруг вас" },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">{emoji}</div>
                <h3 className="font-bold text-ocean-deep text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-semibold text-ocean-mid uppercase tracking-widest mb-4">
              Преимущества
            </div>
            <h2 className="section-title">Почему гости выбирают нас</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-3">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-secondary/40 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #0891b2, #14b8a6)" }}>
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={HERO_IMAGE}
                  alt="База отдыха у моря"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="glass-card absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-xl max-w-[220px]">
                <div className="text-3xl mb-2">🏆</div>
                <div className="font-bold text-ocean-deep">Лучшая база 2025</div>
                <div className="text-sm text-muted-foreground mt-1">
                  По версии туристов региона
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL */}
      <section
        id="special"
        className="py-24"
        style={{ background: "linear-gradient(180deg, #e0f7fa 0%, #f0fdfc 100%)" }}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block text-sm font-semibold text-ocean-mid uppercase tracking-widest mb-4">
              Особенность
            </div>
            <h2 className="section-title mb-6">Что делает отдых у нас особенным</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Гости особенно ценят не только близость к морю, но и ощущение
              уединения, простоты и уюта. У нас вы можете просыпаться без
              будильника, гулять у воды, устраивать ужины на свежем воздухе
              и проводить время так, как хочется именно вам.
            </p>
            <p className="font-display text-2xl font-bold text-ocean-deep italic">
              Тут легко почувствовать, что отпуск действительно начался.
            </p>
          </div>
        </div>
      </section>

      {/* CABINS */}
      <section id="cabins" className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-semibold text-ocean-mid uppercase tracking-widest mb-4">
              Размещение
            </div>
            <h2 className="section-title">Наши домики</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
              Выберите идеальный вариант — от уютного гнёздышка до просторного
              коттеджа для большой компании
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cabins.map((cabin) => (
              <div
                key={cabin.name}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={CABIN_IMAGE}
                    alt={cabin.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
                  <div className="absolute top-4 right-4 text-4xl">{cabin.emoji}</div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/30">
                      {cabin.guests}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-ocean-deep mb-1">{cabin.name}</h3>
                  <div className="text-ocean-mid font-bold text-lg mb-4">{cabin.price}</div>
                  <div className="space-y-2 mb-6">
                    {cabin.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollTo("booking")}
                    className="w-full btn-primary text-center text-sm py-3 block"
                  >
                    Забронировать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24"
        style={{ background: "linear-gradient(180deg, #e0f7fa 0%, #ccfbf1 100%)" }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-semibold text-ocean-mid uppercase tracking-widest mb-4">
              Инфраструктура
            </div>
            <h2 className="section-title">Услуги и активности</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
              Всё для незабываемого отдыха уже включено или доступно на базе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-6 rounded-2xl border border-border hover:border-ocean-mid/40 bg-white hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0891b2, #14b8a6)" }}
                >
                  <Icon name={s.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-ocean-deep text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl overflow-hidden relative">
            <img
              src={ACTIVITIES_IMAGE}
              alt="Отдых у моря"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/90 to-ocean-mid/70 flex items-center">
              <div className="p-10">
                <h3 className="font-display text-3xl font-bold text-white mb-3">
                  Рыбалка — наш конёк
                </h3>
                <p className="text-white/80 mb-5 max-w-md">
                  Собственный причал, прокат лодок и все снасти. Море даёт богатый улов.
                </p>
                <button
                  onClick={() => scrollTo("contacts")}
                  className="btn-outline text-sm py-3 px-6"
                >
                  Узнать подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-semibold text-ocean-mid uppercase tracking-widest mb-4">
              Фотографии
            </div>
            <h2 className="section-title">Галерея</h2>
            <p className="text-muted-foreground text-lg mt-4">
              Посмотрите, как выглядит настоящий отдых у моря
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer group ${
                  i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    i === 0 ? "h-80 md:h-full" : "h-44"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

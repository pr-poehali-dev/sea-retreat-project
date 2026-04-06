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
    features: ["Вид на воду", "Веранда", "Мангал"],
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
  { icon: "Waves", title: "Рыбалка", desc: "Собственный причал, прокат лодок и снастей" },
  { icon: "Flame", title: "Баня и сауна", desc: "Русская баня на берегу с выходом к воде" },
  { icon: "Utensils", title: "Мангальная зона", desc: "Оборудованные места с дровами и столами" },
  { icon: "Bike", title: "Активный отдых", desc: "Велосипеды, каяки, волейбол, пляж" },
  { icon: "TreePine", title: "Эко-туризм", desc: "Прогулки по лесу, наблюдение за природой" },
  { icon: "Coffee", title: "Питание", desc: "Домашняя кухня по предварительному заказу" },
];

const galleryImages = [
  { src: HERO_IMAGE, alt: "Вид с высоты на базу" },
  { src: CABIN_IMAGE, alt: "Интерьер домика" },
  { src: ACTIVITIES_IMAGE, alt: "Активности" },
  { src: HERO_IMAGE, alt: "Озеро на закате" },
  { src: CABIN_IMAGE, alt: "Уютный вечер" },
  { src: ACTIVITIES_IMAGE, alt: "Лодочный причал" },
];

interface MainSectionsProps {
  scrollTo: (id: string) => void;
}

export default function MainSections({ scrollTo }: MainSectionsProps) {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block text-sm font-semibold text-ocean-mid uppercase tracking-widest mb-4">
                О нас
              </div>
              <h2 className="section-title mb-6">
                Место, где<br />
                <span className="font-display italic text-ocean-mid">
                  душа отдыхает
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Наша база отдыха расположена на живописном берегу озера в
                окружении реликтового леса. Мы создали идеальное место для
                семейного отдыха, рыбалки и слияния с природой.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Каждый домик обустроен с любовью и вниманием к деталям. Здесь
                вы найдёте всё необходимое для комфортного отдыха — от уютных
                интерьеров до оборудованных мангальных зон прямо у воды.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "MapPin", text: "200 м до воды" },
                  { icon: "Shield", text: "Круглосуточная охрана" },
                  { icon: "Wifi", text: "Бесплатный Wi-Fi" },
                  { icon: "ParkingSquare", text: "Парковка для гостей" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name={icon} size={18} className="text-ocean-mid" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={HERO_IMAGE}
                  alt="База отдыха с высоты"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="glass-card absolute -bottom-6 -left-6 rounded-2xl p-5 shadow-xl max-w-[220px]">
                <div className="text-3xl mb-2">🏆</div>
                <div className="font-bold text-ocean-deep">
                  Лучшая база 2025
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  По версии туристов региона
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CABINS */}
      <section
        id="cabins"
        className="py-24"
        style={{ background: "linear-gradient(180deg, #e0f7fa 0%, #f0fdfc 100%)" }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-semibold text-ocean-mid uppercase tracking-widest mb-4">
              Размещение
            </div>
            <h2 className="section-title">Наши домики</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
              Выберите идеальный вариант для вашего отдыха — от уютного
              гнёздышка до просторного коттеджа
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
                  <div className="absolute top-4 right-4 text-4xl">
                    {cabin.emoji}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/30">
                      {cabin.guests}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-ocean-deep mb-1">
                    {cabin.name}
                  </h3>
                  <div className="text-ocean-mid font-bold text-lg mb-4">
                    {cabin.price}
                  </div>
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
      <section id="services" className="py-24 bg-background">
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
                className="group p-6 rounded-2xl border border-border hover:border-ocean-mid/40 bg-white hover:bg-secondary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0891b2, #14b8a6)" }}
                >
                  <Icon name={s.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-ocean-deep text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl overflow-hidden relative">
            <img
              src={ACTIVITIES_IMAGE}
              alt="Активности"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/90 to-ocean-mid/70 flex items-center">
              <div className="p-10">
                <h3 className="font-display text-3xl font-bold text-white mb-3">
                  Рыбалка — наш конёк
                </h3>
                <p className="text-white/80 mb-5 max-w-md">
                  Собственный причал, 5 км береговой линии, прокат лодок и все
                  снасти.
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
      <section
        id="gallery"
        className="py-24"
        style={{ background: "linear-gradient(180deg, #e0f7fa 0%, #ccfbf1 100%)" }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-semibold text-ocean-mid uppercase tracking-widest mb-4">
              Фотографии
            </div>
            <h2 className="section-title">Галерея</h2>
            <p className="text-muted-foreground text-lg mt-4">
              Посмотрите, как выглядит настоящий отдых
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

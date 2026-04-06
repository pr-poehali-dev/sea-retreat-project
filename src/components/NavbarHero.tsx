import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/66ae829b-e98a-4b94-a8d3-321775b785ad/files/42ccb1a2-74be-4527-b829-a50095735bd0.jpg";

interface NavbarHeroProps {
  scrollTo: (id: string) => void;
}

export default function NavbarHero({ scrollTo }: NavbarHeroProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ocean-deep/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <button
            onClick={() => handleNav("hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-light to-teal flex items-center justify-center text-lg shadow-lg">
              🌊
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-base leading-tight font-display">
                База отдыха
              </div>
              <div className="text-ocean-light text-xs tracking-widest uppercase">
                у воды
              </div>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              ["about", "О базе"],
              ["cabins", "Домики"],
              ["services", "Услуги"],
              ["gallery", "Галерея"],
              ["contacts", "Контакты"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="nav-link text-sm"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNav("booking")}
              className="btn-primary text-sm py-2.5 px-6"
            >
              Забронировать
            </button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-ocean-deep/98 backdrop-blur-md border-t border-white/10 py-4">
            <div className="container mx-auto flex flex-col gap-4">
              {[
                ["about", "О базе"],
                ["cabins", "Домики"],
                ["services", "Услуги"],
                ["gallery", "Галерея"],
                ["contacts", "Контакты"],
                ["booking", "Бронирование"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className="text-white/90 hover:text-white text-left py-2 border-b border-white/10 font-medium"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/70 via-ocean-deep/50 to-ocean-deep/80" />

        <div className="container mx-auto relative z-10 pt-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-teal-light animate-pulse" />
              <span className="text-white text-sm font-medium tracking-wide">
                Открыт сезон 2026
              </span>
            </div>

            <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-none mb-6 animate-fade-in-up delay-100">
              Отдых у<br />
              <span className="italic text-ocean-light">воды</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200">
              Уютные домики на берегу озера, чистый воздух и тишина. Настоящий
              отдых для всей семьи вдали от городской суеты.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <button
                onClick={() => scrollTo("booking")}
                className="btn-primary text-base"
              >
                Забронировать домик
              </button>
              <button
                onClick={() => scrollTo("cabins")}
                className="btn-outline text-base"
              >
                Смотреть домики
              </button>
            </div>

            <div className="flex flex-wrap gap-8 mt-16 animate-fade-in-up delay-400">
              {[
                ["🏡", "15+", "Домиков"],
                ["⭐", "4.9", "Рейтинг"],
                ["🎣", "5 км", "Береговой линии"],
                ["🌲", "10 лет", "Работаем"],
              ].map(([emoji, val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl mb-1">{emoji}</div>
                  <div className="text-white font-bold text-2xl leading-none">
                    {val}
                  </div>
                  <div className="text-white/60 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Листайте
          </span>
          <Icon name="ChevronDown" size={20} className="text-ocean-light" />
        </div>
      </section>

      {/* Wave divider */}
      <div className="wave-divider bg-ocean-deep">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="hsl(196, 100%, 97%)"
          />
        </svg>
      </div>
    </>
  );
}

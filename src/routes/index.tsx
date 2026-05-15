import { createFileRoute, Link } from "@tanstack/react-router";
import heroCake from "@/assets/hero-cake.jpg";
import pastries from "@/assets/pastries.jpg";
import noodles from "@/assets/noodles.jpg";
import celebrationCake from "@/assets/celebration-cake.jpg";
import { Phone, MapPin, Clock, Star, ArrowUpRight, Instagram } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Celebration Bakers & Confectionaries — Kurla's Beloved Cake Shop Since Years" },
      { name: "description", content: "Freshly baked cakes, pastries & Indo-Chinese kitchen in Kurla West, Mumbai. Order custom celebration cakes from ₹200. Rated 4.3★ by 74+ guests." },
      { property: "og:title", content: "Celebration Bakers & Confectionaries — Kurla" },
      { property: "og:description", content: "Freshly baked cakes & confectionaries in Kurla West, Mumbai." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Specialties />
      <Story />
      <Menu />
      <Reviews />
      <Visit />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2 text-cream">
        <span className="font-display text-xl md:text-2xl font-medium tracking-tight">Celebration</span>
        <span className="h-1 w-1 rounded-full bg-gold" />
        <span className="text-[11px] uppercase tracking-[0.25em] hidden sm:inline">Est. Kurla</span>
      </div>
      <nav className="hidden md:flex items-center gap-10 text-sm text-cream/90">
        <a href="#specialties" className="hover:text-gold transition">Specialties</a>
        <a href="#menu" className="hover:text-gold transition">Menu</a>
        <Link to="/cake-shop-kurla" className="hover:text-gold transition">Cake Shop in Kurla</Link>
        <a href="#reviews" className="hover:text-gold transition">Reviews</a>
        <a href="#visit" className="hover:text-gold transition">Visit</a>
      </nav>
      <a
        href="tel:07045417900"
        className="group inline-flex items-center gap-2 rounded-full border border-cream/30 px-4 py-2 text-sm text-cream backdrop-blur hover:bg-cream hover:text-ink transition"
      >
        Order now <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <img
        src={heroCake}
        alt="Signature dark chocolate gold-leaf celebration cake"
        width={1536}
        height={1536}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/90" />
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-5xl fade-up">
          <p className="text-gold text-xs md:text-sm uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" /> Kurla West, Mumbai
          </p>
          <h1 className="font-display text-cream text-[14vw] md:text-[8.5vw] leading-[0.92] font-normal tracking-tighter">
            Every bite,<br />
            <em className="italic font-light text-gold">a celebration.</em>
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-md text-cream/80 text-base md:text-lg leading-relaxed">
              Hand-crafted cakes, fresh pastries and a beloved Indo-Chinese kitchen — baked daily with love in the heart of Kurla.
            </p>
            <div className="flex items-center gap-6">
              <div>
                <div className="font-display text-4xl text-cream">4.3<span className="text-gold">★</span></div>
                <div className="text-xs text-cream/60 uppercase tracking-widest mt-1">74+ Google reviews</div>
              </div>
              <a href="#menu" className="group rounded-full bg-gold text-ink px-7 py-4 text-sm font-medium tracking-wide hover:bg-cream transition inline-flex items-center gap-2">
                Explore the menu
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Custom Celebration Cakes", "Fresh Daily Pastries", "Indo-Chinese Kitchen", "Confectionaries", "Birthdays & Weddings", "Walk-in & Takeaway"];
  return (
    <div className="bg-burgundy text-cream py-6 overflow-hidden border-y border-gold/20">
      <div className="flex gap-16 marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display italic text-2xl md:text-3xl flex items-center gap-16">
            {t} <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Specialties() {
  const cards = [
    { img: celebrationCake, title: "Custom Cakes", tag: "From ₹400", note: "Birthdays, weddings, anniversaries — designed to your moment." },
    { img: pastries, title: "Fresh Bakes", tag: "Daily", note: "Croissants, puffs, tarts and breads pulled fresh from the oven each morning." },
    { img: noodles, title: "Indo-Chinese", tag: "₹200–400", note: "Sizzling hakka noodles, manchurian and street favourites from our kitchen." },
  ];
  return (
    <section id="specialties" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— What we do</p>
            <h2 className="font-display text-5xl md:text-7xl text-balance max-w-3xl">
              Three counters, <em className="italic text-gold">one obsession</em>: freshness.
            </h2>
          </div>
          <p className="max-w-xs text-muted-foreground">A neighbourhood institution serving Kurla with cakes, bakes and a full Indo-Chinese kitchen under one roof.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <article key={i} className="group relative overflow-hidden rounded-sm bg-card">
              <div className="relative h-[460px] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" width={1024} height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <div className="absolute top-5 left-5 text-cream/80 text-xs uppercase tracking-widest">{c.tag}</div>
                <div className="absolute bottom-0 left-0 right-0 p-7 text-cream">
                  <h3 className="font-display text-3xl mb-2">{c.title}</h3>
                  <p className="text-cream/80 text-sm leading-relaxed">{c.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">— Our story</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance">
            From a small shop on <span className="italic text-burgundy">Pipe Line Road</span> to the cake of choice in Kurla.
          </h2>
          <div className="mt-10 grid grid-cols-3 gap-8 max-w-md">
            <Stat n="74+" l="Google reviews" />
            <Stat n="4.3★" l="Rated by guests" />
            <Stat n="700+" l="Cakes a month" />
          </div>
        </div>
        <div className="md:col-span-5 space-y-5 text-muted-foreground leading-relaxed">
          <p>For years, Celebration Bakers has been the place Kurla turns to when there's something to mark — a birthday, an anniversary, or simply a Tuesday that needs a slice of something good.</p>
          <p>Every cake is iced by hand. Every pastry is baked that morning. Every plate from our kitchen is made to the same standard we'd serve our own family.</p>
          <p className="font-display italic text-foreground text-xl">"Really good cakes that are delicious and not heavy on the pocket either."<br /><span className="text-sm not-italic text-muted-foreground">— Shabnam S., Local Guide</span></p>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-burgundy">{n}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{l}</div>
    </div>
  );
}

function Menu() {
  const sections = [
    {
      title: "Celebration Cakes",
      items: [
        ["Classic Black Forest", "₹450 / 500g"],
        ["Belgian Dark Chocolate Truffle", "₹650 / 500g"],
        ["Fresh Strawberry Gateau", "₹550 / 500g"],
        ["Pineapple Cream", "₹400 / 500g"],
        ["Custom Designer Cake", "From ₹800"],
      ],
    },
    {
      title: "Bakes & Pastries",
      items: [
        ["Butter Croissant", "₹60"],
        ["Chocolate Pastry", "₹80"],
        ["Veg Puff", "₹35"],
        ["Pineapple Cake Slice", "₹70"],
        ["Brownie (Walnut)", "₹90"],
      ],
    },
    {
      title: "From the Kitchen",
      items: [
        ["Hakka Noodles", "₹160"],
        ["Veg Manchurian", "₹180"],
        ["Schezwan Fried Rice", "₹170"],
        ["Paneer Chilli", "₹220"],
        ["Margherita Pizza", "₹240"],
      ],
    },
  ];
  return (
    <section id="menu" className="px-6 md:px-12 py-24 md:py-32 bg-ink text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— The menu</p>
            <h2 className="font-display text-5xl md:text-7xl text-balance">A short, honest list.</h2>
          </div>
          <p className="max-w-sm text-cream/60">Made fresh through the day. Custom orders welcome with 24 hours notice.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {sections.map((s) => (
            <div key={s.title}>
              <h3 className="font-display italic text-2xl text-gold mb-8 pb-4 border-b border-cream/15">{s.title}</h3>
              <ul className="space-y-5">
                {s.items.map(([name, price]) => (
                  <li key={name} className="flex items-baseline justify-between gap-4">
                    <span className="text-cream/90">{name}</span>
                    <span className="flex-1 mx-3 border-b border-dotted border-cream/15 translate-y-[-4px]" />
                    <span className="font-display text-cream tabular-nums">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <a href="tel:07045417900" className="rounded-full bg-gold text-ink px-7 py-4 text-sm font-medium hover:bg-cream transition inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> Call to order — 070454 17900
          </a>
          <a href="#visit" className="rounded-full border border-cream/30 px-7 py-4 text-sm hover:bg-cream hover:text-ink transition">Visit the shop</a>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { stars: 5, text: "Really good cakes that are delicious and not heavy on the pocket either. Highly recommend.", name: "Shabnam Shaikh", meta: "Local Guide · Takeaway" },
    { stars: 5, text: "People say this place is known for fresh food, good quality, value for money, taste and portion size.", name: "Zomato Verified", meta: "From 277 reviews" },
    { stars: 4, text: "A neighbourhood favourite — has rated 4.4 for ambience and service consistently.", name: "Justdial Verified", meta: "From 419 reviews" },
  ];
  return (
    <section id="reviews" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Loved across Mumbai</p>
          <h2 className="font-display text-5xl md:text-7xl text-balance max-w-4xl mx-auto">
            <span className="text-gold">4.3 ★</span> on Google. <em className="italic">And counting.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <blockquote key={i} className="rounded-sm border border-border bg-card p-8 shadow-[0_2px_0_oklch(0.32_0.09_25/0.06)]">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-xl leading-snug text-balance mb-6">"{r.text}"</p>
              <footer>
                <div className="font-medium text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.meta}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="px-6 md:px-12 py-24 md:py-32 bg-burgundy text-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Come say hello</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Find us on<br /><em className="italic text-gold">Pipe Line Road.</em>
          </h2>
          <p className="mt-8 max-w-md text-cream/70 leading-relaxed">Pop in for a slice, place a custom cake order, or grab dinner from our kitchen. We're open till midnight.</p>
        </div>
        <div className="space-y-8">
          <Info icon={<MapPin className="h-5 w-5" />} label="Address">
            Shop No.1, Saghir Estate, 181, Pipe Line Rd,<br />
            opp. Rassiwala Compound, Ambedkar Nagar,<br />
            Kurla West, Mumbai 400070
          </Info>
          <Info icon={<Phone className="h-5 w-5" />} label="Phone">
            <a href="tel:07045417900" className="hover:text-gold transition">070454 17900</a>
          </Info>
          <Info icon={<Clock className="h-5 w-5" />} label="Hours">
            Open daily · Closes 12:00 am
          </Info>
          <a
            href="https://maps.google.com/?q=Celebration+Bakers+And+Confectionaries+Kurla"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-4 text-sm font-medium hover:bg-cream transition"
          >
            Get directions <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 border-t border-cream/15 pt-6">
      <div className="text-gold mt-1">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-cream/60 mb-2">{label}</div>
        <div className="text-cream/95 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10 bg-ink text-cream/70 text-sm flex flex-wrap items-center justify-between gap-4">
      <div className="font-display text-cream text-lg">Celebration Bakers & Confectionaries</div>
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-gold transition inline-flex items-center gap-2"><Instagram className="h-4 w-4" /> Instagram</a>
        <span>© {new Date().getFullYear()} Kurla, Mumbai</span>
      </div>
    </footer>
  );
}

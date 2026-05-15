import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, ArrowUpRight, Cake, Cookie, Utensils, Star, Navigation, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import heroCake from "@/assets/hero-cake.jpg";
import celebrationCake from "@/assets/celebration-cake.jpg";
import pastries from "@/assets/pastries.jpg";

const URL = "https://celebrationkurla.lovable.app/cake-shop-kurla";
const TITLE = "Cake Shop in Kurla — Celebration Bakers & Confectionaries";
const DESC =
  "The trusted cake shop in Kurla West, Mumbai. Custom birthday & wedding cakes, fresh daily pastries and Indo-Chinese kitchen on Pipe Line Road. Open till midnight.";

export const Route = createFileRoute("/cake-shop-kurla")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "cake shop in kurla, bakery in kurla west, birthday cake kurla, custom cake mumbai, cake delivery kurla, pipe line road bakery, indo chinese kurla" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Celebration Bakers & Confectionaries",
          image: "https://celebrationkurla.lovable.app/og-image.jpg",
          url: URL,
          telephone: "+917045417900",
          priceRange: "₹200–₹400",
          servesCuisine: ["Bakery", "Indo-Chinese", "Desserts"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No.1, Saghir Estate, 181, Pipe Line Rd, opp. Rassiwala Compound, Ambedkar Nagar",
            addressLocality: "Kurla West",
            addressRegion: "Maharashtra",
            postalCode: "400070",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 19.0708, longitude: 72.8794 },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "09:00", closes: "00:00" },
          ],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.3", reviewCount: "74" },
        }),
      },
    ],
  }),
  component: CakeShopKurlaPage,
});

function CakeShopKurlaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Intro />
      <Services />
      <WhyUs />
      <Areas />
      <Directions />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 text-cream">
        <span className="font-display text-xl md:text-2xl font-medium tracking-tight">Celebration</span>
        <span className="h-1 w-1 rounded-full bg-gold" />
        <span className="text-[11px] uppercase tracking-[0.25em] hidden sm:inline">Est. Kurla</span>
      </Link>
      <nav className="hidden md:flex items-center gap-10 text-sm text-cream/90">
        <Link to="/" className="hover:text-gold transition">Home</Link>
        <Link to="/cake-shop-kurla" className="text-gold">Cake Shop in Kurla</Link>
      </nav>
      <a href="tel:07045417900" className="group inline-flex items-center gap-2 rounded-full border border-cream/30 px-4 py-2 text-sm text-cream backdrop-blur hover:bg-cream hover:text-ink transition">
        Order now <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
      <img src={heroCake} alt="Custom celebration cake from cake shop in Kurla West, Mumbai" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/40 to-ink/90" />
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-20 md:pb-24 max-w-6xl">
        <p className="text-gold text-xs md:text-sm uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-gold" /> Pipe Line Road, Kurla West
        </p>
        <h1 className="font-display text-cream text-[12vw] md:text-[6.5vw] leading-[0.95] font-normal tracking-tighter">
          The cake shop<br />
          <em className="italic font-light text-gold">Kurla calls first.</em>
        </h1>
        <p className="mt-8 max-w-xl text-cream/85 text-base md:text-lg leading-relaxed">
          Hand-iced birthday cakes, custom wedding tiers, fresh daily pastries and a beloved Indo-Chinese kitchen — all from Celebration Bakers in Kurla West, Mumbai. Walk in, call, or order ahead.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="tel:07045417900" className="rounded-full bg-gold text-ink px-7 py-4 text-sm font-medium hover:bg-cream transition inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> Call 070454 17900
          </a>
          <a
            href="https://wa.me/917045417900?text=Hi%2C%20I%27d%20like%20to%20order%20a%20cake%20from%20Celebration%20Bakers%20Kurla"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] text-white px-7 py-4 text-sm font-medium hover:bg-[#1ebe5a] transition inline-flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Order
          </a>
          <a href="#directions" className="rounded-full border border-cream/30 text-cream px-7 py-4 text-sm hover:bg-cream hover:text-ink transition inline-flex items-center gap-2">
            <Navigation className="h-4 w-4" /> Get directions
          </a>
          <div className="flex items-center gap-2 text-cream/80 text-sm ml-2">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span><strong className="text-cream">4.3★</strong> · 74+ Google reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Cake shop in Kurla West, Mumbai</p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
          Looking for a <em className="italic text-burgundy">cake shop near you in Kurla?</em> You've found it.
        </h2>
        <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            Celebration Bakers & Confectionaries is a neighbourhood bakery on Pipe Line Road, Kurla West — the place locals turn to for birthday cakes, anniversary cakes, and last-minute "I need something good" runs. We bake every morning, ice every cake by hand, and price everything to fit a Mumbai budget.
          </p>
          <p>
            Whether you're searching for a <strong className="text-foreground">cake shop near Ambedkar Nagar</strong>, a bakery in <strong className="text-foreground">Kurla West</strong>, or a custom designer cake delivered the same day in Kurla, we've probably already baked one this week.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: <Cake className="h-6 w-6" />, img: celebrationCake, title: "Custom Birthday & Wedding Cakes", desc: "Designer cakes from ₹400 — black forest, truffle, fresh fruit, fondant tiers, photo cakes, eggless options.", price: "From ₹400" },
    { icon: <Cookie className="h-6 w-6" />, img: pastries, title: "Daily Bakes & Pastries", desc: "Croissants, chocolate pastries, brownies, veg puffs and cake slices — pulled fresh from the oven each morning.", price: "From ₹35" },
    { icon: <Utensils className="h-6 w-6" />, img: heroCake, title: "Indo-Chinese Kitchen", desc: "Hakka noodles, manchurian, schezwan rice, paneer chilli and pizza — Kurla's favourite quick dinner.", price: "₹160–₹240" },
  ];
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— What we serve</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">Three counters under one Kurla roof.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="bg-card rounded-sm overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-cream/95 text-ink text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">{s.price}</div>
              </div>
              <div className="p-7">
                <div className="text-burgundy mb-4">{s.icon}</div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { n: "01", t: "Baked fresh, daily", d: "Every loaf, pastry and sponge is made on-site that morning. Nothing sits overnight." },
    { n: "02", t: "Custom cakes in 24 hours", d: "Tell us the flavour, design and message — we'll have it ready by tomorrow." },
    { n: "03", t: "Walk-in friendly, open till midnight", d: "Open daily till 12 am for last-minute cakes, dinner runs and pastry pickups." },
    { n: "04", t: "Kurla-priced, Mumbai-quality", d: "₹200–₹400 per person at the kitchen. Cakes from ₹400. No hidden surprises." },
  ];
  return (
    <section className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Why Kurla picks us</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Four reasons we're <em className="italic text-burgundy">the</em> cake shop in Kurla.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {points.map((p) => (
            <div key={p.n} className="flex gap-6 border-t border-border pt-8">
              <div className="font-display text-3xl text-gold tabular-nums">{p.n}</div>
              <div>
                <h3 className="font-display text-2xl mb-2">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  const areas = ["Kurla West", "Kurla East", "Ambedkar Nagar", "Pipe Line Road", "LBS Marg", "Saki Naka", "Chunabhatti", "Sion", "Chembur (nearby)", "Kalina", "Vidyavihar", "Ghatkopar (nearby)"];
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 bg-ink text-cream">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Areas we serve</p>
        <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
          Walk-in & takeaway across <em className="italic text-gold">Kurla and nearby Mumbai.</em>
        </h2>
        <p className="mt-6 max-w-2xl text-cream/70 leading-relaxed">
          Our shop is on Pipe Line Road in Kurla West — a 5-minute auto from Kurla station and easy off LBS Marg. Customers regularly visit us from across central Mumbai for custom cakes.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {areas.map((a) => (
            <span key={a} className="rounded-full border border-cream/20 px-5 py-2.5 text-sm text-cream/90 hover:border-gold hover:text-gold transition">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Directions() {
  return (
    <section id="directions" className="px-6 md:px-12 py-20 md:py-28 bg-burgundy text-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Find us</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
            How to get to<br /><em className="italic text-gold">Pipe Line Road.</em>
          </h2>
          <div className="mt-10 space-y-7">
            <Info icon={<MapPin className="h-5 w-5" />} label="Address">
              Shop No.1, Saghir Estate, 181, Pipe Line Rd,<br />
              opp. Rassiwala Compound, Ambedkar Nagar,<br />
              Kurla West, Mumbai 400070
            </Info>
            <Info icon={<Phone className="h-5 w-5" />} label="Call to order">
              <a href="tel:07045417900" className="hover:text-gold transition">070454 17900</a>
            </Info>
            <Info icon={<Clock className="h-5 w-5" />} label="Hours">
              Open daily · 9:00 am – 12:00 am
            </Info>
          </div>
          <a href="https://maps.google.com/?q=Celebration+Bakers+And+Confectionaries+Kurla" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-4 text-sm font-medium hover:bg-cream transition">
            Open in Google Maps <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="space-y-6">
          <DirectionCard title="From Kurla Station (West)">
            5 min by auto. Exit West, head onto LBS Marg, take the right onto Pipe Line Road. We're opposite Rassiwala Compound.
          </DirectionCard>
          <DirectionCard title="From LBS Marg / Sion">
            Stay on LBS Marg toward Kurla, turn into Pipe Line Road at Ambedkar Nagar. ~8 min by car off-peak.
          </DirectionCard>
          <DirectionCard title="From Chembur or Ghatkopar">
            ~15 min via Eastern Express Highway → LBS Marg → Pipe Line Road, Kurla West.
          </DirectionCard>
          <DirectionCard title="From BKC">
            ~12 min via Kalina – Kurla West. Easy auto ride after work.
          </DirectionCard>
        </div>
      </div>
    </section>
  );
}

function DirectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-cream/15 rounded-sm p-6">
      <div className="font-display text-xl text-gold mb-2">{title}</div>
      <p className="text-cream/80 leading-relaxed text-sm">{children}</p>
    </div>
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

function FAQ() {
  const faqs = [
    {
      q: "How do I order a custom cake from your Kurla shop?",
      a: "Call us on 070454 17900 or send a WhatsApp message with your design reference, flavour, size and the date you need it. We recommend placing custom orders at least 24 hours in advance; for large wedding or tiered cakes, 48–72 hours is ideal.",
    },
    {
      q: "What flavours of cake do you offer?",
      a: "We bake classic Black Forest, Belgian Dark Chocolate Truffle, fresh Strawberry Gateau, Pineapple Cream, Butterscotch, Red Velvet and more. Eggless options are available for all flavours at no extra charge. Ask us about seasonal specials.",
    },
    {
      q: "Do you do same-day cake delivery in Kurla?",
      a: "Walk-in and same-day pickup is available for standard cakes from our display counter. For custom-designed cakes, we need at least 24 hours. We currently serve customers via walk-in and self-pickup; please call to confirm availability.",
    },
    {
      q: "What is the minimum price for a custom birthday cake?",
      a: "Custom birthday cakes start from ₹400 for a 500g cake. Photo cakes, fondant-decorated cakes and multi-tier designs are priced based on complexity and size. Call or WhatsApp us with your requirement for an exact quote.",
    },
    {
      q: "Where exactly is the cake shop located in Kurla?",
      a: "We are at Shop No.1, Saghir Estate, 181, Pipe Line Road, opposite Rassiwala Compound, Ambedkar Nagar, Kurla West, Mumbai 400070. It's a 5-minute auto ride from Kurla Railway Station (West exit).",
    },
    {
      q: "What are your opening hours?",
      a: "We are open every day from 9:00 am to 12:00 midnight — including Sundays and public holidays. Perfect for last-minute cake pickups and late-night dinner from our kitchen.",
    },
    {
      q: "Do you offer Indo-Chinese food in addition to cakes?",
      a: "Yes! Our kitchen serves a full Indo-Chinese menu including Hakka Noodles, Veg Manchurian, Schezwan Fried Rice, Paneer Chilli and Pizza. Prices range from ₹160 to ₹240. Dine-in or takeaway.",
    },
    {
      q: "Can I order a cake on WhatsApp?",
      a: "Absolutely. Send us a message on WhatsApp at +91 70454 17900 with your cake details — flavour, design inspiration, size, date and name for the message. We'll confirm availability and pricing within the hour during shop hours.",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-20 md:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Common questions</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Frequently asked <em className="italic text-burgundy">questions.</em>
          </h2>
        </div>
        <div className="divide-y divide-border">
          {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
        <div className="mt-12 p-6 bg-card border border-border rounded-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="font-display text-lg">Still have a question?</div>
            <div className="text-sm text-muted-foreground mt-1">Call or WhatsApp us — we'll answer right away.</div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:07045417900" className="inline-flex items-center gap-2 rounded-full bg-burgundy text-cream px-5 py-3 text-sm hover:bg-ink transition">
              <Phone className="h-4 w-4" /> Call us
            </a>
            <a
              href="https://wa.me/917045417900?text=Hi%2C%20I%20have%20a%20question%20about%20Celebration%20Bakers%20Kurla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 text-sm hover:bg-[#1ebe5a] transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-display text-lg md:text-xl text-foreground group-hover:text-burgundy transition">{q}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="mt-4 text-muted-foreground leading-relaxed pr-9">{a}</p>
      )}
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917045417900?text=Hi%2C%20I%27d%20like%20to%20order%20a%20cake%20from%20Celebration%20Bakers%20Kurla"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white rounded-full shadow-lg px-5 py-3.5 text-sm font-medium hover:bg-[#1ebe5a] transition-all hover:shadow-xl hover:scale-105 active:scale-95"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span>Order on WhatsApp</span>
    </a>
  );
}

function CTA() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl leading-tight">
          Ready to order? <em className="italic text-burgundy">We're 24 hours away.</em>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          Call us with your design, flavour and date. Walk-ins welcome till midnight, every day.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="tel:07045417900" className="rounded-full bg-burgundy text-cream px-7 py-4 text-sm font-medium hover:bg-ink transition inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> Call 070454 17900
          </a>
          <a
            href="https://wa.me/917045417900?text=Hi%2C%20I%27d%20like%20to%20order%20a%20cake%20from%20Celebration%20Bakers%20Kurla"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] text-white px-7 py-4 text-sm font-medium hover:bg-[#1ebe5a] transition inline-flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Order
          </a>
          <Link to="/" className="rounded-full border border-foreground/20 px-7 py-4 text-sm hover:bg-foreground hover:text-background transition">
            See full menu
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10 bg-ink text-cream/70 text-sm flex flex-wrap items-center justify-between gap-4">
      <div className="font-display text-cream text-lg">Celebration Bakers & Confectionaries — Cake Shop in Kurla</div>
      <span>© {new Date().getFullYear()} Pipe Line Road, Kurla West, Mumbai</span>
    </footer>
  );
}

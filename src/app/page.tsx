import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { CountingNumber } from "@/components/counting-number";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import {
  LayoutDashboard,
  Smartphone,
  Globe,
  CreditCard,
  FileText,
  Server,
  Megaphone,
  Target,
  Users,
  Layers,
  Repeat2,
  MessageCircle,
  ClipboardList,
  Code2,
  Rocket,
  CheckCircle2,
  ChevronDown,
  Mail,
  Phone,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const SERVICE_ICONS = [
  LayoutDashboard,
  Smartphone,
  Globe,
  CreditCard,
  FileText,
  Server,
  Megaphone,
];

const HOW_ICONS = [MessageCircle, ClipboardList, Code2, Rocket];
const WHY_ICONS = [Target, Users, Repeat2, Layers];

/* ─── JSON-LD structured data ─── */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Finey Otieno Akwoyo",
  alternateName: "Finey Akwoyo",
  url: DATA.url,
  image: `${DATA.url}logo.png`,
  jobTitle: "Software Developer",
  description: DATA.description,
  sameAs: [
    "https://github.com/finey-dev",
    "https://www.linkedin.com/in/finey-otieno/",
    "https://x.com/finey_otieno",
  ],
  knowsAbout: [
    "Custom Software Development",
    "ERP Systems",
    "Odoo",
    "Mobile App Development",
    "Android Development",
    "Flutter",
    "Web Development",
    "Next.js",
    "Payment Integration",
    "M-Pesa",
    "KRA eTIMS",
    "Business Management Systems",
    "Server Hosting",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Finey Otieno Akwoyo",
  url: DATA.url,
  description: DATA.description,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DATA.faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Page() {
  return (
    <>
      {/* ── Structured data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex flex-col min-h-[100dvh] space-y-12">
        {/* ── 1. HERO ── */}
        <section id="hero" aria-label="Introduction">
          <div className="mx-auto w-full max-w-3xl space-y-6">
            <div className="gap-6 flex justify-between items-start">
              <div className="flex-col flex flex-1 space-y-4">
                {/* h1: critical for SEO */}
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {DATA.hero.headline}
                  </h1>
                </BlurFade>
                <BlurFadeText
                  className="max-w-[560px] md:text-xl text-muted-foreground"
                  delay={BLUR_FADE_DELAY * 2}
                  text={DATA.hero.sub}
                />
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <Link
                      href="#projects"
                      className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                      See my work
                    </Link>
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-md border border-primary/30 text-primary px-5 py-2.5 text-sm font-semibold hover:bg-primary/5 transition-colors"
                    >
                      Let&apos;s talk
                    </Link>
                  </div>
                </BlurFade>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Image
                  src="/logo.png"
                  alt="Finey Akwoyo, Software Developer"
                  width={112}
                  height={112}
                  className="size-24 sm:size-28 rounded-2xl object-contain border bg-white dark:bg-white/5 p-1 shrink-0"
                  priority
                />
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <p className="text-xs text-muted-foreground">{DATA.hero.proof}</p>
            </BlurFade>
          </div>
        </section>

        {/* ── 2. STATS ── */}
        <section id="stats" aria-label="Impact numbers">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="mx-auto w-full max-w-3xl grid grid-cols-3 gap-6 rounded-2xl border bg-primary/[0.03] dark:bg-primary/10 p-6">
              {DATA.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 text-center">
                  <CountingNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1800}
                    className="text-2xl sm:text-3xl font-black tracking-tight text-primary tabular-nums"
                  />
                  <span className="text-xs text-muted-foreground leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </BlurFade>
        </section>

        {/* ── 3. ABOUT ── */}
        <section id="about" aria-label="About Finey">
          <div className="mx-auto w-full max-w-3xl space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h2 className="text-xl font-bold">Hi, I&apos;m Finey.</h2>
            </BlurFade>
            {DATA.about.map((para, i) => (
              <BlurFade key={i} delay={BLUR_FADE_DELAY * (7 + i)}>
                <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                  {para}
                </Markdown>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* ── 4. SERVICES ── */}
        <section id="services" aria-label="Services">
          <div className="mx-auto w-full max-w-3xl space-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div>
                <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold mb-2">
                  Services
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  What I can do for you
                </h2>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DATA.services.map((service, i) => {
                const Icon = SERVICE_ICONS[i];
                return (
                  <BlurFade
                    key={service.title}
                    delay={BLUR_FADE_DELAY * (12 + i * 0.4)}
                  >
                    <article className="flex flex-col gap-2 p-4 rounded-xl border bg-card h-full hover:border-primary/30 transition-colors">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-4 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold text-sm">{service.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </article>
                  </BlurFade>
                );
              })}
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <p className="text-sm text-muted-foreground italic">
                Not sure what you need? Tell me your problem. I will tell you
                honestly what will help.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* ── 5. FEATURED PROJECTS ── */}
        <section id="projects" aria-label="Featured projects">
          <div className="mx-auto w-full max-w-3xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">
                  My Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Things I&apos;ve built
                </h2>
                <p className="text-muted-foreground">
                  Real products. Real users. Real results.
                </p>
              </div>
            </BlurFade>

            <div className="space-y-6">
              {DATA.projects.map((project, i) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * (17 + i * 0.5)}
                >
                  <article className="rounded-2xl border bg-card p-6 space-y-5 hover:border-primary/30 transition-colors">
                    {/* Title + link */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {project.tagline}
                        </p>
                      </div>
                      {project.links.length > 0 && (
                        <div className="flex gap-2 shrink-0">
                          {project.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline font-semibold whitespace-nowrap"
                            >
                              {link.type} →
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Three-column story */}
                    <div className="grid sm:grid-cols-3 gap-5">
                      <div className="space-y-2">
                        <p className="font-semibold text-xs uppercase tracking-widest text-muted-foreground">
                          The problem
                        </p>
                        <p className="text-sm leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-xs uppercase tracking-widest text-muted-foreground">
                          What I built
                        </p>
                        <ul className="space-y-1.5">
                          {project.built.map((item, j) => (
                            <li
                              key={j}
                              className="text-sm leading-relaxed flex gap-2"
                            >
                              <span className="text-primary mt-0.5 shrink-0">·</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-xs uppercase tracking-widest text-muted-foreground">
                          What happened
                        </p>
                        <ul className="space-y-1.5">
                          {project.results.map((result, j) => (
                            <li
                              key={j}
                              className="text-sm leading-relaxed flex gap-2"
                            >
                              <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. HOW I WORK ── */}
        <section id="how-i-work" aria-label="How I work">
          <div className="mx-auto w-full max-w-3xl space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 25}>
              <div>
                <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold mb-2">
                  Process
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  How I work
                </h2>
              </div>
            </BlurFade>

            <ol className="divide-y divide-border" aria-label="Work process steps">
              {DATA.howIWork.map((step, i) => {
                const Icon = HOW_ICONS[i];
                return (
                  <BlurFade
                    key={step.step}
                    delay={BLUR_FADE_DELAY * (26 + i * 0.5)}
                  >
                    <li className="flex gap-6 py-7 group">
                      <div className="shrink-0 w-12 text-right">
                        <span
                          className="text-5xl font-black leading-none select-none text-primary/10 group-hover:text-primary/20 transition-colors"
                          aria-hidden="true"
                        >
                          {step.step}
                        </span>
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <div className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                            <Icon className="size-4" aria-hidden="true" />
                          </div>
                          <h3 className="font-bold text-base">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed pl-12">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  </BlurFade>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ── 7. WHY WORK WITH ME ── */}
        <section id="why-me" aria-label="Why work with me">
          <div className="mx-auto w-full max-w-3xl space-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 30}>
              <div>
                <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold mb-2">
                  Why me
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Why work with me
                </h2>
              </div>
            </BlurFade>
            <div className="grid sm:grid-cols-2 gap-4">
              {DATA.whyWorkWithMe.map((point, i) => {
                const Icon = WHY_ICONS[i];
                return (
                  <BlurFade
                    key={point.title}
                    delay={BLUR_FADE_DELAY * (31 + i * 0.4)}
                  >
                    <div className="flex gap-3 p-5 rounded-2xl border bg-card h-full hover:border-primary/30 transition-colors">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 shrink-0 mt-0.5">
                        <Icon className="size-4 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{point.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ── */}
        <section id="faq" aria-label="Frequently asked questions">
          <div className="mx-auto w-full max-w-3xl space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 36}>
              <h2 className="text-xl font-bold">Common questions</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 37}>
              <div className="space-y-2" itemScope itemType="https://schema.org/FAQPage">
                {DATA.faq.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border bg-card"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-medium">
                      <span itemProp="name">{item.q}</span>
                      <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div
                      className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <span itemProp="text">{item.a}</span>
                    </div>
                  </details>
                ))}
              </div>
            </BlurFade>
          </div>
        </section>

        {/* ── 9. CONTACT ── */}
        <section id="contact" aria-label="Contact">
          <div className="mx-auto w-full max-w-3xl py-8">
            <BlurFade delay={BLUR_FADE_DELAY * 38}>
              <div className="rounded-2xl bg-primary/[0.04] dark:bg-primary/10 border border-primary/20 p-8 space-y-6">
                <div className="space-y-3">
                  <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">
                    Let&apos;s talk
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Have a problem in your business?
                    <br />
                    Let&apos;s fix it.
                  </h2>
                  <p className="text-muted-foreground max-w-md">
                    Tell me what is slowing you down. I will reply within hours
                    with honest advice. No pressure.
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="size-4 text-primary shrink-0" aria-hidden="true" />
                    <Link
                      href={`mailto:${DATA.contact.email}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {DATA.contact.email}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="size-4 text-primary shrink-0" aria-hidden="true" />
                    <Link
                      href={DATA.contact.social.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      {DATA.contact.tel} (WhatsApp)
                    </Link>
                  </div>
                </div>

                <Link
                  href={DATA.contact.social.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get your quote now →
                </Link>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  );
}

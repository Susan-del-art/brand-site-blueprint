import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ArrowRight, Bot, CalendarCheck, Megaphone, Workflow } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Susan Wakarindi — Executive Virtual Assistant & Operations Partner",
      },
      {
        name: "description",
        content:
          "Don't just work harder. Build better systems. Susan Wakarindi helps founders and executives move from operational chaos to organised, scalable systems.",
      },
      {
        property: "og:title",
        content: "Susan Wakarindi — Executive VA & Operations Partner",
      },
      {
        property: "og:description",
        content:
          "Executive support, operations systems, marketing coordination and AI automation for founders and growing businesses.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: CalendarCheck,
    title: "Executive support",
    body: "Calendar, inbox, travel and client management handled so your attention stays on decisions, not logistics.",
  },
  {
    icon: Workflow,
    title: "Operations & systems",
    body: "SOPs, workflows and documentation that turn recurring chaos into a process anyone on your team can run.",
  },
  {
    icon: Bot,
    title: "AI & automation",
    body: "Practical AI tools and no-code automations applied where they actually save hours — not for the sake of it.",
  },
  {
    icon: Megaphone,
    title: "Marketing coordination",
    body: "Content scheduling, LinkedIn presence and brand consistency, coordinated in your voice.",
  },
];

function Home() {
  return (
    <SiteLayout>
      <section className="grain">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
          <p className="eyebrow">
            Executive Virtual Assistant · Operations · Marketing · AI Systems
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] sm:text-6xl">
            Don't just work harder.
            <br />
            Build better systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I'm Susan Wakarindi — an Executive Virtual Assistant and Operations Partner. I
            help founders, executives and growing businesses move from operational chaos
            to organised, efficient, scalable ways of working.
          </p>
          <p className="accent-serif mt-4 text-xl text-[var(--navy)]">
            Structure creates freedom.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy)]"
            >
              Book a discovery call <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/25 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-background"
            >
              See the systems in action
            </Link>
          </div>

          <dl className="rule-gold mt-20 grid gap-8 pt-10 sm:grid-cols-3">
            {[
              ["5+ yrs", "Supporting executives and remote teams"],
              ["40+ hrs", "Given back to clients every month"],
              ["EAT / UTC+3", "Overlapping EU & US working hours"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-3xl font-semibold text-primary">{k}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow">What I take off your plate</p>
        <h2 className="mt-4 max-w-2xl text-3xl">
          Your business doesn't just need more people. It needs better systems.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-[var(--gold)]"
            >
              <p.icon className="size-6 text-[var(--gold)]" strokeWidth={1.5} />
              <h3 className="mt-6 text-xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
        <Link
          to="/services"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-[var(--gold)]"
        >
          Full services &amp; packages <ArrowRight className="size-4" />
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <figure className="rounded-3xl bg-primary p-10 text-[var(--beige)] md:p-14">
          <p className="eyebrow">Proof is stronger than claims</p>
          <blockquote className="accent-serif mt-6 text-2xl leading-snug text-[var(--beige)] md:text-3xl">
            "Susan rebuilt our client onboarding in two weeks and documented every step.
            Nothing slips anymore, and I stopped waking up to a 60-email inbox."
          </blockquote>
          <figcaption className="mt-6 text-sm text-[var(--beige)]/70">
            Founder, boutique brand studio
          </figcaption>
        </figure>
      </section>
    </SiteLayout>
  );
}

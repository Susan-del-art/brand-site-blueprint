import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ArrowRight, CalendarCheck, Inbox, LayoutGrid, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Susan Wakarindi — Virtual Assistant & Operations Support" },
      {
        name: "description",
        content:
          "Susan Wakarindi is a virtual assistant helping founders and small teams tame inboxes, calendars and admin systems so they can focus on the work that matters.",
      },
      { property: "og:title", content: "Susan Wakarindi — Virtual Assistant" },
      {
        property: "og:description",
        content:
          "Calm, systems-led virtual assistance: inbox and calendar management, client care, and back-office operations.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Inbox,
    title: "Inbox & calendar",
    body: "Zero-inbox routines, triage rules and a calendar that protects your deep work.",
  },
  {
    icon: LayoutGrid,
    title: "Systems & SOPs",
    body: "Documented workflows in Notion, Asana or ClickUp so nothing lives only in your head.",
  },
  {
    icon: CalendarCheck,
    title: "Client care",
    body: "Onboarding, follow-ups and invoicing handled on time, in your tone of voice.",
  },
];

function Home() {
  return (
    <SiteLayout>
      <section className="grain">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
          <p className="eyebrow">Virtual Assistant · Operations Support</p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] sm:text-6xl md:text-7xl">
            I keep the details in order so you can stay in your genius zone.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I'm Susan Wakarindi — a virtual assistant for founders, coaches and small
            teams. Part second brain, part quiet operator: inbox, calendar, clients and
            the systems that hold it all together.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a discovery call <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:bg-accent"
            >
              See how I work
            </Link>
          </div>

          <dl className="mt-20 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
            {[
              ["5+ yrs", "Supporting remote teams"],
              ["40+ hrs", "Given back to clients monthly"],
              ["EAT / UTC+3", "Overlapping EU & US mornings"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-3xl text-primary">{k}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow">What I take off your plate</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <p.icon className="size-6 text-primary" />
              <h2 className="mt-6 text-xl">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
        <Link
          to="/services"
          className="mt-10 inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          Full services &amp; packages <ArrowRight className="size-4" />
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <figure className="rounded-3xl border border-border bg-card p-10 md:p-14">
          <Sparkles className="size-6 text-primary" />
          <blockquote className="mt-6 font-display text-2xl leading-snug md:text-3xl">
            "Susan rebuilt our client onboarding in two weeks. Nothing slips anymore, and
            I stopped waking up to a 60-email inbox."
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted-foreground">
            Founder, boutique brand studio
          </figcaption>
        </figure>
      </section>
    </SiteLayout>
  );
}

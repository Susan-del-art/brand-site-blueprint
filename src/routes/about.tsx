import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Susan Wakarindi — Executive VA & Operations Partner" },
      {
        name: "description",
        content:
          "Susan Wakarindi's story: from administration into executive support, operations, marketing, AI and automation — helping businesses work with structure, not stress.",
      },
      { property: "og:title", content: "About Susan Wakarindi" },
      {
        property: "og:description",
        content:
          "Professional, warm and practical support for founders and executives — built on systems, not heroics.",
      },
    ],
  }),
  component: About,
});

const values = [
  ["Excellence", "Don't just complete tasks — deliver work that creates real value."],
  ["Reliability", "Be someone clients and teams can trust to follow through."],
  ["Growth", "Continuously learn, adapt and improve with the tools available."],
  ["Innovation", "Use technology and AI to make work smarter, not more complicated."],
  ["Integrity", "Communicate honestly, take responsibility, do the right thing."],
  ["Collaboration", "Work alongside you — not simply execute instructions."],
];

const tools = [
  "Google Workspace",
  "Microsoft 365",
  "Notion",
  "Asana",
  "ClickUp",
  "Slack",
  "Trello",
  "Canva",
  "Calendly",
  "QuickBooks",
  "Zapier / Make",
  "ChatGPT & AI assistants",
];

function About() {
  return (
    <SiteLayout>
      <section className="grain">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <p className="eyebrow">About</p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
            From operational chaos to systems that hold.
          </h1>
          <p className="accent-serif mt-5 text-xl text-[var(--navy)]">
            Behind every well-organised executive is a system that works.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm Susan Wakarindi, an Executive Virtual Assistant and Operations Partner
            working with founders, executives and small businesses. My path has moved with
            the digital workplace — from administrative and technology skills into
            executive support, operations, marketing, AI and automation.
          </p>
          <p>
            What I've learned along the way is simple: most teams aren't short on effort,
            they're short on structure. So my work is to absorb the load first, then
            design it away — the triage rules, SOPs, trackers and automations that keep
            the volume down permanently.
          </p>
          <p>
            I also believe professionals shouldn't be afraid to reinvent themselves.
            Alongside client work I share practical lessons with virtual assistants,
            freelancers and women building digital careers, because proof and teaching
            beat claims every time.
          </p>
          <p>
            I work in East Africa Time, which overlaps comfortably with European mornings
            and early US hours, and I communicate in short, predictable updates so you
            never have to chase me for a status.
          </p>
        </div>

        <aside className="space-y-8 rounded-2xl bg-card p-8">
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--gold)]">
              Credentials
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Certified Virtual Assistant — ALX Virtual Assistant Programme</li>
              <li>Google Workspace &amp; project management essentials</li>
              <li>AI tools, prompting &amp; no-code automation practice</li>
              <li>Bookkeeping fundamentals (QuickBooks Online)</li>
              <li>5+ years remote administrative &amp; operations experience</li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--gold)]">
              Specialties
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Operations · Executive Support · Marketing · AI · Automation · Digital
              Systems
            </p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--gold)]">
              Languages
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">English, Kiswahili</p>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="eyebrow">Core values</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="eyebrow">Tools I work in</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          to="/contact"
          className="mt-12 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy)]"
        >
          Work with me
        </Link>
      </section>
    </SiteLayout>
  );
}

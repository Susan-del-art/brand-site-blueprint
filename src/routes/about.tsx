import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Susan Wakarindi — Systems-Led Virtual Assistant" },
      {
        name: "description",
        content:
          "How Susan Wakarindi works: a calm, detail-obsessed virtual assistant with 5+ years supporting remote founders across admin, operations and client care.",
      },
      { property: "og:title", content: "About Susan Wakarindi" },
      {
        property: "og:description",
        content:
          "A calm, systems-led virtual assistant supporting remote founders and small teams.",
      },
    ],
  }),
  component: About,
});

const values = [
  ["Clarity over busywork", "If a task doesn't move something forward, we question it."],
  ["Systems, not heroics", "Every recurring task becomes a documented, repeatable process."],
  ["Discreet by default", "Your inbox, clients and numbers stay confidential. Always."],
];

const tools = [
  "Google Workspace",
  "Notion",
  "Asana",
  "ClickUp",
  "Slack",
  "Trello",
  "Canva",
  "Calendly",
  "QuickBooks",
  "Zoom",
  "Mailchimp",
  "Zapier",
];

function About() {
  return (
    <SiteLayout>
      <section className="grain">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <p className="eyebrow">About</p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">
            A steady pair of hands behind busy, growing businesses.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm Susan Wakarindi, a Nairobi-based virtual assistant working with founders,
            consultants and small teams around the world. I started out in administration
            and client service, and quickly noticed the same pattern everywhere: talented
            people drowning in follow-ups, scheduling and small decisions.
          </p>
          <p>
            My work is to absorb that load — and then design it away. I don't just answer
            emails; I build the triage rules, templates and trackers that keep the volume
            down permanently. Clients usually feel the difference in the first fortnight.
          </p>
          <p>
            I work in East Africa Time, which overlaps comfortably with European mornings
            and early US hours, and I communicate in short, predictable updates so you
            never have to chase me for a status.
          </p>
        </div>

        <aside className="space-y-8">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-primary">Credentials</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Certified Virtual Assistant — ALX / Virtual Assistant Programme</li>
              <li>Google Workspace &amp; Project Management essentials</li>
              <li>Bookkeeping fundamentals (QuickBooks Online)</li>
              <li>5+ years remote administrative &amp; operations experience</li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-widest text-primary">Languages</h2>
            <p className="mt-4 text-sm text-muted-foreground">English, Kiswahili</p>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="eyebrow">Tools I live in</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          to="/contact"
          className="mt-12 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Work with me
        </Link>
      </section>
    </SiteLayout>
  );
}

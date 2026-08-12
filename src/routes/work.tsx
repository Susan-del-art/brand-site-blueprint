import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Case Studies — Susan Wakarindi, Virtual Assistant" },
      {
        name: "description",
        content:
          "Before-and-after stories: inbox rescues, client onboarding rebuilds and back-office clean-ups delivered for remote founders and small teams.",
      },
      { property: "og:title", content: "Work & Case Studies — Susan Wakarindi" },
      {
        property: "og:description",
        content:
          "Inbox rescues, onboarding rebuilds and back-office clean-ups, with the numbers behind them.",
      },
    ],
  }),
  component: Work,
});

const cases = [
  {
    client: "Boutique brand studio",
    title: "Client onboarding rebuilt in two weeks",
    before: "New clients waited 5+ days for a kickoff; details lived in three inboxes.",
    after:
      "A single Notion pipeline with templated welcome emails, contracts and kickoff scheduling.",
    result: ["Kickoff time 5 days → 24 hrs", "0 missed handovers in 6 months"],
  },
  {
    client: "Independent coach",
    title: "Inbox rescue and weekly rhythm",
    before: "1,800 unread emails, missed discovery calls, no follow-up on proposals.",
    after:
      "Triage labels, saved replies, and a Monday briefing that surfaces only decisions.",
    result: ["Inbox to zero weekly", "38% more proposals followed up"],
  },
  {
    client: "SaaS consultancy",
    title: "Back office tidy-up",
    before: "Invoices sent late, receipts scattered, no view of unpaid work.",
    after:
      "Invoicing calendar, receipt filing routine and a live payments tracker in Sheets.",
    result: ["Average payment 46 → 21 days", "8 hrs/month saved for the founder"],
  },
];

function Work() {
  return (
    <SiteLayout>
      <section className="grain">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <p className="eyebrow">Selected work</p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">
            Quiet work, measurable results.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Admin work rarely photographs well — so here's the before, the after, and the
            numbers. Client names withheld for confidentiality.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6 py-10">
        {cases.map((c) => (
          <article
            key={c.title}
            className="grid gap-8 rounded-3xl border border-border bg-card p-8 md:grid-cols-[1fr_1.2fr] md:p-12"
          >
            <div>
              <p className="eyebrow">{c.client}</p>
              <h2 className="mt-4 text-2xl leading-snug">{c.title}</h2>
              <ul className="mt-6 space-y-2">
                {c.result.map((r) => (
                  <li key={r} className="text-sm text-primary">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
              <div>
                <p className="text-xs uppercase tracking-widest text-foreground">Before</p>
                <p className="mt-2">{c.before}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-foreground">After</p>
                <p className="mt-2">{c.after}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link
          to="/contact"
          className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Tell me about your bottleneck
        </Link>
      </section>
    </SiteLayout>
  );
}

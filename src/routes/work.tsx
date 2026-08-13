import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Case Studies — Susan Wakarindi, Executive VA & Operations" },
      {
        name: "description",
        content:
          "Real examples: onboarding rebuilds, inbox and calendar systems, automated back-office workflows — with the problem, the system built and the result.",
      },
      { property: "og:title", content: "Work & Case Studies — Susan Wakarindi" },
      {
        property: "og:description",
        content:
          "Systems built for founders and executives, with the numbers behind them. Proof is stronger than claims.",
      },
    ],
  }),
  component: Work,
});

const cases = [
  {
    client: "Boutique brand studio",
    title: "Client onboarding rebuilt in two weeks",
    before: "New clients waited 5+ days for kickoff; details lived in three inboxes.",
    after:
      "A single Notion pipeline with templated welcome emails, contracts, SOPs and automated kickoff scheduling.",
    result: ["Kickoff time 5 days → 24 hrs", "0 missed handovers in 6 months"],
  },
  {
    client: "Independent coach",
    title: "Inbox system and weekly operating rhythm",
    before: "1,800 unread emails, missed discovery calls, no follow-up on proposals.",
    after:
      "Triage labels, AI-assisted saved replies, and a Monday briefing that surfaces only decisions.",
    result: ["Inbox to zero weekly", "38% more proposals followed up"],
  },
  {
    client: "SaaS consultancy",
    title: "Back office automated and documented",
    before: "Invoices sent late, receipts scattered, no view of unpaid work.",
    after:
      "Invoicing calendar, automated receipt filing and a live payments tracker with owner-ready reporting.",
    result: ["Average payment 46 → 21 days", "8 hrs/month saved for the founder"],
  },
];

function Work() {
  return (
    <SiteLayout>
      <section className="grain">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <p className="eyebrow">Selected work</p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
            Proof is stronger than claims.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Operations work rarely photographs well — so here's the problem, the system
            built, and the result. Client names withheld for confidentiality.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6 py-14">
        {cases.map((c) => (
          <article
            key={c.title}
            className="grid gap-8 rounded-3xl border border-border bg-card p-8 md:grid-cols-[1fr_1.2fr] md:p-12"
          >
            <div>
              <p className="eyebrow">{c.client}</p>
              <h2 className="mt-4 text-2xl leading-snug">{c.title}</h2>
              <ul className="rule-gold mt-6 space-y-2 pt-5">
                {c.result.map((r) => (
                  <li key={r} className="text-sm font-semibold text-primary">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                  The problem
                </p>
                <p className="mt-2">{c.before}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                  The system
                </p>
                <p className="mt-2">{c.after}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link
          to="/contact"
          className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy)]"
        >
          Tell me about your bottleneck
        </Link>
      </section>
    </SiteLayout>
  );
}

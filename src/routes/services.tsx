import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Packages — Susan Wakarindi, Virtual Assistant" },
      {
        name: "description",
        content:
          "Executive admin, inbox and calendar management, client onboarding, bookkeeping support and operations systems — monthly retainers and project sprints.",
      },
      { property: "og:title", content: "Virtual Assistant Services — Susan Wakarindi" },
      {
        property: "og:description",
        content:
          "Retainers and project sprints for inbox, calendar, client care, bookkeeping support and operations systems.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    title: "Executive & inbox support",
    items: [
      "Email triage, drafting and follow-up",
      "Calendar management and scheduling",
      "Travel and meeting logistics",
      "Weekly priority briefings",
    ],
  },
  {
    title: "Client & project operations",
    items: [
      "Client onboarding and offboarding flows",
      "Task boards kept current (Asana, ClickUp, Notion)",
      "Deadline tracking and gentle chasing",
      "SOP writing and documentation",
    ],
  },
  {
    title: "Back office & bookkeeping support",
    items: [
      "Invoicing and payment follow-up",
      "Expense logging and receipt filing",
      "Vendor and subscription tracking",
      "Monthly admin reporting",
    ],
  },
  {
    title: "Content & community admin",
    items: [
      "Newsletter scheduling and formatting",
      "Social post scheduling from your assets",
      "Basic Canva design tidy-ups",
      "Inbox and DM responses in your voice",
    ],
  },
];

const packages = [
  {
    name: "Essentials",
    hours: "20 hrs / month",
    price: "from $450",
    for: "Solo founders who need the inbox and calendar handled.",
  },
  {
    name: "Partner",
    hours: "40 hrs / month",
    price: "from $850",
    for: "Growing teams needing client ops plus admin.",
    featured: true,
  },
  {
    name: "Systems sprint",
    hours: "2–3 weeks",
    price: "from $600",
    for: "One-off: document and rebuild a messy workflow.",
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="grain">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <p className="eyebrow">Services</p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">
            Support that scales with you — never more process than you need.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-xl">{s.title}</h2>
            <ul className="mt-5 space-y-3">
              {s.items.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow">Ways to work together</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-8 ${
                p.featured
                  ? "border-primary/60 bg-card"
                  : "border-border bg-background"
              }`}
            >
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.hours}</p>
              <p className="mt-6 text-xl text-primary">{p.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.for}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          All engagements start with a free 30-minute discovery call and a two-week trial
          period.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Start with a call
        </Link>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Packages — Susan Wakarindi, Executive VA" },
      {
        name: "description",
        content:
          "Executive support, operations and SOPs, AI and automation, marketing coordination and back-office support — monthly retainers and focused systems sprints.",
      },
      {
        property: "og:title",
        content: "Executive VA & Operations Services — Susan Wakarindi",
      },
      {
        property: "og:description",
        content:
          "Retainers and sprints for executive support, operations systems, AI automation and marketing coordination.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    title: "Executive support & virtual assistance",
    items: [
      "Email triage, drafting and follow-up",
      "Calendar management and scheduling",
      "Travel and meeting logistics",
      "Client management and weekly priority briefings",
    ],
  },
  {
    title: "Operations & systems",
    items: [
      "SOP writing and documentation",
      "Workflow and project management (Asana, ClickUp, Notion)",
      "Process improvement and delegation planning",
      "Onboarding and offboarding flows",
    ],
  },
  {
    title: "AI & automation",
    items: [
      "AI-assisted drafting, research and summaries",
      "No-code automations (Zapier, Make)",
      "AI-powered workflows for repeat admin",
      "Tool selection and practical team training",
    ],
  },
  {
    title: "Marketing & personal branding support",
    items: [
      "LinkedIn presence and content scheduling",
      "Social media coordination from your assets",
      "Newsletter formatting and distribution",
      "Brand-consistent Canva design tidy-ups",
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
    title: "Documentation & business organisation",
    items: [
      "Central knowledge base setup",
      "File structure and naming standards",
      "Tracker and dashboard building",
      "Handover packs your team can actually use",
    ],
  },
];

const packages = [
  {
    name: "Essentials",
    hours: "20 hrs / month",
    price: "from $450",
    for: "Founders who need the inbox, calendar and follow-ups handled.",
  },
  {
    name: "Operations Partner",
    hours: "40 hrs / month",
    price: "from $850",
    for: "Growing teams needing executive support plus running operations.",
    featured: true,
  },
  {
    name: "Systems sprint",
    hours: "2–3 weeks",
    price: "from $600",
    for: "One-off: document, automate and rebuild a messy workflow.",
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="grain">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <p className="eyebrow">Services</p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
            Support, structure and smarter ways of working.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            I don't just manage tasks. I help create the structure that makes work easier
            to manage and businesses easier to grow.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-xl">{s.title}</h2>
            <ul className="mt-5 space-y-3">
              {s.items.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-[var(--gold)]" />
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
                  ? "border-[var(--gold)] bg-card"
                  : "border-border bg-background"
              }`}
            >
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.hours}</p>
              <p className="mt-6 text-xl font-semibold text-[var(--gold)]">{p.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.for}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Every engagement starts with a free 30-minute discovery call and a two-week
          trial period.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy)]"
        >
          Start with a call
        </Link>
      </section>
    </SiteLayout>
  );
}

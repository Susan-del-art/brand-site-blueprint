import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Clock, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Susan Wakarindi — Book a Discovery Call" },
      {
        name: "description",
        content:
          "Tell Susan Wakarindi what's slowing your operations down and book a free 30-minute discovery call. Remote support worldwide, based in Nairobi (UTC+3).",
      },
      { property: "og:title", content: "Contact Susan Wakarindi" },
      {
        property: "og:description",
        content:
          "Book a free 30-minute discovery call for executive support, operations systems and AI-powered workflows.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", need: "", message: "" });

  const field =
    "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-[var(--gold)]";

  return (
    <SiteLayout>
      <section className="grain">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
            Let's find the hours hiding in your week.
          </h1>
          <p className="accent-serif mt-5 text-xl text-[var(--navy)]">
            Work Smarter. Operate Better. Grow Further.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">

          {sent ? (
            <div>
              <h2 className="text-2xl">Thank you, {form.name || "friend"}.</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Your message is with me. I reply to every enquiry within one business day
                with times for a discovery call.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm">
                  Your name
                  <input
                    required
                    className={field}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label className="block text-sm">
                  Email
                  <input
                    required
                    type="email"
                    className={field}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </label>
              </div>
              <label className="mt-6 block text-sm">
                What do you need help with?
                <select
                  className={field}
                  value={form.need}
                  onChange={(e) => setForm({ ...form, need: e.target.value })}
                >
                  <option value="">Choose one</option>
                  <option>Inbox &amp; calendar support</option>
                  <option>Client &amp; project operations</option>
                  <option>Back office &amp; bookkeeping</option>
                  <option>Content &amp; community admin</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="mt-6 block text-sm">
                A little context
                <textarea
                  rows={5}
                  className={field}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>
              <button
                type="submit"
                className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Send message
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-6 text-sm text-muted-foreground">
          <p className="flex items-start gap-3">
            <Mail className="mt-0.5 size-4 text-primary" />
            <a className="hover:text-foreground" href="mailto:hello@susanwakarindi.com">
              hello@susanwakarindi.com
            </a>
          </p>
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-4 text-primary" />
            Nairobi, Kenya — working with clients worldwide
          </p>
          <p className="flex items-start gap-3">
            <Clock className="mt-0.5 size-4 text-primary" />
            Mon–Fri, 8am–5pm EAT (UTC+3). Replies within one business day.
          </p>
        </aside>
      </section>
    </SiteLayout>
  );
}

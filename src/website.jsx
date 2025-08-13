import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Hotel, Sparkles, Mail, Phone, Users, Building2, ArrowRight, Rocket, Database, Workflow, Heart, HeartHandshake, LineChart, BadgeCheck } from "lucide-react";

// --- Lightweight UI primitives (so this runs anywhere without a design system) ---
// TailwindCSS assumed per instructions. Replace with your system if needed.
const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>
);

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>
);

const CTAButton = ({ children, href = "#contact", onClick, variant = "primary" }) => (
  <a
    href={href}
    onClick={onClick}
    className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all md:text-base shadow-sm ${
      variant === "primary"
        ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
        : "bg-white text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50"
    }`}
  >
    {children}
  </a>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm ${className}`}>{children}</div>
);

// --- Page ---
export default function CPRVPhase1Site() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen scroll-smooth bg-slate-50 text-slate-800">
      {/* Top gradient / background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-80 w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-cyan-100 to-amber-100 blur-3xl opacity-70" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-amber-500" />
            <span className="text-lg font-bold tracking-tight">CPR Vision</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#what" className="text-sm hover:text-blue-700">What we do</a>
            <a href="#industries" className="text-sm hover:text-blue-700">Who we work with</a>
            <a href="#about" className="text-sm hover:text-blue-700">About</a>
            <CTAButton>Book a demo</CTAButton>
          </nav>
        </Container>
      </header>

      {/* Hero */}
      <Section id="home" className="pt-10">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-extrabold tracking-tight md:text-5xl"
            >
              Turning customer data into <span className="text-blue-700">lasting loyalty</span>
            </motion.h1>
            <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
              We help <strong>hotel</strong> and <strong>beauty</strong> brands use their data to build stronger relationships, increase loyalty, and drive repeat purchases — combining the right technology with expert human support.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CTAButton>
                Book a demo <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <CTAButton variant="secondary" href="#what">
                See how we work
              </CTAButton>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-4">
              {["CRM", "Loyalty", "Campaigns"].map((k) => (
                <Card key={k} className="flex items-center justify-center py-4 text-sm font-semibold">
                  {k}
                </Card>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border border-slate-200 bg-white shadow-md" />
            <div className="absolute -right-6 -top-6 rounded-2xl border border-blue-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Database className="text-blue-600" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Data in action</p>
                  <p className="text-sm font-semibold">Segmentation • Journeys • ROI</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sector callouts */}
      <Section className="py-10">
        <Container className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-700"><Hotel /></div>
              <div>
                <h3 className="text-lg font-bold">Hospitality</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Improve guest retention, personalise offers, and increase direct bookings with CRM and loyalty tuned for hotel groups and resorts.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600"/>Guest 360 & segmentation</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600"/>Loyalty tiers & member benefits</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600"/>Journey orchestration</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-amber-50 p-3 text-amber-600"><Sparkles /></div>
              <div>
                <h3 className="text-lg font-bold">Beauty & Cosmetics</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Understand purchase behaviour, boost repeat buys, and turn shoppers into advocates across retail and e‑commerce.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600"/>Omnichannel profiles</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600"/>Reward mechanics that convert</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600"/>Automated campaigns</li>
                </ul>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* What we do */}
      <Section id="what" className="bg-white">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">What we do</h2>
            <p className="mt-3 text-slate-700">
              We combine <strong>CRM and loyalty technology</strong> with hands‑on <strong>campaign planning</strong> to turn strategy into action.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <div className="flex items-start gap-3">
                <BadgeCheck className="text-blue-600" />
                <div>
                  <h3 className="font-semibold">CRM for growth</h3>
                  <p className="mt-2 text-sm text-slate-700">Secure, scalable data foundations, guest/customer 360 and actionable segments.</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <HeartHandshake className="text-amber-600" />
                <div>
                  <h3 className="font-semibold">Loyalty that works</h3>
                  <p className="mt-2 text-sm text-slate-700">Tiers, points, perks and partnerships that actually move the needle.</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <Workflow className="text-green-600" />
                <div>
                  <h3 className="font-semibold">Campaign planning</h3>
                  <p className="mt-2 text-sm text-slate-700">From idea to inbox — journeys, offers and creative QA with clear ROI.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* How we work */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: <Heart className="text-blue-700" />, title: "Consultative", desc: "We start with your goals and constraints to shape the right approach." },
              { icon: <Rocket className="text-amber-600" />, title: "Fast to value", desc: "Phase‑based delivery to show results early and often." },
              { icon: <LineChart className="text-emerald-600" />, title: "Impact‑focused", desc: "We track what matters — retention, frequency, and CLV uplift." },
            ].map((item) => (
              <Card key={item.title}>
                <div className="flex items-start gap-3">
                  {item.icon}
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm text-slate-700">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <CTAButton>Book a demo</CTAButton>
          </div>
        </Container>
      </Section>

      {/* Industries */}
      <Section id="industries">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Who we work with</h2>
            <p className="mt-3 text-slate-700">We focus on two sectors where relationships matter most.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <div className="flex items-start gap-4">
                <Building2 className="text-blue-700" />
                <div>
                  <h3 className="font-semibold">Hotels & Hospitality Chains</h3>
                  <p className="mt-2 text-sm text-slate-700">Direct bookings, membership growth, and personalised guest journeys across brands and properties.</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-4">
                <Users className="text-amber-600" />
                <div>
                  <h3 className="font-semibold">Beauty & Cosmetics Brands</h3>
                  <p className="mt-2 text-sm text-slate-700">Unified customer profiles, repeat purchase programs, and automated lifecycle campaigns.</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* About */}
      <Section id="about" className="bg-white">
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">About CPR Vision</h2>
              <p className="mt-3 text-slate-700">
                We’re a CRM and campaign planning partner with sector expertise. Unlike generic systems or agencies, we combine the right technology with expert support to turn strategy into action.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600"/>Digital‑first, human‑led.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600"/>Consultative, flexible and focused on impact.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600"/>Trusted by hospitality and beauty leaders.</li>
              </ul>
            </div>
            <Card>
              <h3 className="text-lg font-bold">Quick facts</h3>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-slate-500">Core services</p>
                  <p className="mt-1 font-semibold">CRM • Loyalty • Campaigns</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-slate-500">Focus sectors</p>
                  <p className="mt-1 font-semibold">Hospitality • Beauty</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-slate-500">Approach</p>
                  <p className="mt-1 font-semibold">Phase‑based, ROI‑driven</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-slate-500">Engagement</p>
                  <p className="mt-1 font-semibold">Consultative + Managed</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Let’s build something great</h2>
              <p className="mt-3 text-slate-700">Tell us a little about your goals and we’ll set up a quick demo.</p>
              <div className="mt-6 space-y-2 text-sm text-slate-700">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-700"/> demo@cprvision.com</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-blue-700"/> +65 •••• ••••</p>
              </div>
            </div>

            <Card>
              {!submitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input required type="text" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Company</label>
                    <input type="text" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input required type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Tell us what you’d like to achieve" />
                  </div>
                  <div className="flex items-center justify-between">
                    <button type="submit" className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-200">
                      Send enquiry <ArrowRight className="h-4 w-4" />
                    </button>
                    {/* Mailto fallback */}
                    <a href="mailto:demo@cprvision.com?subject=Demo%20Request%20from%20Website" className="text-sm text-blue-700 hover:underline">or email us directly</a>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <h4 className="text-lg font-bold">Thanks! We’ll be in touch.</h4>
                  <p className="mt-2 text-sm text-slate-700">Your enquiry has been captured.</p>
                </div>
              )}
            </Card>
          </div>
        </Container>
      </Section>

      <footer className="border-t border-slate-200 bg-white py-10 text-sm">
        <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-slate-600">© {new Date().getFullYear()} CPR Vision. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#what" className="hover:text-blue-700">Services</a>
            <a href="#industries" className="hover:text-blue-700">Sectors</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}

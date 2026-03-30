'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleDashed, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { FadeIn } from './motion-wrapper';
import { SectionHeading } from './section-heading';
import { MetricsCard } from './cards';

export function HeroSection() {
  const tags = ['AI Workflows', 'Automation', 'Product Strategy', 'Business Analysis', 'SaaS Systems'];
  return (
    <section className="section grid items-center gap-12 lg:grid-cols-2">
      <FadeIn>
        <span className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-300">AI Product Portfolio</span>
        <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
          Building <span className="gradient-text">AI-Powered Products</span> & Automation Solutions
        </h1>
        <p className="mt-5 max-w-xl text-slate-300">
          Product Owner / Business Analyst with expertise in AI workflows, automation systems, SaaS thinking, and business-first product design.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/projects" className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-medium text-white">Explore Projects</Link>
          <Link href="/contact" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-medium">Get In Touch</Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{tag}</span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.1} className="glass relative overflow-hidden rounded-3xl p-6">
        <div className="h-72 rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10" />
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="glass rounded-xl p-3 text-sm text-slate-300">Workflow Visibility: 92%</div>
          <div className="glass rounded-xl p-3 text-sm text-slate-300">Automation Coverage: 68%</div>
        </div>
      </FadeIn>
    </section>
  );
}

export function HowIWork() {
  const steps = [
    'Identify Business Problem',
    'Design Workflow / Solution',
    'Build AI Logic / Automation',
    'Deliver Business Value',
  ];
  return (
    <section className="section">
      <SectionHeading eyebrow="Execution Model" title="How I Work" description="Structured product lifecycle from discovery to measurable AI-enabled outcomes." />
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <FadeIn key={step} delay={index * 0.04} className="glass rounded-2xl p-5">
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-sm text-blue-300">{index + 1}</div>
            <p className="text-sm font-medium">{step}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function TestimonialPlaceholder() {
  return (
    <section className="section">
      <SectionHeading eyebrow="Trust & Proof" title="Built for Clients, Teams, and Product Leaders" description="Placeholder section for future client feedback, logos, and social validation." />
      <div className="grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="glass rounded-2xl p-6">
            <CircleDashed className="text-slate-500" />
            <p className="mt-4 text-sm text-slate-300">Placeholder trust card for testimonial quote, company logo, or measurable success story.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="section">
      <div className="relative overflow-hidden rounded-3xl border border-blue-400/30 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-cyan-600/20 p-8 md:p-10">
        <h3 className="text-3xl font-semibold">Let&apos;s Build Smarter Products with AI</h3>
        <p className="mt-3 max-w-xl text-slate-300">Open to product, automation, and AI solution opportunities.</p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium">
          Contact Me <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

export function TimelineSection() {
  const milestones = ['Enterprise Product Work', 'SaaS / Platform Experience', 'AI Product Building', 'Automation Projects'];
  return (
    <div className="space-y-5">
      {milestones.map((item) => (
        <div key={item} className="glass relative rounded-2xl p-5 pl-12">
          <CheckCircle2 className="absolute left-4 top-5 text-cyan-300" size={18} />
          <p className="font-medium">{item}</p>
          <p className="mt-1 text-sm text-slate-300">Placeholder details for achievements, scope, and business outcomes.</p>
        </div>
      ))}
    </div>
  );
}

export function ContactForm() {
  const fields = ['Name', 'Email', 'Subject'];
  return (
    <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-semibold">Send a Message</h3>
        <div className="mt-4 grid gap-3">
          {fields.map((field) => (
            <input key={field} placeholder={field} className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-blue-400" />
          ))}
          <textarea placeholder="Message" rows={5} className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-blue-400" />
          <button className="rounded-xl bg-blue-500 px-4 py-3 text-sm font-medium">Send Message</button>
        </div>
      </div>
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-semibold">Contact Details</h3>
        <div className="mt-4 space-y-4 text-sm text-slate-300">
          <p className="flex items-center gap-2"><Mail size={16} /> hello@ai-product-portfolio.com</p>
          <p className="flex items-center gap-2"><Linkedin size={16} /> linkedin.com/in/placeholder</p>
          <p className="flex items-center gap-2"><Github size={16} /> github.com/placeholder</p>
          <p className="flex items-center gap-2"><MapPin size={16} /> United States (Remote Friendly)</p>
        </div>
        <p className="mt-6 rounded-xl bg-violet-500/10 p-3 text-sm text-violet-200">Open to Product / AI / Automation Opportunities.</p>
      </div>
    </div>
  );
}

export function CaseStudySection({ title, children, icon: Icon }) {
  return (
    <section className="glass rounded-2xl p-6">
      <div className="mb-3 flex items-center gap-2">
        {Icon ? <Icon size={18} className="text-cyan-300" /> : null}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="text-sm leading-6 text-slate-300">{children}</div>
    </section>
  );
}

export function ImpactMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <MetricsCard label="Process Time Reduction" value="42%" />
      <MetricsCard label="Requirement Clarity Increase" value="3.1x" />
      <MetricsCard label="Delivery Velocity Improvement" value="28%" />
    </div>
  );
}

'use client';

import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { FadeIn } from './motion-wrapper';

export function FeatureCard({ title, description, Icon, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <Icon className="mb-4 text-cyan-300" size={26} />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </FadeIn>
  );
}

export function ProjectCard({ project, detailHref = `/projects/${project.slug}` }) {
  return (
    <FadeIn className="glass group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300/40">
      <div className="mb-4 h-40 rounded-xl border border-dashed border-white/20 bg-slate-900/70" />
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span className="rounded-full bg-blue-400/10 px-3 py-1 text-xs text-blue-300">{project.category}</span>
      </div>
      <p className="text-sm text-slate-400">{project.problem}</p>
      <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-white/10 px-2 py-1 text-xs text-slate-300">
            {item}
          </span>
        ))}
      </div>
      <Link href={detailHref} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-white">
        View Case Study <ArrowRight size={16} />
      </Link>
    </FadeIn>
  );
}

export function FilterBar() {
  const filters = ['All', 'AI Products', 'Automation', 'EdTech', 'Ecommerce', 'BA/PO Tools'];
  return (
    <div className="mb-10 space-y-4">
      <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
        <Search size={18} className="text-slate-400" />
        <input
          aria-label="Search projects"
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          placeholder="Search projects by keyword, domain, or workflow..."
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter, i) => (
          <button
            key={filter}
            className={`rounded-full px-4 py-2 text-sm transition ${i === 0 ? 'bg-blue-500 text-white' : 'glass text-slate-300 hover:text-white'}`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export function MetricsCard({ label, value }) {
  return (
    <div className="glass rounded-2xl p-5 text-center">
      <p className="text-2xl font-semibold gradient-text">{value}</p>
      <p className="mt-1 text-sm text-slate-300">{label}</p>
    </div>
  );
}

export function BlogCard({ title, category, summary }) {
  return (
    <div className="glass rounded-2xl p-5 transition hover:-translate-y-1">
      <div className="mb-4 h-36 rounded-xl border border-dashed border-white/20" />
      <span className="text-xs uppercase tracking-wide text-cyan-300">{category}</span>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{summary}</p>
      <button className="mt-4 text-sm font-medium text-blue-300">Read More →</button>
    </div>
  );
}

export function DemoCard({ title, summary }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="h-10 w-10 rounded-lg border border-white/20" />
        <span className="rounded-full bg-violet-400/15 px-2 py-1 text-xs text-violet-300">Beta</span>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{summary}</p>
      <div className="mt-4 flex gap-2">
        <button className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium">Try Demo</button>
        <button className="rounded-lg border border-white/20 px-3 py-2 text-sm">View Case Study</button>
      </div>
    </div>
  );
}

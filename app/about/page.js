import { FeatureCard } from '@/components/cards';
import { TimelineSection } from '@/components/sections';
import { SectionHeading } from '@/components/section-heading';
import { features } from '@/lib/data';

export default function AboutPage() {
  const snapshot = [
    ['Years of Experience', '8+ Years in product and analysis roles'],
    ['Domains Worked In', 'EdTech, ecommerce, enterprise SaaS, operations'],
    ['AI / Automation Focus', 'AI workflows, copilots, process automation design'],
    ['Product & BA Skills', 'Discovery, roadmap, requirements, stakeholder alignment'],
  ];

  return (
    <div className="section space-y-12">
      <section>
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="Product Owner / Business Analyst transitioning deeply into AI-powered product and automation systems, bridging business goals with practical technical execution."
        />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Professional Snapshot</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {snapshot.map(([title, text]) => (
            <div key={title} className="glass rounded-2xl p-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Experience Timeline</h2>
        <TimelineSection />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Core Strengths</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
          <div className="glass rounded-2xl p-6"><h3 className="text-lg font-semibold">Workflow Architecture</h3><p className="mt-2 text-sm text-slate-300">Structure cross-functional workflows into repeatable systems with robust business logic.</p></div>
          <div className="glass rounded-2xl p-6"><h3 className="text-lg font-semibold">Stakeholder Communication</h3><p className="mt-2 text-sm text-slate-300">Translate complex technical possibilities into clear business narratives and priorities.</p></div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Certifications & Learning</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>CBAP (Placeholder)</li>
            <li>CSPO (Placeholder)</li>
            <li>AI / Automation Learning Track (Placeholder)</li>
            <li>Continuous Skill Building Program (Placeholder)</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Personal Mission</h2>
          <p className="mt-3 text-sm text-slate-300">I build useful AI products that solve real business problems, improve decision velocity, and elevate team performance through thoughtfully designed workflow systems.</p>
        </div>
      </section>
    </div>
  );
}

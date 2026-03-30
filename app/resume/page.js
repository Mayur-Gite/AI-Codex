import { SectionHeading } from '@/components/section-heading';

export default function ResumePage() {
  const skills = ['Product Ownership', 'Business Analysis', 'AI Workflow Design', 'Automation Strategy', 'SaaS Product Thinking', 'Stakeholder Alignment'];
  return (
    <div className="section space-y-8">
      <SectionHeading eyebrow="Resume" title="Experience Snapshot" description="Modern resume-style UI to showcase profile highlights without a traditional document layout." />

      <section className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Profile Summary</h2>
        <p className="mt-2 text-sm text-slate-300">Business-focused Product Owner / Business Analyst building AI-powered products and automation solutions that drive measurable outcomes.</p>
      </section>

      <section className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Key Skills</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/15 px-3 py-1 text-sm text-slate-300">{skill}</span>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Experience</h3>
          <p className="mt-2 text-sm text-slate-300">Placeholder blocks for enterprise product leadership, platform strategy, and AI automation delivery programs.</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Certifications</h3>
          <p className="mt-2 text-sm text-slate-300">Placeholder certifications: CBAP, CSPO, AI product strategy, workflow automation specializations.</p>
        </div>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold">Projects Summary</h3>
        <p className="mt-2 text-sm text-slate-300">Summary of high-impact AI products, workflow automation implementations, and case-study outcomes.</p>
      </section>

      <div className="flex flex-wrap gap-3">
        <button className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium">Download Resume</button>
        <button className="rounded-xl border border-white/20 px-5 py-3 text-sm font-medium">Contact Me</button>
      </div>
    </div>
  );
}

import Link from 'next/link';
import {
  BrainCircuit,
  BriefcaseBusiness,
  Goal,
  Layers3,
  Lightbulb,
  Rocket,
  Users,
  Wrench,
} from 'lucide-react';
import { CaseStudySection, ImpactMetrics } from '@/components/sections';
import { projects } from '@/lib/data';

export default function ProjectDetailPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug) || projects[0];

  return (
    <div className="section space-y-6">
      <section className="glass rounded-3xl p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-300">{project.category}</span>
          <span className="rounded-full bg-violet-500/20 px-3 py-1 text-violet-300">Product Owner</span>
          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-300">Business Analyst</span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold md:text-5xl">{project.title}</h1>
        <p className="mt-3 max-w-3xl text-slate-300">{project.summary}</p>
        <div className="mt-6 h-64 rounded-2xl border border-dashed border-white/20" />
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium">Live Demo</button>
          <button className="rounded-xl border border-white/20 px-4 py-2 text-sm">View Workflow</button>
          <Link href="/projects" className="rounded-xl border border-white/20 px-4 py-2 text-sm">Back to Projects</Link>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <CaseStudySection title="Problem Statement" icon={Goal}>Organizations struggled with inconsistent outcomes, fragmented process steps, and limited real-time decision support.</CaseStudySection>
        <CaseStudySection title="Business Need" icon={BriefcaseBusiness}>A scalable workflow system was needed to reduce manual operations, improve quality, and accelerate cycle time.</CaseStudySection>
        <CaseStudySection title="Target Users" icon={Users}>Primary users included operations leads, analysts, and domain experts requiring guided, intelligent workflow execution.</CaseStudySection>
        <CaseStudySection title="Solution Overview" icon={Lightbulb}>Designed a modular AI-assisted workflow platform that structured intake, automations, approvals, and outcome measurement.</CaseStudySection>
        <CaseStudySection title="Key Features" icon={Rocket}><ul className="list-disc space-y-2 pl-5"><li>AI-assisted requirement interpretation and workflow suggestions.</li><li>Rules-based routing with exception handling and transparency.</li><li>Role-specific dashboards and progress visibility.</li></ul></CaseStudySection>
        <CaseStudySection title="Workflow / Architecture" icon={Layers3}>Hybrid architecture combining orchestration layers, decision logic modules, and reusable process nodes.</CaseStudySection>
        <CaseStudySection title="AI / Automation Logic Used" icon={BrainCircuit}>Prompt templates, confidence thresholds, fallback decision trees, and human-in-the-loop checkpoints.</CaseStudySection>
        <CaseStudySection title="My Role" icon={Wrench}>Led discovery workshops, authored PRDs, prioritized backlog, aligned stakeholder outcomes, and validated MVP readiness.</CaseStudySection>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Business Impact</h2>
        <ImpactMetrics />
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <CaseStudySection title="Tools / Stack Used">Next.js frontend prototype, Framer Motion interactions, workflow templates, and analytics-ready event mapping.</CaseStudySection>
        <CaseStudySection title="Challenges & Learnings">Balancing speed with trust required transparent fallback logic, scoped MVP boundaries, and stronger requirement decomposition.</CaseStudySection>
        <CaseStudySection title="Future Enhancements">Future iterations can include scenario simulation, domain packs, and deeper role-based collaboration capabilities.</CaseStudySection>
        <CaseStudySection title="Demo & Asset Placeholders">
          <div className="space-y-3">
            <div className="h-36 rounded-xl border border-dashed border-white/20" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-20 rounded-lg border border-dashed border-white/20" />
              <div className="h-20 rounded-lg border border-dashed border-white/20" />
              <div className="h-20 rounded-lg border border-dashed border-white/20" />
            </div>
          </div>
        </CaseStudySection>
      </div>
    </div>
  );
}

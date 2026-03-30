import { DemoCard } from '@/components/cards';
import { SectionHeading } from '@/components/section-heading';

export default function DemoPage() {
  return (
    <div className="section">
      <SectionHeading eyebrow="Live Demo" title="AI Tools & Demo Lab" description="Optional section for mini demos and beta experiences." />
      <div className="grid gap-4 md:grid-cols-3">
        <DemoCard title="AI Interview Preparation" summary="Practice-focused workflow for role-based interview readiness." />
        <DemoCard title="AI Tutor Assistant" summary="Adaptive tutoring interactions for guided learning and reinforcement." />
        <DemoCard title="BA / PO AI Assistant" summary="Requirement quality checks and product documentation acceleration." />
      </div>
    </div>
  );
}

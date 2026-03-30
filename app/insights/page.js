import { BlogCard } from '@/components/cards';
import { SectionHeading } from '@/components/section-heading';

export default function InsightsPage() {
  return (
    <div className="section">
      <SectionHeading eyebrow="Blog" title="Insights & Learnings" description="Optional blog/insights page template focused on AI product and automation perspectives." />
      <div className="grid gap-4 md:grid-cols-3">
        <BlogCard title="How I Built an AI Tutor" category="EdTech" summary="Designing adaptive workflows from assessment objectives to learner-specific recommendations." />
        <BlogCard title="Why Product Owners Should Learn AI Automation" category="Product Leadership" summary="A framework for identifying and prioritizing automation opportunities with clear ROI." />
        <BlogCard title="Turning Business Problems into AI Workflows" category="Business Analysis" summary="Methods to map operational friction into executable AI-assisted workflow designs." />
      </div>
    </div>
  );
}

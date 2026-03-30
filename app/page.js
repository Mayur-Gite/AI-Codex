import { features, projects } from '@/lib/data';
import { FeatureCard, ProjectCard, BlogCard, DemoCard } from '@/components/cards';
import { CTASection, HeroSection, HowIWork, TestimonialPlaceholder } from '@/components/sections';
import { SectionHeading } from '@/components/section-heading';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section">
        <SectionHeading eyebrow="Core Strengths" title="Featured Highlights" description="Business-oriented AI product expertise that turns complex workflows into practical systems." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} delay={index * 0.05} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Portfolio" title="Featured Projects" description="Case-study driven product builds aligned with measurable business needs." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <HowIWork />
      <TestimonialPlaceholder />

      <section className="section">
        <SectionHeading eyebrow="Insights" title="Insights & Learnings" description="Reusable preview UI for strategic product and AI implementation perspectives." />
        <div className="grid gap-4 md:grid-cols-3">
          <BlogCard title="How I Built an AI Tutor" category="EdTech" summary="From requirements discovery to feedback-loop design for personalized student support." />
          <BlogCard title="Why Product Owners Should Learn AI Automation" category="Product Strategy" summary="How POs can identify automation-ready workflows and prioritize value-led use cases." />
          <BlogCard title="Turning Business Problems into AI Workflows" category="Automation" summary="A practical framework for mapping business friction points to AI-enabled execution paths." />
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Live Tools" title="AI Demo Lab" description="Optional section UI for future public demos and beta product experiments." />
        <div className="grid gap-4 md:grid-cols-3">
          <DemoCard title="AI Interview Preparation" summary="Mock interview loops with confidence and answer quality scoring." />
          <DemoCard title="AI Tutor Assistant" summary="Adaptive explanation generator with incremental practice guidance." />
          <DemoCard title="BA / PO AI Assistant" summary="User story drafting, acceptance criteria checks, and process templates." />
        </div>
      </section>

      <CTASection />
    </>
  );
}

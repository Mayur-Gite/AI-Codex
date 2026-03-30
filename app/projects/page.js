import { FilterBar, ProjectCard } from '@/components/cards';
import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Projects"
        title="Projects & Case Studies"
        description="Business-first AI and workflow automation builds across SaaS, EdTech, ecommerce, and PO/BA tooling."
      />
      <FilterBar />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

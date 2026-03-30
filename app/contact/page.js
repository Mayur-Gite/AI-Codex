import { ContactForm } from '@/components/sections';
import { SectionHeading } from '@/components/section-heading';

export default function ContactPage() {
  return (
    <div className="section space-y-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s Build AI Products That Deliver Real Value"
        description="Share your product challenge, automation opportunity, or collaboration idea."
      />
      <ContactForm />
    </div>
  );
}

import {
  BrainCircuit,
  Bot,
  BriefcaseBusiness,
  Layers3,
  GraduationCap,
  ShoppingBag,
  Workflow,
  Sparkles,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

export const features = [
  {
    title: 'AI Product Thinking',
    description: 'Translate business needs into validated AI product roadmaps with measurable outcomes.',
    Icon: BrainCircuit,
  },
  {
    title: 'Workflow Automation',
    description: 'Design end-to-end automations that cut manual effort and reduce operational friction.',
    Icon: Workflow,
  },
  {
    title: 'Business Problem Solving',
    description: 'Frame fuzzy challenges into structured opportunities with clear requirement traceability.',
    Icon: BriefcaseBusiness,
  },
  {
    title: 'Scalable Solution Design',
    description: 'Build modular SaaS-first architectures ready for scale, governance, and future integrations.',
    Icon: Layers3,
  },
];

export const projects = [
  {
    slug: 'ai-interview-preparation-platform',
    title: 'AI Interview Preparation Platform',
    problem: 'Candidates lacked personalized, role-specific interview practice.',
    summary: 'Built a simulation-driven prep platform with adaptive feedback workflows and skill-gap insights.',
    stack: ['Next.js', 'LLM Prompts', 'Rubric Engine'],
    category: 'AI Products',
    Icon: Sparkles,
  },
  {
    slug: 'ai-tutor-assessment-engine',
    title: 'AI Tutor & Assessment Engine',
    problem: 'Educators needed scalable support for personalized learning plans.',
    summary: 'Designed AI tutoring logic and assessment loops for adaptive practice and progression tracking.',
    stack: ['Workflow AI', 'Scoring Logic', 'Analytics'],
    category: 'EdTech',
    Icon: GraduationCap,
  },
  {
    slug: 'ai-ecommerce-product-automation',
    title: 'AI Ecommerce Product Automation',
    problem: 'Merchants spent excessive time on repetitive catalog optimization tasks.',
    summary: 'Automated content generation, listing QA, and prioritization pipelines for faster go-live velocity.',
    stack: ['Automation', 'Prompt Chains', 'SaaS Ops'],
    category: 'Ecommerce',
    Icon: ShoppingBag,
  },
  {
    slug: 'ba-po-copilot-workbench',
    title: 'BA/PO Copilot Workbench',
    problem: 'Requirement workflows were fragmented across teams and documents.',
    summary: 'Created a copilot interface to draft stories, acceptance criteria, and journey maps consistently.',
    stack: ['Copilot UX', 'Templates', 'Knowledge Flows'],
    category: 'BA/PO Tools',
    Icon: Bot,
  },
  {
    slug: 'ai-workflow-governance-hub',
    title: 'AI Workflow Governance Hub',
    problem: 'Automation teams lacked visibility into quality and compliance states.',
    summary: 'Built governance dashboards for approval routing, model behavior reviews, and release readiness.',
    stack: ['Governance', 'Dashboards', 'Ops'],
    category: 'Automation',
    Icon: Layers3,
  },
  {
    slug: 'sales-enablement-ai-assistant',
    title: 'Sales Enablement AI Assistant',
    problem: 'Revenue teams needed rapid proposal drafting and objection-handling support.',
    summary: 'Shipped guided response workflows and knowledge-grounded assistant features for GTM teams.',
    stack: ['RAG-ready UX', 'Persona Flows', 'PromptOps'],
    category: 'AI Products',
    Icon: BriefcaseBusiness,
  },
];

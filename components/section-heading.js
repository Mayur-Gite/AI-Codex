export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-slate-300">{description}</p> : null}
    </div>
  );
}

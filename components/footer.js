import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="section py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">AI Product Builder</h3>
            <p className="mt-2 text-sm text-slate-300">Business-first AI products, automation systems, and workflow SaaS solutions.</p>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-white">Quick Links</p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-white">Connect</p>
            <div className="flex gap-3 text-slate-300">
              <a href="#" className="glass rounded-full p-2 transition hover:text-white"><Linkedin size={18} /></a>
              <a href="#" className="glass rounded-full p-2 transition hover:text-white"><Github size={18} /></a>
              <a href="#" className="glass rounded-full p-2 transition hover:text-white"><Mail size={18} /></a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500">© 2026 AI Product Builder. All rights reserved.</p>
      </div>
    </footer>
  );
}

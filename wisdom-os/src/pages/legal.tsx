import React from "react";
import { BrainCircuit, FileText, HeartPulse, LockKeyhole, Scale, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const legalSections = [
  { title: "Privacy policy", icon: LockKeyhole, text: "Explain what data is collected, why it is collected, where it is stored, how long it is retained, and how users can export or delete it." },
  { title: "India DPDP readiness", icon: ShieldCheck, text: "Use clear consent, purpose limitation, grievance contact, deletion path, reasonable safeguards, and special caution for health, identity, and financial data." },
  { title: "GDPR readiness", icon: Scale, text: "Support lawful basis, data minimisation, transparency, user access, rectification, portability, erasure, processor records, and international transfer review." },
  { title: "Health data management", icon: HeartPulse, text: "Show health guidance as educational only. Do not replace doctors. Emergency and critical health alerts should direct users to qualified help and local emergency services." },
  { title: "AI disclosure", icon: BrainCircuit, text: "Tell users when AI summarizes, critiques, or generates output. Separate facts, assumptions, risks, and suggestions." },
  { title: "Terms and acceptable use", icon: FileText, text: "State that the prototype is not legal, medical, financial, or government verification advice. Official documents must be verified with official sources." },
];

export function Legal() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <section className="rounded-[2rem] border bg-card/95 p-6 shadow-xl shadow-primary/5 md:p-8">
        <Badge className="bg-primary text-primary-foreground">Public website readiness</Badge>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">About, privacy, data protection, health data, and compliance baseline.</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground md:text-lg">These are public-facing compliance notes for an India and international personal assistant app. A lawyer should review before production launch.</p>
      </section>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {legalSections.map((section) => {
          const Icon = section.icon;
          return <Card key={section.title} className="bg-card/95"><CardHeader><div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div><CardTitle>{section.title}</CardTitle></CardHeader><CardContent><p className="text-sm leading-relaxed text-muted-foreground">{section.text}</p></CardContent></Card>;
        })}
      </div>
      <Card className="border-amber-300 bg-amber-50"><CardHeader><CardTitle>Important disclaimer</CardTitle><CardDescription>This is a product prototype and compliance checklist, not legal advice. Consult qualified professionals for production privacy, medical, financial, and legal workflows.</CardDescription></CardHeader></Card>
    </div>
  );
}

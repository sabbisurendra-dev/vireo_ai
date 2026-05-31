import React from "react";
import { BadgeCheck, BookOpen, ChevronRight, ExternalLink, Flame, ListChecks, ShieldCheck, Target, Utensils } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const COURSES = [
  { id: 1, track: "Essential skill", tag: "Active", title: "Indian Cooking Foundations", progress: 64, next: "Cook one dry masala egg dish and log time, hygiene, and taste.", summary: "A practical course for safe, healthy, reliable Indian cooking using oil bases, proteins, vegetables, and masala systems.", outcomes: ["Dry, wet, and hybrid masala bases", "Ghee, mustard oil, olive oil, and butter use", "Egg, chicken, legumes, vegetables, nuts, fruits, and protein bread", "One-page kitchen reference guide"], sources: [{ name: "FSSAI Food Safety", url: "https://www.fssai.gov.in/" }, { name: "WHO Food Safety", url: "https://www.who.int/news-room/fact-sheets/detail/food-safety" }, { name: "Harvard Healthy Plate", url: "https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/" }] },
  { id: 2, track: "Health baseline", tag: "Building", title: "Sleep, Recovery, Diet, Movement", progress: 52, next: "Add a 7-day sleep, stress, food, and movement record.", summary: "Build a baseline health system across sleep, stress, movement, diet, recreation, and weekly body composition reviews.", outcomes: ["Interpret wearable-style recovery signals", "Design weekly movement and mindfulness loops", "Create thresholds for alerts and rest", "Connect habits to outcomes"], sources: [{ name: "WHO Physical Activity", url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity" }, { name: "Sleep Foundation", url: "https://www.sleepfoundation.org/how-sleep-works/why-do-we-need-sleep" }] },
  { id: 3, track: "Professional skill", tag: "Exploring", title: "Product PRDs and AI", progress: 41, next: "Create a health PRD from the template and critique it with Vireo.", summary: "Turn raw notes into product requirements, MVP scope, user research, launch plans, and AI-improved portfolio assets.", outcomes: ["Write crisp PRDs", "Define target users and success metrics", "Prioritize MVP features", "Convert work into PM portfolio proof"], sources: [{ name: "Atlassian PRD Guide", url: "https://www.atlassian.com/agile/product-management/requirements" }, { name: "Anthropic Prompting", url: "https://www.anthropic.com/learn/prompting" }] },
  { id: 4, track: "Common skill", tag: "Queued", title: "How the Internet Works", progress: 35, next: "Draw browser to database flow for Vireo.", summary: "Understand web requests, DNS, routing, APIs, servers, databases, and product hosting.", outcomes: ["Explain HTTP and HTTPS", "Understand DNS resolution", "Map browser to database", "Design a simple API workflow"], sources: [{ name: "MDN Web Mechanics", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work" }, { name: "Cloudflare Network Layer", url: "https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/" }] },
  { id: 5, track: "Business skill", tag: "Planned", title: "Launch, GTM, Revenue, and Scale", progress: 29, next: "Write the first LinkedIn post and collect 10 user interviews.", summary: "Build from zero to first users, then revenue through freemium, courses, templates, B2B, certifications, and marketplace.", outcomes: ["Design a 4-week launch", "Pick metrics per screen", "Package paid value moments", "Plan 1, 3, 5, 10, 25, and 100-year growth"], sources: [{ name: "SBA Business Plan", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }, { name: "Product Hunt Launch Guide", url: "https://www.producthunt.com/launch" }] },
];

const cookingReference = [
  { label: "Oil base", detail: "Ghee for richness, mustard oil for pungency, olive oil for light cooking, butter for finishing." },
  { label: "Dry masala", detail: "Salt, chilli powder, garam masala, chicken/mutton/prawn/fish masala with no added water." },
  { label: "Wet masala", detail: "Onion, tomato, chillies, coriander, curry leaves, methi, ginger, garlic, and water-rich aromatics." },
  { label: "Hybrid masala", detail: "Dry spices bloomed into oil, then combined with wet aromatics for controlled consistency." },
  { label: "Safety", detail: "Clean hands, separate raw/cooked foods, cook thoroughly, chill safely, and avoid cross-contamination." },
];

const tagColors: Record<string, string> = {
  Active: "bg-emerald-600 text-white",
  Building: "bg-sky-600 text-white",
  Exploring: "bg-violet-600 text-white",
  Queued: "bg-amber-500 text-white",
  Planned: "bg-slate-500 text-white",
};

export function CourseLibrary() {
  const topThree = COURSES.slice(0, 3);
  const { toast } = useToast();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <section className="rounded-[2rem] border bg-card/95 p-6 shadow-xl shadow-primary/5 md:p-8">
        <Badge className="bg-primary text-primary-foreground">Daily learnings and development</Badge>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">Track the next action in each skill, not just a course list.</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground md:text-lg">The learning feed surfaces skills currently in progress, with deeper paths available when you want to study.</p>
      </section>

      <Card className="bg-sidebar text-sidebar-foreground">
        <CardHeader><CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-primary" /> Skills in focus</CardTitle><CardDescription className="text-sidebar-foreground/65">Daily focus with next actionables and progress.</CardDescription></CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-3">
          {topThree.map((course) => (
            <div key={course.title} className="rounded-3xl border border-sidebar-border bg-sidebar-accent/60 p-5">
              <Badge className={tagColors[course.tag] ?? ""}>{course.tag}</Badge>
              <h3 className="mt-3 font-semibold">{course.title}</h3>
              <Progress value={course.progress} className="mt-4 h-2 bg-sidebar" />
              <p className="mt-2 text-sm text-sidebar-foreground/65">{course.progress}% complete</p>
              <div className="mt-4 rounded-2xl bg-sidebar p-3 text-sm text-sidebar-foreground/80">
                <ListChecks className="mb-2 h-4 w-4 text-primary" />{course.next}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-primary" /> Indian cooking one-page reference</CardTitle><CardDescription>A compact version of the cooking guide improved for safety, nutrition, convenience, reliability, simplicity, and taste.</CardDescription></CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {cookingReference.map((item) => <div key={item.label} className="rounded-2xl border bg-background/80 p-4"><div className="flex items-center gap-2 font-semibold"><Flame className="h-4 w-4 text-primary" />{item.label}</div><p className="mt-2 text-sm text-muted-foreground">{item.detail}</p></div>)}
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {COURSES.map((course) => (
          <Card key={course.id} className="flex flex-col bg-card/95 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
            <CardHeader className="pb-4">
              <div className="mb-3 flex items-start justify-between gap-3">
                <Badge className={tagColors[course.tag] ?? ""}>{course.tag}</Badge>
                <Badge variant="outline">{course.track}</Badge>
              </div>
              <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
              <CardDescription className="mt-2 text-sm leading-relaxed">{course.summary}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <Progress value={course.progress} className="h-2" />
              <div className="rounded-2xl border bg-muted/30 p-3 text-sm"><span className="font-semibold">Next action:</span> {course.next}</div>
              <div>
                <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Deep dive outcomes</h4>
                <ul className="space-y-2">{course.outcomes.map((outcome) => <li key={outcome} className="flex items-start gap-2 text-sm text-foreground/90"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{outcome}</li>)}</ul>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-3 border-t bg-muted/10 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Credible sources</h4>
              <div className="w-full space-y-2">{course.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer noopener" className="group flex w-full items-center justify-between rounded-xl border bg-background p-2 text-xs transition-colors hover:border-primary/50 hover:bg-primary/5"><span className="truncate font-medium group-hover:text-primary">{source.name}</span><ExternalLink className="ml-2 h-3 w-3 shrink-0 text-muted-foreground group-hover:text-primary" /></a>)}</div>
              <Button variant="outline" size="sm" className="w-full rounded-xl" onClick={() => toast({ title: `Deep dive: ${course.title}`, description: "Full module notes and exercises are being built. Check back in the next update." })}><BookOpen className="h-4 w-4" /> Deep dive <ChevronRight className="h-4 w-4" /></Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="bg-card/95"><CardHeader><CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> Open and legal learning resources</CardTitle><CardDescription>Use trusted, free, legal, source-backed material. Production import/export must respect licences and attribution.</CardDescription></CardHeader></Card>
    </div>
  );
}

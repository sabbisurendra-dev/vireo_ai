import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Rocket, Users, CircleDollarSign, Repeat, ArrowUpRight, FileText, ShieldCheck, Globe2, Smartphone, Presentation, BarChart3 } from "lucide-react";

const websiteStack = [
  "Next.js or React/Vite for web frontend",
  "Tailwind CSS, shadcn/ui, Lucide icons, Google Fonts",
  "Supabase free tier for database, auth, and storage",
  "GitHub for version control and public credibility",
  "Vercel for web hosting and fast global previews",
  "Plausible OSS or PostHog for privacy-friendly analytics",
  "Zod and React Hook Form for reliable validation",
  "Resend free tier for launch emails and onboarding"
];

const appStack = [
  "Expo and React Native for iOS, Android, and web",
  "NativeWind or Gluestack UI for mobile UI components",
  "Supabase auth, real-time sync, row-level security",
  "Zustand for local state and React Query for server state",
  "Expo SecureStore for sensitive mobile state",
  "Whisper or open speech models for voice capture",
  "Claude-compatible AI layer for PRD and learning synthesis",
  "EAS free tier for Android builds and device testing"
];

const launchWeeks = [
  {
    title: "Week 1: Narrow the promise",
    points: ["Pick one beachhead: voice PRD builder for self-learners and builders", "Interview 10 target users", "Publish the public mission page and waitlist", "Define one north-star metric: weekly PRDs completed"]
  },
  {
    title: "Week 2: Ship the working loop",
    points: ["Capture voice or typed notes", "Convert notes into a structured PRD", "Save habits and course progress", "Add feedback button and onboarding checklist"]
  },
  {
    title: "Week 3: Close alpha",
    points: ["Invite 25 real users from LinkedIn, founder groups, PM communities, and students", "Run daily support calls", "Measure activation, retention, and failed tasks", "Fix the top 5 repeated issues"]
  },
  {
    title: "Week 4: Public launch",
    points: ["Launch on Product Hunt, LinkedIn, Reddit communities, Indie Hackers, and relevant Discords", "Publish 3 useful posts from the course library", "Offer free templates for email capture", "Convert first users to paid workshops or templates"]
  }
];

const businessDocs = [
  "One-page vision memo",
  "Product Requirements Document",
  "MVP scope and feature backlog",
  "User research interview script",
  "Launch checklist and GTM calendar",
  "Pricing and packaging model",
  "Pitch deck: 10 slides",
  "Data privacy and consent policy",
  "Terms, refund, and acceptable-use outline",
  "Course curriculum and certification rubric"
];

const pitchSlides = [
  "Problem: people collect knowledge but do not compound it into action",
  "Solution: a self-improving assistant for PRDs, habits, courses, and decisions",
  "Market: self-learners, PMs, founders, creators, students, and teams",
  "Product demo: voice to PRD to learning plan to published IP",
  "Why now: AI, mobile voice, low-cost hosting, creator-led education",
  "Business model: freemium, templates, courses, B2B, certifications, marketplace",
  "GTM: build in public, SEO, LinkedIn, communities, Product Hunt, workshops",
  "Moat: personal knowledge graphs, course IP, workflows, community, brand trust",
  "Roadmap: 1K users to 100K to 1M to institution",
  "Ask: users, feedback, distribution partners, capital, and expert contributors"
];

const legalItems = [
  "India DPDP Act: clear consent, purpose limitation, deletion request path, privacy notice",
  "GDPR: lawful basis, export/delete data, data minimisation, processor agreements",
  "AI disclosure: tell users when AI creates or transforms content",
  "Health disclaimer: educational guidance only, not medical advice",
  "Course IP: publish licensing terms for templates, courses, and marketplace content",
  "B2B contracts: data ownership, confidentiality, uptime expectations, support scope"
];

const metrics = [
  { label: "Activation", value: "User creates first PRD or habit loop in 10 minutes" },
  { label: "Retention", value: "User returns 3 times in first 7 days" },
  { label: "Revenue", value: "First paid template, course, workshop, or B2B pilot" },
  { label: "Learning", value: "User completes one course module and applies it to a real task" },
  { label: "Health", value: "User records sleep, movement, diet, and reflection baseline weekly" },
  { label: "IP", value: "User publishes one article, course asset, or portfolio case study monthly" }
];

export function LaunchBusiness() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-primary">Launch & Business Model</h1>
        <p className="text-muted-foreground mt-2 text-lg">Website, app, documents, GTM, monetisation, legal, and scale plan.</p>
      </div>

      <Tabs defaultValue="launch" className="w-full">
        <TabsList className="mb-6 flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
          <TabsTrigger value="launch" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Two-page launch plan</TabsTrigger>
          <TabsTrigger value="stack" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Free stack</TabsTrigger>
          <TabsTrigger value="model" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Revenue model</TabsTrigger>
          <TabsTrigger value="docs" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Business docs</TabsTrigger>
          <TabsTrigger value="legal" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Legal</TabsTrigger>
        </TabsList>

        <TabsContent value="launch" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Rocket className="h-5 w-5 text-primary" /> Real-user launch plan</CardTitle>
                <CardDescription>A practical two-page plan compressed into a launch operating system.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="rounded-lg border bg-muted/40 p-4">
                  <h3 className="font-semibold">Positioning</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Wisdom OS helps ambitious self-learners turn voice notes, walks, research, and AI conversations into PRDs, habits, courses, and monetisable IP. The first audience is PMs, founders, students, creators, and builders who already use AI but lack a system for compounding learning into action.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {launchWeeks.map((week) => (
                    <div key={week.title} className="rounded-lg border bg-background p-4">
                      <h4 className="font-semibold text-primary">{week.title}</h4>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {week.points.map((point) => <li key={point} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{point}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-sidebar text-sidebar-foreground border-sidebar-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart3 className="h-5 w-5 text-primary" /> Real business outcomes</CardTitle>
                <CardDescription className="text-sidebar-foreground/70">Every page and feature needs a measurable job.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-sidebar-border bg-sidebar-accent/50 p-3">
                    <div className="font-semibold text-primary">{metric.label}</div>
                    <div className="text-sm text-sidebar-foreground/80">{metric.value}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="stack" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Globe2 className="h-5 w-5 text-primary" /> Website build plan</CardTitle>
                <CardDescription>Free/open-source path for the hosted web product.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {websiteStack.map((item) => <div key={item} className="flex gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</div>)}
                <div className="mt-4 rounded-lg bg-muted p-4 text-sm text-muted-foreground">Goal: homepage converts visitors to sign-ups, one data-connected page proves the product works, login protects personal data, and analytics measure conversion from day one.</div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Smartphone className="h-5 w-5 text-primary" /> App build plan</CardTitle>
                <CardDescription>Free/open-source path for mobile-ready deployment.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {appStack.map((item) => <div key={item} className="flex gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</div>)}
                <div className="mt-4 rounded-lg bg-muted p-4 text-sm text-muted-foreground">Goal: every tap has a loading, error, and success state; offline capture works gracefully; voice PRD capture becomes the mobile wedge.</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="model" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CircleDollarSign className="h-5 w-5 text-primary" /> Monetisation & IP</CardTitle>
                <CardDescription>Launch free, monetise at value moments.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Freemium SaaS", "Course bundles", "Templates", "Workshops", "B2B licensing", "Certifications", "Creator marketplace", "Affiliate sponsorships"].map((item) => (
                    <div key={item} className="p-3 bg-muted rounded-md border border-border">
                      <p className="font-medium text-sm">{item}</p>
                      <p className="text-xs text-muted-foreground mt-1">Turn repeated user value into a priced offer without blocking the free core loop.</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-semibold text-sm flex items-center gap-2 uppercase tracking-wider text-muted-foreground"><Repeat className="h-4 w-4" /> The IP flywheel</h4>
                  <p className="text-sm text-foreground/80">Walk and think → record voice notes → AI synthesises PRDs and mind maps → publish articles and courses → attract users → convert feedback into better systems → generate templates, certifications, and marketplace assets.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Scale ladder</CardTitle>
                <CardDescription>From a few testers to a compounding platform.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {["5-10 users: manual onboarding and direct observation", "10-50 users: daily support, quick bug fixes, narrow feature set", "50-100 users: onboarding content, first paid templates", "100-1K users: SEO, community, referral loops", "1K-10K users: course bundles, cohorts, analytics, B2B pilots", "10K+ users: marketplace, certifications, creator economy, enterprise learning ops"].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg border p-3 text-sm"><ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="docs" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5 text-primary" /> Business document set</CardTitle>
                <CardDescription>Crucial documents to create before serious launch.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                {businessDocs.map((doc) => <div key={doc} className="rounded-lg border bg-muted/40 p-3 text-sm font-medium">{doc}</div>)}
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Presentation className="h-5 w-5 text-primary" /> 10-slide pitch deck</CardTitle>
                <CardDescription>Customer, stakeholder, and investor narrative.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {pitchSlides.map((slide, index) => <div key={slide} className="flex gap-3 rounded-lg border p-3 text-sm"><Badge variant="secondary">{index + 1}</Badge><span>{slide}</span></div>)}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="legal" className="space-y-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> Legal and compliance checklist</CardTitle>
              <CardDescription>Educational product guidance for India and international launch. Use a qualified lawyer before production launch.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2">
              {legalItems.map((item) => <div key={item} className="flex gap-3 rounded-lg border bg-muted/30 p-4 text-sm"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</div>)}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

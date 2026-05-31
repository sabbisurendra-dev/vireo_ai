import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Flag, Zap, Mountain, Globe, Sparkles, Landmark, Orbit } from "lucide-react";

const practicalRoadmap = [
  {
    title: "Year 1: 1K users",
    label: "Foundation",
    icon: Target,
    summary: "Ship the usable product, dogfood it daily, and prove one narrow use case: voice or written notes become better PRDs, habits, and courses.",
    points: ["Launch the web MVP and mobile-ready prototype", "Publish 10 core course modules and one public launch essay", "Reach 1,000 active free users and the first paid customers", "Measure weekly PRDs completed, course progress, and habit consistency"]
  },
  {
    title: "Year 3: 100K users",
    label: "Engine",
    icon: Flag,
    summary: "Turn the product into a repeatable growth engine with community, templates, B2B pilots, and course IP.",
    points: ["Expand course library to 50+ modules", "Launch team workspaces for startups, schools, and creator teams", "Create certifications for AI-assisted product thinking", "Build a creator/community contributor program"]
  },
  {
    title: "Year 5: 1M users",
    label: "Network",
    icon: Zap,
    summary: "Become a network of self-learners, PMs, creators, and small teams who compound knowledge into visible work.",
    points: ["Ship mature web, mobile, and offline capture", "Open the course/template marketplace", "Create a portfolio engine for PM and creator case studies", "Reach sustainable revenue through SaaS, courses, B2B, and marketplace take-rate"]
  },
  {
    title: "Year 10: platform",
    label: "Platform",
    icon: Mountain,
    summary: "Move from app to platform: open APIs, contributor ecosystem, enterprise learning operations, and trusted knowledge infrastructure.",
    points: ["Launch platform APIs and verified learning graphs", "Operate enterprise learning, certification, and team intelligence products", "Build a high-trust open-source foundation arm", "Make Wisdom OS a default learning and product-thinking system"]
  },
  {
    title: "Year 25: institution",
    label: "Institution",
    icon: Landmark,
    summary: "Evolve into a global education and research institution that preserves practical knowledge and funds independent learning.",
    points: ["Create open campuses, fellowships, and research labs", "Maintain canonical courses for health, AI, engineering, design, business, and civic knowledge", "Publish open standards for human-AI learning systems", "Build durable governance around user data, IP, and public-good education"]
  },
  {
    title: "Year 100: open foundation",
    label: "Foundation",
    icon: Globe,
    summary: "Become an open, multi-generational foundation for human learning, verified knowledge, and wisdom preservation.",
    points: ["Protect a universal syllabus across languages and cultures", "Operate as a public-interest knowledge commons", "Preserve personal and collective learning archives with consent", "Support billions of learners through decentralised, low-cost infrastructure"]
  }
];

const visionPlan = [
  { title: "Years 1-10: useful product", text: "Create the product, prove retention, reach scale, and make the assistant genuinely helpful for real people." },
  { title: "Years 10-25: trusted institution", text: "Turn the product into a serious learning institution with courses, certifications, research, and public standards." },
  { title: "Years 25-100: open foundation", text: "Protect the knowledge commons, support local-language learning, and keep core systems open and affordable." },
  { title: "Years 100-200: civilisational memory", text: "Preserve verified human knowledge, personal learning archives, and practical wisdom for future generations and new environments." }
];

export function Roadmap() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-primary">Roadmap</h1>
        <p className="text-muted-foreground mt-2 text-lg">1, 3, 5, 10, 25, 100, and 200-year plan.</p>
      </div>

      <Tabs defaultValue="practical" className="w-full">
        <TabsList className="mb-6 flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
          <TabsTrigger value="practical" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">1-100 year roadmap</TabsTrigger>
          <TabsTrigger value="visionary" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">200-year vision</TabsTrigger>
        </TabsList>

        <TabsContent value="practical">
          <div className="grid gap-6 lg:grid-cols-2">
            {practicalRoadmap.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="bg-card hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2 text-primary"><Icon className="h-5 w-5" /></div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription>{item.label}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <p className="text-muted-foreground leading-relaxed">{item.summary}</p>
                    <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                      {item.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="visionary">
          <Card className="border-2 border-primary/30 bg-card overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Orbit className="w-64 h-64" />
            </div>
            <CardHeader className="border-b bg-muted/30 pb-6 relative z-10">
              <div className="flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-3xl text-primary">The 200-Year Plan</CardTitle>
                  <CardDescription className="text-base mt-1">Visionary, separate from the practical operating roadmap.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="max-w-4xl space-y-8">
                <div>
                  <h3 className="text-xl font-bold border-b pb-2 mb-4">The premise</h3>
                  <p className="text-muted-foreground leading-relaxed">Most products plan for a fundraise or exit. Wisdom OS can plan for a multi-generational mission: help people compound health, knowledge, judgment, and useful work while preserving trustworthy learning systems for the future. The practical product must win first; the long vision only matters if it continues helping real users today.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {visionPlan.map((item, index) => (
                    <div key={item.title} className="rounded-xl border bg-muted/30 p-5">
                      <div className="text-primary font-mono text-sm">0{index + 1}</div>
                      <h4 className="mt-2 text-lg font-bold">{item.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                  <h4 className="font-bold text-primary">Operating principle</h4>
                  <p className="mt-2 text-sm text-muted-foreground">The 200-year plan should never justify complexity today. Every decade must pay rent by making the product more useful, more trusted, more affordable, and more aligned with user agency.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

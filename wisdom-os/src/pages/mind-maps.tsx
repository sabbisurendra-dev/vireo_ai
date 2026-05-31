import React from "react";
import { Activity, BadgeIndianRupee, BrainCircuit, BriefcaseBusiness, Globe, Headphones, Network, ShieldCheck, Utensils, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const TOPICS = [
  { id: "assistant", title: "Personal AI Assistant", icon: BrainCircuit, nodes: ["Voice PRD Builder", "Daily Learning", "Habit Tracker", "Mind Maps", "Course Library", "Revenue Engine"] },
  { id: "health", title: "Health Baseline", icon: Activity, nodes: ["WHOOP Recovery", "Sleep", "Stress", "Journal", "Withings Composition", "Critical Alerts"] },
  { id: "cooking", title: "Indian Cooking", icon: Utensils, nodes: ["Oil Bases", "Dry Masala", "Wet Masala", "Hybrid Masala", "Protein Bread", "Food Safety"] },
  { id: "wallet", title: "Proof Wallet", icon: ShieldCheck, nodes: ["Identity", "Licences", "Emergency", "Travel", "Assets", "Liabilities"] },
  { id: "business", title: "Launch and Revenue", icon: BriefcaseBusiness, nodes: ["Free Launch", "SEO", "LinkedIn", "Product Hunt", "B2B", "Certifications"] },
  { id: "finance", title: "Financial Readiness", icon: BadgeIndianRupee, nodes: ["Net Worth", "Bank Links", "EPF", "Mutual Funds", "Debt", "Flash Cards"] },
  { id: "internet", title: "Internet Fundamentals", icon: Globe, nodes: ["TCP/IP", "DNS", "HTTP", "APIs", "Databases", "Hosting"] },
  { id: "interests", title: "Interest Lab", icon: Headphones, nodes: ["Audio", "Music", "Remote Control", "Video Tech", "Restaurant Ops", "Deep Words"] },
];

export function MindMaps() {
  const { toast } = useToast();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <section className="rounded-[2rem] border bg-card/95 p-6 shadow-xl shadow-primary/5 md:p-8">
        <Badge className="bg-primary text-primary-foreground">Knowledge graph prototype</Badge>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">Map how health, skills, proofs, AI, and revenue compound together.</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground md:text-lg">The attached PRD becomes a living graph: every goal can become a course, habit, document, or monetisable IP module.</p>
      </section>

      <Tabs defaultValue="assistant" className="w-full">
        <div className="overflow-x-auto pb-2">
          <TabsList className="inline-flex h-auto w-max flex-wrap justify-start gap-2 rounded-2xl bg-muted/70 p-2 text-muted-foreground">
            {TOPICS.map((topic) => (
              <TabsTrigger key={topic.id} value={topic.id} className="flex items-center gap-2 rounded-xl px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <topic.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{topic.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {TOPICS.map((topic) => (
          <TabsContent key={topic.id} value={topic.id} className="mt-6">
            <Card className="overflow-hidden border-primary/20 bg-card/95 shadow-xl shadow-primary/5">
              <CardHeader className="border-b bg-primary/5">
                <div className="flex items-center gap-3">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20"><topic.icon className="h-7 w-7" /></div>
                  <div>
                    <CardTitle className="text-2xl">{topic.title}</CardTitle>
                    <CardDescription>Core nodes and product relationships.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border bg-muted/30 p-8">
                  <svg className="absolute inset-0 h-full w-full text-primary/20" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50%" y1="50%" x2="20%" y2="22%" stroke="currentColor" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="80%" y2="22%" stroke="currentColor" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="17%" y2="70%" stroke="currentColor" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="83%" y2="70%" stroke="currentColor" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="currentColor" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <div className="absolute inset-0 grid place-items-center pointer-events-none">
                    <div className="grid h-32 w-32 place-items-center rounded-full bg-sidebar p-4 text-center text-sm font-bold text-sidebar-foreground shadow-2xl ring-8 ring-background">{topic.title}</div>
                  </div>
                  {topic.nodes.map((node, index) => {
                    const angle = (index * Math.PI * 2) / topic.nodes.length - Math.PI / 2;
                    const radius = 170;
                    const x = `calc(50% + ${Math.cos(angle) * radius}px)`;
                    const y = `calc(50% + ${Math.sin(angle) * radius}px)`;
                    return (
                      <div key={node} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
                        <Badge variant="secondary" className="whitespace-normal rounded-2xl border bg-background px-4 py-3 text-center text-sm shadow-lg transition-all hover:-translate-y-1 hover:border-primary hover:text-primary">{node}</Badge>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => toast({ title: "Network expansion staged", description: "This will connect to saved courses and wallet items once backend storage is live." })}>
                    <Network className="h-4 w-4" /> Expand network
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => toast({ title: "Export staged", description: "JSON and PDF export will be available once document storage is connected." })}>
                    <Zap className="h-4 w-4" /> Export plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

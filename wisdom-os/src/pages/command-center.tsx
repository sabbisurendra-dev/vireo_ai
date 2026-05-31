import React from "react";
import { Link } from "wouter";
import { Activity, AlertTriangle, ArrowRight, BookOpenCheck, CheckCircle2, Eye, HeartPulse, Info, MessageCircle, Utensils, WalletCards, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useLocalStorage } from "@/hooks/use-local-storage";

const DEFAULT_HABITS = [
  { id: "h1", text: "Sleep before 11:30 PM and record recovery", completed: false },
  { id: "h2", text: "20 minutes walk plus 5 minutes breathing", completed: false },
  { id: "h3", text: "Complete one learning artifact or mind map", completed: false },
  { id: "h4", text: "Practice one skill block", completed: false },
  { id: "h5", text: "Review wallet readiness only if needed", completed: false },
];

const healthWindows = [
  { label: "Immediate actionables", value: "Hydrate + 10 min walk", detail: "Useful now because sleep debt and afternoon stress are mildly elevated.", tone: "Action" },
  { label: "Today's status", value: "Stable", detail: "Sleep, mood, and movement are within a maintainable baseline.", tone: "Maintain" },
  { label: "Last 1 week", value: "+12% recovery", detail: "Morning walk and earlier dinner correlate with better next-day readiness.", tone: "Rising" },
  { label: "Last 1 month", value: "Flat stress", detail: "Stress is stable, but late screen time remains a soft blocker.", tone: "Watch" },
  { label: "1 year health", value: "Building base", detail: "Long-term baseline needs 8 more weeks of consistent data before stronger conclusions.", tone: "Long term" },
];

const learningProgress = [
  { title: "Indian Cooking Foundations", progress: 64, next: "Cook one dry masala egg dish and log taste, time, hygiene.", tag: "Active" },
  { title: "Health Baseline Systems", progress: 52, next: "Add 7-day sleep, stress, movement, and food notes.", tag: "Building" },
  { title: "AI and Data Science", progress: 41, next: "Study one AI concept and apply it to a health or cooking challenge.", tag: "Exploring" },
];

const correlatedHabits = [
  "Morning walk + voice notes show strong correlation with completed learning tasks.",
  "Earlier dinner + sleep routine correlate with higher recovery scores.",
  "Cooking at home + weekly body review correlate with better diet consistency.",
];

const improvementNudges = [
  "Move screen-heavy work 30 minutes earlier to protect sleep quality.",
  "Add one protein-rich breakfast option to stabilize energy.",
  "Review wallet proofs once weekly, not daily, to avoid unnecessary friction.",
];

export function CommandCenter() {
  const [habits, setHabits] = useLocalStorage("wisdom_habits", DEFAULT_HABITS);
  const [detail, setDetail] = React.useState<string | null>(null);

  const toggleHabit = (id: string) => setHabits(habits.map((h) => (h.id === id ? { ...h, completed: !h.completed } : h)));
  const completedCount = habits.filter((h) => h.completed).length;
  const progress = Math.round((completedCount / habits.length) * 100);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Compact identity bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border bg-card/80 px-5 py-3">
        <div className="flex items-center gap-3">
          <Activity className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">Vireo</span>
          <span className="hidden text-sm text-muted-foreground md:inline">— your personal AI assistant.</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="h-7 rounded-full px-2 text-[11px]" onClick={() => window.alert("Emergency Info (India):\n• Unified National Helpline: 112\n• Ambulance & Medical: 108 or 102\n• Police: 100\n• Fire Services: 101\n\nAlso make sure you have recorded: Emergency contacts, blood group, allergies, active medications, and nearest hospital details.")}><AlertTriangle className="h-3 w-3 text-destructive mr-1" />Emergency</Button>
          <Button size="sm" className="h-7 rounded-full px-3 text-[11px]" onClick={() => window.dispatchEvent(new Event("open-wisdom-assistant"))}><MessageCircle className="h-3 w-3 mr-1" />Talk to Vireo</Button>
        </div>
      </div>

      {/* Three focus areas — hero grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Health */}
        <button onClick={() => document.getElementById("health-snapshot")?.scrollIntoView({ behavior: "smooth" })} className="text-left w-full">
          <div className="group relative overflow-hidden rounded-[1.75rem] border bg-gradient-to-br from-emerald-50 to-teal-50 p-5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-200/50 cursor-pointer">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-200/30 blur-2xl" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <Badge className="bg-emerald-600 text-white text-[10px]">Baseline</Badge>
              </div>
              <h2 className="mt-4 text-xl font-bold text-emerald-900">Health</h2>
              <p className="mt-1 text-sm text-emerald-800/75">Sleep, recovery, stress, movement, and body baseline — with daily and trend indicators.</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  { label: "Today", value: "Stable" },
                  { label: "7-day", value: "+12% ↑" },
                  { label: "Recovery", value: "76%" },
                  { label: "Sleep", value: "7h 24m" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white/70 px-3 py-2 text-center">
                    <div className="text-[10px] text-emerald-700/70">{stat.label}</div>
                    <div className="mt-0.5 text-sm font-bold text-emerald-900">{stat.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-end gap-1 text-xs font-medium text-emerald-700 group-hover:text-emerald-900">
                View details <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </button>

        {/* Learning */}
        <Link href="/courses">
          <div className="group relative overflow-hidden rounded-[1.75rem] border bg-gradient-to-br from-sky-50 to-blue-50 p-5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-200/50 cursor-pointer">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-200/30 blur-2xl" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-100 text-sky-700">
                  <Utensils className="h-6 w-6" />
                </div>
                <Badge className="bg-sky-600 text-white text-[10px]">In Progress</Badge>
              </div>
              <h2 className="mt-4 text-xl font-bold text-sky-900">Daily Learnings</h2>
              <p className="mt-1 text-sm text-sky-800/75">Skills, cooking, AI, and personal development — tracked by progress and next action.</p>
              <div className="mt-4 space-y-2">
                {learningProgress.map((course) => (
                  <div key={course.title} className="rounded-xl bg-white/70 px-3 py-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-sky-900 font-medium truncate">{course.title}</span>
                      <span className="text-xs font-bold text-sky-700 shrink-0">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="mt-1 h-1.5 bg-sky-100" />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-end gap-1 text-xs font-medium text-sky-700 group-hover:text-sky-900">
                View all courses <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </Link>

        {/* Wallet */}
        <Link href="/wallet">
          <div className="group relative overflow-hidden rounded-[1.75rem] border bg-gradient-to-br from-stone-800 to-stone-900 p-5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-700/40 cursor-pointer">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-stone-200">
                  <WalletCards className="h-6 w-6" />
                </div>
                <Badge className="bg-white/15 text-stone-100 text-[10px]">Private</Badge>
              </div>
              <h2 className="mt-4 text-xl font-bold text-white">Personal Wallet</h2>
              <p className="mt-1 text-sm text-stone-300">Private digital cards, UPI apps, ID proofs, assets, and liabilities — open only when needed.</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  { label: "ID Cards", value: "5 stored" },
                  { label: "UPI Apps", value: "4 linked" },
                  { label: "Assets", value: "Private" },
                  { label: "Status", value: "Secure" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white/10 px-3 py-2 text-center">
                    <div className="text-[10px] text-stone-400">{stat.label}</div>
                    <div className="mt-0.5 text-sm font-bold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-end gap-1 text-xs font-medium text-stone-400 group-hover:text-stone-200">
                Open wallet <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Health snapshot + Habit loop */}
      <div id="health-snapshot" className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <Card className="bg-card/95 shadow-xl shadow-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><HeartPulse className="h-5 w-5 text-primary" /> Health snapshot</CardTitle>
            <CardDescription>Click any snapshot for detailed metrics.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {healthWindows.map((item) => (
              <button key={item.label} onClick={() => setDetail(`${item.label}: ${item.detail}`)} className="rounded-3xl border bg-muted/30 p-4 text-left transition-all hover:-translate-y-1 hover:border-primary/50">
                <div className="flex items-center justify-between gap-3"><span className="text-sm text-muted-foreground">{item.label}</span><Badge variant="outline">{item.tone}</Badge></div>
                <div className="mt-2 text-2xl font-bold">{item.value}</div>
                <p className="mt-2 text-xs text-muted-foreground">{item.detail}</p>
              </button>
            ))}
            <Button variant="secondary" className="rounded-2xl sm:col-span-2" onClick={() => setDetail("Detailed health metrics: HRV, resting heart rate, sleep duration, sleep consistency, strain, steps, zone-2 cardio, body weight, body fat, muscle, hydration, journal sentiment, and habit impact analysis.")}><Eye className="h-4 w-4" /> Detailed health view</Button>
          </CardContent>
        </Card>

        <Card className="bg-card/95 shadow-xl shadow-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Habit loop · {completedCount}/{habits.length} today</CardTitle>
            <CardDescription>Correlations are nudges, not harsh warnings or medical claims.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-3">
              {habits.map((habit) => <label key={habit.id} className="flex cursor-pointer items-start gap-3 rounded-2xl border bg-background/70 p-3 text-sm"><Checkbox checked={habit.completed} onCheckedChange={() => toggleHabit(habit.id)} /> <span className={habit.completed ? "line-through text-muted-foreground" : ""}>{habit.text}</span></label>)}
            </div>
            <Progress value={progress} className="h-2" />
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border bg-emerald-50 p-3"><h3 className="font-semibold text-emerald-900">Highly correlated</h3>{correlatedHabits.map((item) => <p key={item} className="mt-2 text-xs text-emerald-900/75">{item}</p>)}</div>
              <div className="rounded-2xl border bg-amber-50 p-3"><h3 className="font-semibold text-amber-900">Gentle nudges</h3>{improvementNudges.map((item) => <p key={item} className="mt-2 text-xs text-amber-900/75">{item}</p>)}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/95">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><BookOpenCheck className="h-5 w-5 text-primary" /> Daily learnings and development</CardTitle>
          <CardDescription>Skills currently in progress with next actionables.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-3">
          {learningProgress.map((course) => (
            <div key={course.title} className="rounded-3xl border bg-muted/25 p-5">
              <Badge variant="secondary">{course.tag}</Badge>
              <h3 className="mt-3 font-semibold">{course.title}</h3>
              <Progress value={course.progress} className="mt-4 h-2" />
              <p className="mt-3 text-sm text-muted-foreground">{course.progress}% complete</p>
              <button onClick={() => setDetail(course.next)} className="mt-4 flex w-full items-center justify-between rounded-2xl border bg-background p-3 text-left text-sm hover:border-primary/50">Next action <ArrowRight className="h-4 w-4" /></button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="wallet-leather overflow-hidden text-white">
        <CardContent className="grid gap-6 p-6 md:grid-cols-[1fr_0.8fr] md:p-8">
          <div>
            <Badge className="bg-white/15 text-white hover:bg-white/20">Private · Secure</Badge>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">A digital replacement for physical wallet cards.</h2>
            <p className="mt-3 max-w-2xl text-white/70">The homepage stays quiet: leather wallet, safety cues, and an opening action. Documents and assets stay inside.</p>
          </div>
          <Link href="/wallet"><Button size="lg" variant="secondary" className="self-center rounded-2xl">Open wallet <ArrowRight className="h-4 w-4" /></Button></Link>
        </CardContent>
      </Card>

      {detail && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4 backdrop-blur-sm">
          <Card className="max-w-lg animate-in zoom-in-95">
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div><CardTitle className="flex items-center gap-2"><Info className="h-5 w-5 text-primary" /> Detail</CardTitle><CardDescription>Specific task and action information.</CardDescription></div>
              <Button variant="ghost" size="icon" onClick={() => setDetail(null)}><X className="h-4 w-4" /></Button>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">{detail}</CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

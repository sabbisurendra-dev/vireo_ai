import React from "react";
import { Link } from "wouter";
import { ArrowLeft, Activity, HeartPulse, Brain, Zap, Moon, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function Health() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <section className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link href="/">
            <button className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mb-2">
              <ArrowLeft className="h-4 w-4" /> Back to Dashboard
            </button>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Health Systems & Trends</h1>
          <p className="mt-2 text-muted-foreground md:text-lg">Detailed baseline metrics, recovery logs, and wearability indicators.</p>
        </div>
        <Badge className="bg-emerald-600 text-white px-3 py-1 text-xs">Baseline: Stable</Badge>
      </section>

      {/* Hero Stats Grid */}
      <section className="grid gap-6 md:grid-cols-3">
        {/* Recovery Card */}
        <Card className="bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border-emerald-500/20">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Zap className="h-5 w-5 text-emerald-500" /> Daily Recovery
              </CardTitle>
              <Badge variant="outline" className="border-emerald-500/30 text-emerald-600 bg-emerald-50">Optimal</Badge>
            </div>
            <CardDescription>Overall body readiness score based on autonomic indicators</CardDescription>
          </CardHeader>
          <CardContent className="pt-4 flex flex-col items-center">
            <div className="relative flex items-center justify-center h-32 w-32">
              {/* Circular progress simulated */}
              <svg className="w-full h-full transform -rotate-95" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="8" fill="transparent" />
                <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="60" strokeLinecap="round" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-extrabold text-foreground">76%</span>
                <span className="text-[10px] uppercase text-muted-foreground">Recovery</span>
              </div>
            </div>
            <div className="mt-4 text-center text-xs text-muted-foreground">
              Recovery is <span className="font-semibold text-emerald-600">+12% higher</span> than your 30-day average.
            </div>
          </CardContent>
        </Card>

        {/* Sleep Score Card */}
        <Card className="bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-transparent border-indigo-500/20">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Moon className="h-5 w-5 text-indigo-500" /> Sleep Quality
              </CardTitle>
              <Badge variant="outline" className="border-indigo-500/30 text-indigo-600 bg-indigo-50">84/100</Badge>
            </div>
            <CardDescription>Duration, efficiency, and sleep cycle consistency</CardDescription>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-3xl font-extrabold">7h 24m</span>
                <p className="text-[10px] uppercase text-muted-foreground">Time Asleep</p>
              </div>
              <div className="text-right text-xs">
                <span className="font-semibold text-indigo-600">92%</span> Efficiency
                <p className="text-[10px] text-muted-foreground">14m latency</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Deep Sleep (1h 45m)</span>
                <span className="text-muted-foreground">Optimal</span>
              </div>
              <Progress value={75} className="h-1.5 bg-indigo-100" />
              <div className="flex justify-between text-xs">
                <span>REM Sleep (2h 10m)</span>
                <span className="text-muted-foreground">Optimal</span>
              </div>
              <Progress value={85} className="h-1.5 bg-indigo-100" />
            </div>
          </CardContent>
        </Card>

        {/* Stress & HRV Card */}
        <Card className="bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent border-violet-500/20">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Brain className="h-5 w-5 text-violet-500" /> Autonomic Balance
              </CardTitle>
              <Badge variant="outline" className="border-violet-500/30 text-violet-600 bg-violet-50">Stable</Badge>
            </div>
            <CardDescription>Autonomic Stress score and Heart Rate Variability (HRV)</CardDescription>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="border bg-background/50 rounded-2xl p-3 text-center">
                <span className="block text-2xl font-extrabold text-violet-600">62 ms</span>
                <span className="text-[10px] text-muted-foreground">HRV (rMSSD)</span>
              </div>
              <div className="border bg-background/50 rounded-2xl p-3 text-center">
                <span className="block text-2xl font-extrabold text-violet-600">54 bpm</span>
                <span className="text-[10px] text-muted-foreground">Resting HR</span>
              </div>
            </div>
            <div className="rounded-2xl border bg-muted/30 p-3 text-xs flex items-start gap-2">
              <Sparkles className="h-4 w-4 text-violet-600 shrink-0 mt-0.5" />
              <span>HRV is elevated by 8% above average, correlating with a rest day. Stress is currently low-stable.</span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Main Focus Detail Sections */}
      <section className="grid gap-6 lg:grid-cols-2">
        {/* Weekly Body Reviews */}
        <Card className="bg-card/90">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-primary" /> Weekly Body Composition Review</CardTitle>
            <CardDescription>Latest bioimpedance measurements and progress indicators.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Body Weight", value: "72.4 kg", change: "-0.4 kg from last week", trend: "down" },
              { label: "Body Fat Percentage", value: "15.8%", change: "-0.2% from last week", trend: "down" },
              { label: "Skeletal Muscle Mass", value: "35.2 kg", change: "+0.1 kg from last week", trend: "up" },
              { label: "Visceral Fat Level", value: "Grade 6", change: "Stable", trend: "stable" },
              { label: "Total Body Water", value: "54.2%", change: "Optimal hydration", trend: "stable" }
            ].map((metric) => (
              <div key={metric.label} className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0">
                <div>
                  <span className="font-semibold text-sm block">{metric.label}</span>
                  <span className="text-xs text-muted-foreground">{metric.change}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-lg font-bold text-foreground">{metric.value}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Actionable Health Nudges */}
        <Card className="bg-card/90">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Activity className="h-5 w-5 text-primary" /> Active Habits & Correlations</CardTitle>
            <CardDescription>Data-driven habit associations built from your daily tracking feed.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border bg-emerald-50/50 p-4">
              <h3 className="font-semibold text-sm text-emerald-900 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> Positive Habit Correlates
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-emerald-800/95 list-disc pl-4">
                <li>Completing a morning walk + recording voice notes correlates with 15% better sleep efficiency.</li>
                <li>Eating dinner before 7:30 PM correlates with a 6 bpm reduction in overnight resting heart rate.</li>
                <li>Resting on weekends correlates with higher next-day HRV levels.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-amber-50/50 p-4">
              <h3 className="font-semibold text-sm text-amber-900 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-600" /> Opportunities for Improvement
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-amber-800/95 list-disc pl-4">
                <li>Late-night screen use (after 10:30 PM) reduces deep sleep duration by an average of 18 minutes.</li>
                <li>Caffeine intake after 2:00 PM correlates with higher stress markers and longer sleep latency.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

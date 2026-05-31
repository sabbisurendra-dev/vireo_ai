import React from "react";
import { Link, useLocation } from "wouter";
import {
  Activity,
  Bot,
  BrainCircuit,
  ChevronDown,
  ExternalLink,
  Home,
  Library,
  LogOut,
  Map,
  Menu,
  MessageCircle,
  Mic,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { path: "/", label: "Home", icon: Home },
  { path: "/courses", label: "My Skills", icon: Library },
  { path: "/wallet", label: "Personal Wallet", icon: ShieldCheck },
];

function VireoLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-slate-800 shadow-lg shadow-black/15">
        <div className="absolute inset-0 bg-[conic-gradient(from_140deg,#2f80ed,#27ae60,#9ca3af,#2f80ed)] opacity-95" />
        <div className="absolute inset-[4px] rounded-xl bg-sidebar/90" />
        <div className="relative flex items-center gap-0.5">
          <Activity className="h-4 w-4 text-emerald-300" />
          <Library className="h-4 w-4 text-sky-300" />
          <ShieldCheck className="h-4 w-4 text-slate-200" />
        </div>
      </div>
      {!compact && (
        <div>
          <div className="text-xl font-bold tracking-tight">Vireo</div>
          <div className="text-xs text-sidebar-foreground/60">Health • Learning • Wallet</div>
        </div>
      )}
    </div>
  );
}

function AssistantDock() {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState<"menu" | "chat" | "voice">("menu");
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([
    { role: "assistant", text: "Hi, I'm Vireo. Ask me about health trends, learning progress, wallet proofs, or anything else." },
  ]);
  const chatEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const openAssistant = () => {
      setOpen(true);
      setMode("menu");
    };
    window.addEventListener("open-wisdom-assistant", openAssistant);
    return () => window.removeEventListener("open-wisdom-assistant", openAssistant);
  }, []);

  React.useEffect(() => {
    if (mode === "chat") {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, mode]);

  const answer = (text: string) => {
    const q = text.toLowerCase();
    if (q.includes("health") || q.includes("sleep") || q.includes("habit") || q.includes("recovery")) return "Your useful next health action is to check today's recovery, sleep, stress, and body trend together. The strongest nudge is: protect sleep tonight, then review the 7-day habit correlations before changing routines.";
    if (q.includes("wallet") || q.includes("id") || q.includes("proof") || q.includes("asset")) return "Your wallet stays private by default. Open it for ID cards first, then use the assets and liabilities view only when you need deeper financial or ownership records.";
    if (q.includes("learn") || q.includes("course") || q.includes("skill") || q.includes("cooking")) return "Your active learning path: Indian Cooking Foundations, Health Baseline Systems, and AI and Data Science. Pick one next action per course so progress stays visible and practical.";
    if (q.includes("legal") || q.includes("privacy") || q.includes("gdpr") || q.includes("dpdp")) return "For public readiness, keep consent, purpose limitation, data export/delete, privacy policy, health disclaimer, and AI disclosure visible. Treat health, identity, and financial records as sensitive data.";
    if (q.includes("emergency")) return "Emergency info is always one tap away: India 112, emergency contacts, blood group, allergies, medications, and nearest hospital. Keep this information updated and shared with a trusted contact.";
    return "I can help with health, learning, wallet, or planning. Tell me which area you want to improve today.";
  };

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((current) => [...current, { role: "user", text: trimmed }, { role: "assistant", text: answer(trimmed) }]);
    setInput("");
    setMode("chat");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[min(92vw,380px)] overflow-hidden rounded-[1.75rem] border bg-card shadow-2xl shadow-black/20 animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center justify-between border-b bg-sidebar p-4 text-sidebar-foreground">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground"><Bot className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold">Vireo</div>
                <div className="text-xs text-sidebar-foreground/60">Your personal AI — simulated now</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-sidebar-foreground hover:bg-sidebar-accent"><X className="h-4 w-4" /></Button>
          </div>
          {mode === "menu" && (
            <div className="grid gap-3 p-4">
              <Button className="justify-start rounded-2xl" onClick={() => setMode("chat")}><MessageCircle className="h-4 w-4" /> Chat with Vireo</Button>
              <Button variant="secondary" className="justify-start rounded-2xl" onClick={() => setMode("voice")}><Mic className="h-4 w-4" /> Talk using voice</Button>
              <div className="rounded-2xl border bg-muted/40 p-3 text-xs text-muted-foreground">Vireo uses current prototype knowledge about health, learning, wallet, assets, and legal readiness.</div>
            </div>
          )}
          {mode === "voice" && (
            <div className="space-y-4 p-4">
              <div className="rounded-3xl border bg-muted/40 p-5 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary"><Mic className="h-7 w-7" /></div>
                <h3 className="mt-4 font-semibold">Voice mode is staged</h3>
                <p className="mt-2 text-sm text-muted-foreground">In production this connects to microphone permission and an open speech-to-text model. For now, type the same question in chat.</p>
              </div>
              <Button variant="outline" className="w-full rounded-2xl" onClick={() => setMode("chat")}>Open chat instead</Button>
            </div>
          )}
          {mode === "chat" && (
            <div className="flex max-h-[520px] flex-col">
              <div className="flex-1 space-y-3 overflow-y-auto p-4">
                {messages.map((message, index) => (
                  <div key={`${message.role}-${index}`} className={`rounded-2xl p-3 text-sm ${message.role === "assistant" ? "bg-muted text-foreground" : "ml-8 bg-primary text-primary-foreground"}`}>{message.text}</div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <div className="flex gap-2 border-t p-3">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => event.key === "Enter" && sendMessage()}
                  placeholder="Ask Vireo anything..."
                  className="min-w-0 flex-1 rounded-2xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <Button size="icon" onClick={sendMessage} disabled={!input.trim()} className="rounded-2xl"><Send className="h-4 w-4" /></Button>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex items-center gap-2 rounded-full border bg-card/90 p-2 shadow-2xl shadow-black/15 backdrop-blur">
        <Button size="icon" variant="secondary" className="rounded-full" onClick={() => { setOpen(true); setMode("voice"); }}><Mic className="h-4 w-4" /></Button>
        <Button className="rounded-full shadow-lg" onClick={() => { setOpen(!open); setMode(open ? mode : "menu"); }}><Bot className="h-4 w-4" /> Vireo</Button>
      </div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [moreOpen, setMoreOpen] = React.useState(false);
  const moreRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };
    if (moreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreOpen]);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground md:flex">
      <aside className="hidden w-72 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground md:flex">
        <div className="border-b border-sidebar-border px-6 py-6"><VireoLogo /></div>
        <nav className="flex-1 space-y-1 p-4">
          {NAV_ITEMS.map((item) => {
            const active = location === item.path;
            return (
              <Link key={item.path} href={item.path} className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${active ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-foreground"}`}>
                <item.icon className={`h-4 w-4 transition-transform ${active ? "scale-110" : "group-hover:scale-110"}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="m-4 rounded-3xl border border-sidebar-border bg-sidebar-accent/50 p-4">
          <div className="text-xs uppercase tracking-[0.22em] text-sidebar-foreground/50">Mission</div>
          <p className="mt-2 text-sm leading-relaxed text-sidebar-foreground/80">A free-tool-first assistant for one user today, one billion impacted over time.</p>
        </div>
      </aside>

      <main className="flex min-h-[100dvh] flex-1 flex-col overflow-y-auto pt-16 md:pt-0">
        <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b bg-background/90 px-4 backdrop-blur md:sticky md:left-auto md:px-8">
          <div className="flex items-center gap-3">
            <div className="md:hidden"><VireoLogo compact /></div>
            <Link href="/"><Button variant="ghost" size="sm" className="rounded-full"><Home className="h-4 w-4" /> Home</Button></Link>
            <div className="hidden items-center gap-1 rounded-full border bg-muted/40 px-2 py-1 text-xs text-muted-foreground lg:flex">
              <Activity className="h-3.5 w-3.5 text-emerald-600" /> Health
              <Library className="ml-2 h-3.5 w-3.5 text-sky-600" /> Learning
              <ShieldCheck className="ml-2 h-3.5 w-3.5 text-slate-600" /> Wallet
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative" ref={moreRef}>
              <Button variant="secondary" size="sm" className="rounded-full" onClick={() => setMoreOpen(!moreOpen)}>More <ChevronDown className="h-4 w-4" /></Button>
              {moreOpen && (
                <div className="absolute right-0 top-11 w-72 overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-black/10">
                  {/* Explore section */}
                  <div className="px-4 pt-4 pb-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Explore</p>
                  </div>
                  <div className="px-2 pb-2 space-y-0.5">
                    <Link href="/mind-maps" onClick={() => setMoreOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted">
                      <div className="grid h-7 w-7 place-items-center rounded-lg bg-violet-100 text-violet-600"><BrainCircuit className="h-4 w-4" /></div>
                      Mind Maps
                    </Link>
                    <Link href="/roadmap" onClick={() => setMoreOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted">
                      <div className="grid h-7 w-7 place-items-center rounded-lg bg-sky-100 text-sky-600"><Map className="h-4 w-4" /></div>
                      100-Year Roadmap
                    </Link>
                    <Link href="/ai-lab" onClick={() => setMoreOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted">
                      <div className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-100 text-emerald-600"><Bot className="h-4 w-4" /></div>
                      AI Lab
                    </Link>
                  </div>

                  {/* Divider */}
                  <div className="mx-3 my-1 border-t" />

                  {/* Legal & privacy section */}
                  <div className="px-4 pt-3 pb-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Legal & Privacy</p>
                  </div>
                  <div className="px-2 pb-2 space-y-0.5">
                    <Link href="/legal" onClick={() => setMoreOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted">
                      <div className="grid h-7 w-7 place-items-center rounded-lg bg-slate-100 text-slate-600"><ShieldCheck className="h-4 w-4" /></div>
                      Privacy & Compliance
                    </Link>
                    <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noreferrer noopener" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted">
                      <div className="grid h-7 w-7 place-items-center rounded-lg bg-amber-100 text-amber-600"><ExternalLink className="h-4 w-4" /></div>
                      India DPDP Act
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="mx-3 my-1 border-t" />

                  {/* Account */}
                  <div className="px-2 py-2">
                    <button onClick={() => { setMoreOpen(false); window.alert("Logout is staged for the future authenticated version."); }} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                      <div className="grid h-7 w-7 place-items-center rounded-lg bg-muted text-muted-foreground"><LogOut className="h-4 w-4" /></div>
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">{isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</Button>
          </div>
        </header>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-40 bg-sidebar p-4 text-sidebar-foreground md:hidden">
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium transition-colors ${location === item.path ? "bg-primary text-primary-foreground" : "text-sidebar-foreground/80 hover:bg-sidebar-accent"}`}>
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <div className="px-4 pb-2 text-xs uppercase tracking-[0.2em] text-sidebar-foreground/50">More</div>
                <Link href="/mind-maps" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-sidebar-foreground/80 hover:bg-sidebar-accent"><BrainCircuit className="h-5 w-5" /> Mind Maps</Link>
                <Link href="/roadmap" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-sidebar-foreground/80 hover:bg-sidebar-accent"><Map className="h-5 w-5" /> 100-Year Roadmap</Link>
                <Link href="/ai-lab" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-sidebar-foreground/80 hover:bg-sidebar-accent"><Bot className="h-5 w-5" /> AI Lab</Link>
                <Link href="/legal" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-sidebar-foreground/80 hover:bg-sidebar-accent">Privacy & Compliance</Link>
              </div>
            </nav>
          </div>
        )}

        <div className="mx-auto w-full max-w-7xl flex-1 p-5 md:p-8 lg:p-10">{children}</div>
        <footer className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-5 pb-24 text-xs text-muted-foreground md:px-8 lg:px-10">
          <span>Vireo — health, learning, and wallet in one place.</span>
          <div className="flex gap-3">
            <Link href="/legal" className="hover:text-primary">Privacy</Link>
            <Link href="/legal" className="hover:text-primary">Health data</Link>
            <Link href="/legal" className="hover:text-primary">DPDP/GDPR</Link>
          </div>
        </footer>
      </main>
      <AssistantDock />
    </div>
  );
}

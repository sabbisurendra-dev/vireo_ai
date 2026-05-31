import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Brain, Bot, MessageSquare, Terminal, Lightbulb, Globe, Copy, ClipboardCheck } from "lucide-react";

const platforms = [
  {
    name: "ChatGPT / OpenAI",
    description: "General synthesis, coding, and logical reasoning.",
    icon: MessageSquare,
    color: "#10a37f",
    bestFor: "Zero-to-one drafting, code generation, aggressive formatting tasks.",
    weakness: "Can be overly verbose; watch for generic phrasing unless you give a strong style constraint.",
    label: "Power Prompt",
    prompt: "Act as a ruthless editor. Take this rough draft of my PRD and rewrite it to be exactly 500 words. Cut all adjectives. Use bullet points for requirements. Optimize for a busy VP of Engineering."
  },
  {
    name: "Claude / Anthropic",
    description: "Nuance, tone matching, and long-context analysis.",
    icon: Brain,
    color: "#d97757",
    bestFor: "Deep reading of large documents, natural writing tone, complex reasoning, and thoughtful critique.",
    weakness: "Can be too agreeable if you do not ask it to challenge assumptions explicitly.",
    label: "Power Prompt",
    prompt: "Read the above text. Extract the core mental models the author uses to make decisions. Format as a table: Model Name | Definition | Example from text | How I can apply it to my startup."
  },
  {
    name: "Perplexity",
    description: "Real-time research and verified sourcing.",
    icon: Globe,
    color: "#3b82f6",
    bestFor: "Market research, finding recent news, checking facts, and collecting credible source links.",
    weakness: "Not ideal for deep creative drafting or complex app-building workflows.",
    label: "Power Prompt",
    prompt: "Find the 5 most recently funded startups in the AI agents for healthcare space. List their funding amount, lead investor, source URL, and a 1-sentence summary of their unique technical approach."
  },
  {
    name: "NotebookLM",
    description: "Personal knowledge grounding and audio generation.",
    icon: Bot,
    color: "#eab308",
    bestFor: "Chatting with your own messy notes, creating audio overviews from PDFs, and synthesizing a controlled knowledge base.",
    weakness: "Cannot browse the live web during chat; it is limited to uploaded sources.",
    label: "Walking Workflow",
    prompt: "Upload all voice memos and notes from the week → generate an Audio Overview → listen while walking → return and write next week's learning plan based on the synthesized insights."
  }
];

const inversionPrompts = [
  {
    title: "The Steelman",
    prompt: "Here is my thesis on why local LLMs will win. Present the absolute strongest argument against this. Do not be polite. Identify what evidence would change my mind."
  },
  {
    title: "The Socratic Interrogator",
    prompt: "I want to learn about React rendering. Ask me one question at a time to test my understanding. Do not give me the answer unless I fail 3 times."
  },
  {
    title: "The Board Meeting",
    prompt: "Here is my Q3 launch plan. Act as a skeptical CFO, a visionary CEO, a privacy lawyer, and a tired head of engineering. Debate the plan and produce the final decision memo."
  }
];

const promptLibrary = [
  {
    title: "Claude Instructions section",
    use: "Paste into Claude's custom instructions or project instructions.",
    prompt: "Respond like a calm senior product strategist, research partner, and execution coach. Help me build a self-improving personal AI assistant that compounds health, learning, habits, and wallet readiness. Prefer clear frameworks, practical next steps, and source-backed reasoning. Challenge weak assumptions politely but directly. When I share raw notes, convert them into structured plans, decision memos, or course outlines. Keep outputs actionable, concise, and reusable. Always separate facts, assumptions, risks, and next actions. Optimize for free or open-source tools first, long-term ownership, ethical data use, and real-user value."
  },
  {
    title: "Website UI/UX/Design",
    use: "Generate a premium free-tool website design brief.",
    prompt: "Design and build a visually stunning website using only free, open-source design and development tools. Use Figma free tier for wireframes, Next.js or React for the frontend, Tailwind CSS for styling, shadcn/ui for accessible components, Lucide for icons, and Google Fonts. Make every screen mobile-first, fast, readable, and WCAG AA accessible. The homepage must communicate the promise in seconds, guide visitors to sign up, and feel premium without paid tools. Keep transitions under 200ms, use intentional whitespace, and make every button perform a clear action."
  },
  {
    title: "App Functionality",
    use: "Generate a functionality spec for the mobile app.",
    prompt: "Build a fully functional mobile-ready personal assistant app using free, open-source tools end to end. Use Expo and React Native for iOS, Android, and web; Supabase for auth, database, storage, and real-time sync; Zustand for local state; React Query for server state; Zod for validation; and Expo SecureStore for sensitive data. Core features include voice capture, daily learning feed, habit tracker, mind maps, and a course library. Every API call needs loading, success, and error states. Offline capture should work gracefully and sync later."
  },
  {
    title: "Business Documents",
    use: "Generate a business-document creation plan.",
    prompt: "Create the complete business document set for a Personal AI Assistant app using free tools. Include a one-page vision memo, MVP scope, launch plan, GTM calendar, user research script, pricing model, 10-slide pitch deck, compliance checklist, privacy policy outline, course curriculum, certification plan, and investor/customer narrative. Use Notion or Google Docs for writing, Figma for wireframes, GitHub for product history, and Replit or VS Code for demos."
  },
  {
    title: "Overall strategy",
    use: "Generate a full app, website, launch, and roadmap brief.",
    prompt: "Create a Personal AI Assistant that compounds knowledge, health, habits, product thinking, courses, and wallet readiness. Build the website and app using free or open-source tools: Next.js or React for web, Expo for mobile, Supabase for data and auth, Claude-compatible AI for intelligence, Whisper-style voice capture, GitHub for code, and Vercel for web hosting. Core features are voice capture, daily learning feed, habit tracker, mind maps, course library, and wallet. Launch free, monetize at value moments, and scale through B2B, certifications, and templates."
  },
  {
    title: "0-1 business and GTM",
    use: "Generate a business launch plan from scratch.",
    prompt: "Build a zero-to-one business plan for a Personal AI Assistant from scratch. Define the target user, painful problem, unique promise, MVP, prototype, launch channels, pricing, revenue streams, and scale path. Include demos, wireframes, pitch deck, legal and compliance notes for India DPDP and GDPR, GTM via SEO, LinkedIn, Product Hunt, communities, and workshops, plus a roadmap for 1, 3, 5, 10, 25, and 100 years."
  }
];

function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = React.useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      toast({ title: "Copy failed", description: "Please select and copy the text manually.", variant: "destructive" });
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={handleCopy} className="shrink-0">
      {copied ? <ClipboardCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied" : label}
    </Button>
  );
}

export function AILab() {
  const { toast } = useToast();

  const copyAllInversion = async () => {
    try {
      await navigator.clipboard.writeText(inversionPrompts.map((item) => `${item.title}: ${item.prompt}`).join("\n\n"));
      toast({ title: "Inversion session copied", description: "All 3 prompts are in your clipboard." });
    } catch {
      toast({ title: "Copy failed", description: "Please select and copy the text manually.", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-primary">AI Learning Lab</h1>
        <p className="text-muted-foreground mt-2 text-lg">Master platforms, reusable prompts, and AI-backwards thinking loops.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold border-b pb-2">Platform Capabilities</h3>
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <Card key={platform.name} className="bg-card">
                <CardHeader className="pb-3 flex flex-row items-center gap-4">
                  <div className="h-10 w-10 rounded-md flex items-center justify-center" style={{ backgroundColor: `${platform.color}1a`, color: platform.color }}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                    <CardDescription>{platform.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm space-y-2">
                    <p><span className="font-semibold text-foreground">Best for:</span> {platform.bestFor}</p>
                    <p><span className="font-semibold text-foreground">Weakness:</span> {platform.weakness}</p>
                  </div>
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="text-xs font-bold text-muted-foreground uppercase">{platform.label}</p>
                      <CopyButton text={platform.prompt} />
                    </div>
                    <p className="text-sm font-mono leading-relaxed">{platform.prompt}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold border-b pb-2">Using AI Backwards</h3>
          <Card className="bg-primary text-primary-foreground border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary-foreground/80" /> The Inversion Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-primary-foreground/90">
              <p>Instead of asking AI to write things for you, use it to critique, stress-test, and upgrade your own thinking. The goal is to train your own judgment, not just outsource work.</p>
              <div className="space-y-3 mt-4">
                {inversionPrompts.map((item) => (
                  <div key={item.title} className="bg-background/10 p-3 rounded border border-background/20 backdrop-blur-sm">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <Badge variant="outline" className="bg-background/20 text-primary-foreground border-none">{item.title}</Badge>
                      <CopyButton text={item.prompt} label="Copy" />
                    </div>
                    <p className="text-xs italic">{item.prompt}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full text-primary hover:bg-background/90" onClick={copyAllInversion}>
                <Terminal className="h-4 w-4 mr-2" /> Copy Inversion Session
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Card className="bg-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl">Appendix: Reusable 100-word Prompt Library</CardTitle>
          <CardDescription>Copy-ready prompts for Claude instructions, website, app, business documents, and overall strategy.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2">
          {promptLibrary.map((item) => (
            <div key={item.title} className="rounded-xl border bg-muted/30 p-4 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-semibold text-primary">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.use}</p>
                </div>
                <CopyButton text={item.prompt} />
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">{item.prompt}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

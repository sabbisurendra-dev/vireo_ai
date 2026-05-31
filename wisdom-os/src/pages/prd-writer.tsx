import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Save, FileText, Trash2, Plus, Mic, HeartPulse, Utensils, ShieldCheck, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PRD {
  id: string;
  title: string;
  problem: string;
  audience: string;
  requirements: string;
  researchQuestions: string;
  launchNotes: string;
  aiPrompts: string;
  updatedAt: string;
}

const emptyPRD: PRD = {
  id: "",
  title: "",
  problem: "",
  audience: "",
  requirements: "",
  researchQuestions: "",
  launchNotes: "",
  aiPrompts: "",
  updatedAt: "",
};

const PRD_TEMPLATES = [
  {
    title: "Goal 1: Health Baseline Assistant",
    icon: HeartPulse,
    problem: "Users have health data across wearables, journals, smart scales, routines, and subjective feelings, but no single operating system that turns it into maintain-alert-achieve actions.",
    audience: "Working professionals who want to maintain baseline physical, mental, sleep, diet, exercise, and recreation health while using WHOOP-style and Withings-style signals responsibly.",
    requirements: "Combine wearable recovery, sleep, stress, journal, and weekly body composition inputs. Let users add/delete habits. Track habit consistency. Show critical threshold alerts. Explain trends clearly. Include a health disclaimer and escalation path for medical concerns.",
    researchQuestions: "What reliable public sources should define baseline ranges? Which WHOOP/Withings signals are available through official APIs or exports? Which thresholds require medical review? How should habit impact be analysed without overclaiming causality?",
    launchNotes: "Start with manual entry and CSV/import placeholders. Validate with 10 users tracking sleep, movement, diet, weight, mood, and habits for 14 days.",
    aiPrompts: "Improve this health PRD using credible sources such as WHO, CDC, NIH, Sleep Foundation, and official device documentation. Separate facts, assumptions, risks, and next actions.",
  },
  {
    title: "Goal 2: Indian Cooking Course",
    icon: Utensils,
    problem: "Users want to cook Indian food that is healthy, safe, convenient, reliable, simple, and tasty, but cooking knowledge is scattered across recipes rather than reusable foundations.",
    audience: "Beginners and working professionals who want a practical Indian cooking system covering oil bases, ingredients, carbs, proteins, dry masalas, wet masalas, and hybrid masalas.",
    requirements: "Create a course and one-page PDF-style reference. Cover ghee, olive oil, mustard oil, butter; egg, chicken, vegetables, nuts, legumes, plants, fruits; protein bread; dry, wet, and hybrid masala systems; food safety and hygiene.",
    researchQuestions: "Which food safety rules from FSSAI/WHO should be mandatory? What healthy plate guidance should shape portions? Which cooking techniques are easiest to practice in week one?",
    launchNotes: "Ship as a free learning module with a reference card. Ask users to cook three repeatable dishes and record time, taste, convenience, and safety issues.",
    aiPrompts: "Improve this cooking PRD using credible sources including FSSAI, WHO food safety, and reputable nutrition guidance. Keep it practical for Indian home cooking.",
  },
  {
    title: "Goal 3: One-Stop Proof Wallet",
    icon: ShieldCheck,
    problem: "Important identity, ownership, emergency, travel, asset, liability, and financial education information is fragmented across portals, documents, apps, and memory.",
    audience: "Working professionals in tier 1 and tier 2 urban Indian cities who need trusted links, proof indexes, emergency readiness, travel support, and financial clarity.",
    requirements: "Create a dashboard for identity proofs, licences, emergency help, travel support, language links, DigiLocker/DigiYatra-style services, assets, liabilities, financial health, EPF/bank/investment resource links, flash cards, and quizzes. Use only trusted public sources and clear disclaimers.",
    researchQuestions: "Which official government and public-service links should be included? What data can be indexed without storing sensitive files? What consent, encryption, deletion, and DPDP/GDPR controls are needed?",
    launchNotes: "Begin with a local checklist and official links. Avoid storing sensitive documents until auth, encryption, and data export/delete flows are production-ready.",
    aiPrompts: "Improve this proof wallet PRD using credible Indian public sources, privacy laws, and product risk analysis. Separate official links from future integrations.",
  },
];

export function PRDWriter() {
  const [prds, setPrds] = useLocalStorage<PRD[]>("wisdom_prds", []);
  const [currentId, setCurrentId] = useState<string | null>(prds.length > 0 ? prds[0].id : null);
  const [formData, setFormData] = useState<PRD>(
    prds.find(p => p.id === currentId) || emptyPRD
  );
  const { toast } = useToast();

  const handleCreate = (template?: (typeof PRD_TEMPLATES)[number]) => {
    const newId = Date.now().toString();
    const newPrd = {
      ...emptyPRD,
      ...template,
      id: newId,
      title: template?.title || "Untitled PRD",
      updatedAt: new Date().toISOString(),
    };
    setPrds([...prds, newPrd]);
    setCurrentId(newId);
    setFormData(newPrd);
  };

  const handleSelect = (id: string) => {
    const prd = prds.find(p => p.id === id);
    if (prd) {
      setCurrentId(id);
      setFormData(prd);
    }
  };

  const handleSave = () => {
    if (!currentId) return;
    const updatedPrd = { ...formData, updatedAt: new Date().toISOString() };
    setPrds(prds.map(p => p.id === currentId ? updatedPrd : p));
    toast({
      title: "PRD Saved",
      description: "Your product requirements document has been saved locally.",
    });
  };

  const handleDelete = (id: string) => {
    const newPrds = prds.filter(p => p.id !== id);
    setPrds(newPrds);
    if (currentId === id) {
      setCurrentId(newPrds.length > 0 ? newPrds[0].id : null);
      setFormData(newPrds.length > 0 ? newPrds[0] : emptyPRD);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col">
      <section className="rounded-[2rem] border bg-card/95 p-6 shadow-xl shadow-primary/5 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              <Mic className="h-3.5 w-3.5" />
              Voice PRD Builder
            </div>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">Turn walks, voice notes, and raw ideas into source-backed product requirements.</h1>
            <p className="mt-3 max-w-3xl text-muted-foreground md:text-lg">Start from the health, cooking, or proof wallet PRDs in your prompt, then save and refine them locally.</p>
          </div>
          <Button variant="secondary" className="rounded-2xl" onClick={() => window.alert("Voice capture is planned for the Expo/Whisper version. For now, paste transcript notes into the PRD fields.")}>
            <Sparkles className="h-4 w-4" />
            Voice mode plan
          </Button>
        </div>
      </section>

      <div className="grid gap-3 md:grid-cols-3">
        {PRD_TEMPLATES.map((template) => {
          const Icon = template.icon;
          return (
            <button key={template.title} onClick={() => handleCreate(template)} className="group rounded-3xl border bg-card/90 p-4 text-left transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
              <h3 className="font-semibold group-hover:text-primary">{template.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Create a pre-filled PRD from the attached prompt.</p>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 min-h-0">
        <Card className="col-span-1 lg:col-span-1 flex flex-col">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Drafts</CardTitle>
              <Button size="icon" variant="ghost" onClick={() => handleCreate()}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-2 pr-2">
            {prds.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No PRDs yet. Create one or use a prompt template above.
              </div>
            ) : (
              prds.map(prd => (
                <div 
                  key={prd.id}
                  onClick={() => handleSelect(prd.id)}
                  className={`p-3 rounded-md cursor-pointer border transition-colors ${currentId === prd.id ? 'bg-primary/10 border-primary/50' : 'bg-card border-transparent hover:border-border'}`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm truncate pr-2">{prd.title || "Untitled"}</h4>
                    <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-destructive" onClick={(e) => { e.stopPropagation(); handleDelete(prd.id); }}>
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(prd.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3 flex flex-col">
          {currentId ? (
            <>
              <CardHeader className="border-b bg-muted/20 pb-4">
                <div className="flex items-center justify-between">
                  <Input 
                    value={formData.title} 
                    onChange={e => setFormData({...formData, title: e.target.value})} 
                    className="text-xl font-bold bg-transparent border-none px-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="PRD Title..."
                  />
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleSave}>
                      <Save className="h-4 w-4 mr-2" /> Save
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-0">
                <Tabs defaultValue="edit" className="h-full flex flex-col">
                  <div className="border-b px-6 py-2 bg-background sticky top-0 z-10">
                    <TabsList>
                      <TabsTrigger value="edit">Edit Spec</TabsTrigger>
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="edit" className="flex-1 p-6 space-y-8 m-0 mt-2">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-foreground">The Problem</label>
                      <Textarea 
                        placeholder="What problem are you solving?" 
                        className="min-h-[100px] resize-none"
                        value={formData.problem}
                        onChange={e => setFormData({...formData, problem: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-foreground">Target Audience</label>
                      <Textarea 
                        placeholder="Who is this for?" 
                        className="min-h-[80px] resize-none"
                        value={formData.audience}
                        onChange={e => setFormData({...formData, audience: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-foreground">Core Requirements</label>
                      <Textarea 
                        placeholder="What must this product do?" 
                        className="min-h-[120px] resize-none"
                        value={formData.requirements}
                        onChange={e => setFormData({...formData, requirements: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-foreground">Research Questions</label>
                      <Textarea 
                        placeholder="What do you need to figure out?" 
                        className="min-h-[100px] resize-none"
                        value={formData.researchQuestions}
                        onChange={e => setFormData({...formData, researchQuestions: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-foreground">Launch Notes</label>
                      <Textarea 
                        placeholder="Go-to-market strategy, marketing ideas..." 
                        className="min-h-[100px] resize-none"
                        value={formData.launchNotes}
                        onChange={e => setFormData({...formData, launchNotes: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-foreground">AI Improvement Prompts</label>
                      <Textarea 
                        placeholder="Prompts to run this spec through AI (e.g. 'Critique this PRD as a harsh YC partner')" 
                        className="min-h-[100px] resize-none"
                        value={formData.aiPrompts}
                        onChange={e => setFormData({...formData, aiPrompts: e.target.value})}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="preview" className="flex-1 p-8 m-0 mt-2 prose dark:prose-invert max-w-none">
                    <h1 className="border-b pb-2">{formData.title || "Untitled PRD"}</h1>
                    
                    <h3>The Problem</h3>
                    <p className="whitespace-pre-wrap">{formData.problem || "Not defined."}</p>
                    
                    <h3>Target Audience</h3>
                    <p className="whitespace-pre-wrap">{formData.audience || "Not defined."}</p>
                    
                    <h3>Core Requirements</h3>
                    <p className="whitespace-pre-wrap">{formData.requirements || "Not defined."}</p>
                    
                    <h3>Research Questions</h3>
                    <p className="whitespace-pre-wrap">{formData.researchQuestions || "Not defined."}</p>
                    
                    <h3>Launch Notes</h3>
                    <p className="whitespace-pre-wrap">{formData.launchNotes || "Not defined."}</p>
                    
                    <h3>AI Prompts</h3>
                    <p className="whitespace-pre-wrap">{formData.aiPrompts || "Not defined."}</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-8">
              <FileText className="h-16 w-16 mb-4 opacity-20" />
              <p className="text-lg">Select a PRD or create one from a prompt template to start writing.</p>
              <Button className="mt-4" onClick={() => handleCreate()}>Create New PRD</Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

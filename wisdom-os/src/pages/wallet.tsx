import React from "react";
import { AlertTriangle, ArrowRight, BadgeIndianRupee, CreditCard, LockKeyhole, ShieldCheck, Smartphone, WalletCards, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const walletCards = [
  { name: "Company ID Card", type: "Work identity", number: "EMP ••• 2048", color: "from-slate-800 to-slate-600", image: `${BASE}/generated/company-id-card.png` },
  { name: "Aadhaar", type: "Government ID", number: "XXXX XXXX 7821", color: "from-emerald-700 to-teal-600", image: `${BASE}/generated/aadhaar-card.png` },
  { name: "PAN", type: "Tax identity", number: "ABCDE••••F", color: "from-sky-800 to-blue-600", image: `${BASE}/generated/pan-card.png` },
  { name: "Driving Licence", type: "Licence", number: "DL •••• 9134", color: "from-zinc-800 to-stone-600", image: `${BASE}/generated/driving-licence-card.png` },
  { name: "Permit Card", type: "Access permit", number: "PERMIT ••• 118", color: "from-amber-800 to-orange-600", image: `${BASE}/generated/permit-card.png` },
];

const paymentApps = [
  {
    name: "PhonePe",
    logo: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#5f259f] shrink-0" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" />
        <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm-1 11H9V8h2v7zm4-4h-2v4h-2V8h4a2 2 0 010 4z" fill="white" />
      </svg>
    )
  },
  {
    name: "Google Pay",
    logo: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#f1f3f4" />
        <path d="M17.5 12.25c0-.4-.03-.78-.1-1.15h-5.4v2.18h3.08c-.13.7-.53 1.3-1.13 1.7v1.4h1.83c1.07-.98 1.72-2.43 1.72-4.13z" fill="#4285f4" />
        <path d="M12 17.8c1.56 0 2.88-.5 3.84-1.4l-1.83-1.4c-.5.34-1.15.54-2.01.54-1.55 0-2.85-1.04-3.32-2.44H6.77v1.45c.98 1.95 3.01 3.25 5.23 3.25z" fill="#34a853" />
        <path d="M8.68 13.1c-.12-.35-.18-.73-.18-1.1s.06-.75.18-1.1V9.45H6.77c-.4.8-.62 1.7-.62 2.65s.22 1.85.62 2.65l1.91-1.45z" fill="#fbbc05" />
        <path d="M12 6.2c.85 0 1.62.3 2.22.86l1.66-1.66C14.88 4.45 13.56 4 12 4c-2.22 0-4.25 1.3-5.23 3.25l1.91 1.45c.47-1.4 1.77-2.5 3.32-2.5z" fill="#ea4335" />
      </svg>
    )
  },
  {
    name: "Paytm",
    logo: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#00baf2" />
        <path d="M7 6h6.5c1.9 0 3.5 1.6 3.5 3.5S15.4 13 13.5 13H10v5H7V6zm3 4h3.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H10v1z" fill="white" />
      </svg>
    )
  },
  {
    name: "BHIM UPI",
    logo: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#0a2a4a" />
        <path d="M6 16l4-8h4l-4 8H6z" fill="#ff9933" />
        <path d="M10 16l4-8h4l-4 8h-4z" fill="white" />
      </svg>
    )
  }
];

export function Wallet() {
  const [open, setOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(walletCards[0]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <section className="text-center">
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">Personal Wallet</h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground md:text-lg">A private and secure replacement for the physical cards</p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className={`wallet-scene ${open ? "wallet-scene-open" : ""}`}>
          <button onClick={() => setOpen(true)} className="wallet-leather wallet-cover group relative min-h-[430px] w-full overflow-hidden rounded-[2rem] p-8 text-white shadow-2xl transition-all duration-700 hover:-translate-y-1">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_22%),radial-gradient(circle_at_80%_70%,black,transparent_25%)]" />
            
            {/* Security Indicator in top-right corner */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">Secure · Private</span>
              <LockKeyhole className="h-4 w-4 text-white/50" />
            </div>

            {/* Centralized CTA */}
            <div className="relative flex h-full items-center justify-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-2xl font-extrabold text-stone-900 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-white/20">
                Open Wallet <ArrowRight className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </button>
        </div>

        <Card className="bg-card/95 shadow-xl shadow-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> Privacy first</CardTitle>
            <CardDescription>Documents and financial details stay hidden until the wallet is opened.</CardDescription>
          </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border bg-muted/30 p-4"><AlertTriangle className="mb-2 h-5 w-5 text-amber-600" />Official verification, encryption, consent, and deletion/export flows are required before actual use.</div>
              <div className="rounded-2xl border bg-muted/30 p-4"><EyeOff className="mb-2 h-5 w-5 text-slate-600" />Net worth, number of IDs, and asset totals are intentionally not visible on the main view.</div>
            </CardContent>
        </Card>
      </section>

      {open && (
        <section className="animate-in fade-in slide-in-from-bottom-6 duration-500">
          <Card className="overflow-hidden border-primary/20 bg-sidebar text-sidebar-foreground shadow-2xl">
            <CardHeader className="border-b border-sidebar-border">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div><CardTitle className="flex items-center gap-2 text-2xl"><WalletCards className="h-6 w-6 text-primary" /> Wallet opened</CardTitle><CardDescription className="text-sidebar-foreground/65">Common cards found in a real physical wallet, enhanced by Vireo.</CardDescription></div>
                <Button variant="secondary" className="rounded-2xl" onClick={() => setOpen(false)}><X className="h-4 w-4" /> Close wallet</Button>
              </div>
            </CardHeader>
            <CardContent className="grid gap-6 p-5 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="space-y-3">
                {walletCards.map((card) => (
                  <button key={card.name} onClick={() => setSelectedCard(card)} className={`group w-full overflow-hidden rounded-3xl bg-gradient-to-br ${card.color} text-left text-white shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl ${selectedCard.name === card.name ? "ring-2 ring-primary ring-offset-2 ring-offset-sidebar" : ""}`}>
                    <div className="relative h-28 w-full overflow-hidden">
                      <img src={card.image} alt={card.name} className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <CreditCard className="absolute right-3 top-3 h-5 w-5 text-white/70" />
                    </div>
                    <div className="px-4 pb-4 pt-3">
                      <div className="font-semibold">{card.name}</div>
                      <div className="mt-0.5 flex items-center justify-between">
                        <span className="text-xs text-white/65">{card.type}</span>
                        <span className="font-mono text-xs text-white/65">{card.number}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div>
                <div className="rounded-[2rem] border border-sidebar-border bg-white p-5 text-slate-900 shadow-xl">
                  <div className="flex items-start justify-between gap-4"><div><div className="text-xs uppercase tracking-[0.25em] text-slate-400">Digitally valid preview</div><h3 className="mt-2 text-3xl font-bold">{selectedCard.name}</h3><p className="mt-1 text-sm text-slate-500">{selectedCard.type}</p></div><ShieldCheck className="h-7 w-7 text-emerald-600" /></div>
                  <div className="mt-8 overflow-hidden rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-3">
                    <img src={selectedCard.image} alt={`${selectedCard.name} sample`} className="h-auto w-full rounded-xl object-cover" />
                  </div>
                  <p className="mt-4 text-xs text-slate-500">Simulated scanned copy. Production must show source, last verified date, consent, and official validation path.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      <Card className="bg-card/95">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Smartphone className="h-5 w-5 text-primary" /> Payment options</CardTitle>
          <CardDescription>Common Indian UPI apps shown prominently inside the wallet.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          {paymentApps.map((app) => (
            <div key={app.name} className="flex items-center gap-3 rounded-2xl border bg-muted/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted/50">
              {app.logo}
              <span>{app.name}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-card/95">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><BadgeIndianRupee className="h-5 w-5 text-primary" /> Financial readiness links</CardTitle>
          <CardDescription>Trusted public portals for EPF, bank verification, DigiLocker, income tax, and investment records.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {[
            { label: "DigiLocker", url: "https://www.digilocker.gov.in/" },
            { label: "EPF Member Portal", url: "https://unifiedportal-mem.epfindia.gov.in/" },
            { label: "Income Tax", url: "https://www.incometax.gov.in/" },
            { label: "DigiYatra", url: "https://www.digiyatra.com/" },
            { label: "MCA Company Search", url: "https://www.mca.gov.in/" },
          ].map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer noopener">
              <Badge variant="outline" className="cursor-pointer rounded-full border-primary/30 px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary">{link.label}</Badge>
            </a>
          ))}
        </CardContent>
      </Card>

      <Card className="border-dashed border-muted bg-muted/20 opacity-70">
        <CardHeader className="py-4">
          <CardTitle className="flex items-center gap-2 text-sm text-muted-foreground">
            <LockKeyhole className="h-4 w-4 text-muted-foreground" /> Assets and liabilities (Locked)
          </CardTitle>
          <CardDescription className="text-xs">
            This section is locked and not available for now. It will be available in future updates.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

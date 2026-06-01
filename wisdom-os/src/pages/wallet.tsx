import React from "react";
import { AlertTriangle, ArrowRight, BadgeIndianRupee, Building2, CreditCard, Eye, EyeOff, Landmark, LockKeyhole, Plane, ShieldCheck, Smartphone, WalletCards, X } from "lucide-react";
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

const paymentApps = ["PhonePe", "Google Pay", "Paytm", "BHIM UPI"];

const assets = [
  { title: "Liquid cash and bank balances", value: "Private", detail: "Savings accounts, cash reserve, emergency fund, and UPI-linked accounts." },
  { title: "House and land", value: "Documents indexed", detail: "Sale deed, tax receipts, utility proofs, ownership chain, and transfer notes." },
  { title: "Mutual funds and bonds", value: "Portfolio copy", detail: "Folio list, nominee details, statements, and redemption process." },
  { title: "Other assets", value: "Certificates stored", detail: "Vehicle RC, electronics invoices, insurance, deposits, permits, and professional certificates." },
];

const liabilities = [
  { title: "Home or personal loans", value: "Repayment file", detail: "Outstanding principal, lender contacts, NOC process, and closure checklist." },
  { title: "Credit cards and subscriptions", value: "Mapped", detail: "Payment dates, autopay notes, cancellation path, and dispute instructions." },
  { title: "Taxes and legal obligations", value: "Review required", detail: "Filing records, advisor contacts, notices, and renewal dates." },
];

export function Wallet() {
  const [open, setOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(walletCards[0]);
  const [showAssets, setShowAssets] = React.useState(false);
  const [confirmAssets, setConfirmAssets] = React.useState(false);

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
              <div className="space-y-5">
                <div className="rounded-[2rem] border border-sidebar-border bg-white p-5 text-slate-900 shadow-xl">
                  <div className="flex items-start justify-between gap-4"><div><div className="text-xs uppercase tracking-[0.25em] text-slate-400">Digitally valid preview</div><h3 className="mt-2 text-3xl font-bold">{selectedCard.name}</h3><p className="mt-1 text-sm text-slate-500">{selectedCard.type}</p></div><ShieldCheck className="h-7 w-7 text-emerald-600" /></div>
                  <div className="mt-8 overflow-hidden rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-3">
                    <img src={selectedCard.image} alt={`${selectedCard.name} sample`} className="h-auto w-full rounded-xl object-cover" />
                  </div>
                  <p className="mt-4 text-xs text-slate-500">Simulated scanned copy. Production must show source, last verified date, consent, and official validation path.</p>
                </div>
                <Card className="bg-sidebar-accent/60 text-sidebar-foreground border-sidebar-border">
                  <CardHeader><CardTitle className="flex items-center gap-2"><Smartphone className="h-5 w-5 text-primary" /> Payment options</CardTitle><CardDescription className="text-sidebar-foreground/60">Common Indian UPI apps shown prominently inside the wallet.</CardDescription></CardHeader>
                  <CardContent className="flex flex-wrap gap-2">{paymentApps.map((app) => <Badge key={app} variant="outline" className="border-sidebar-border bg-sidebar text-sidebar-foreground">{app}</Badge>)}</CardContent>
                </Card>
                {!showAssets && <Button variant="outline" size="sm" className="rounded-full border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent" onClick={() => setConfirmAssets(true)}><Eye className="h-4 w-4" /> Rarely used: assets and liabilities</Button>}
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {confirmAssets && !showAssets && (
        <Card className="border-amber-300 bg-amber-50">
          <CardHeader><CardTitle>Open deeper private records?</CardTitle><CardDescription>This view is intentionally frictional because assets, liabilities, permits, certificates, and financial documents are rarely needed and highly sensitive.</CardDescription></CardHeader>
          <CardContent className="flex flex-wrap gap-3"><Button className="rounded-2xl" onClick={() => { setShowAssets(true); setConfirmAssets(false); }}>Yes, open detailed view</Button><Button variant="outline" className="rounded-2xl" onClick={() => setConfirmAssets(false)}>Keep hidden</Button></CardContent>
        </Card>
      )}

      {showAssets && (
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center"><Badge variant="secondary">Detailed private ownership records</Badge><h2 className="mt-3 text-3xl font-bold">Assets and liabilities</h2><p className="mt-2 text-muted-foreground">Total values stay private; categories and document descriptions are shown for planning.</p></div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-card/95"><CardHeader><CardTitle className="flex items-center gap-2"><Building2 className="h-5 w-5 text-primary" /> Assets</CardTitle></CardHeader><CardContent className="space-y-3">{assets.map((item) => <div key={item.title} className="rounded-2xl border bg-muted/30 p-4"><div className="flex items-center justify-between gap-3"><h3 className="font-semibold">{item.title}</h3><Badge variant="outline">{item.value}</Badge></div><p className="mt-2 text-sm text-muted-foreground">{item.detail}</p></div>)}</CardContent></Card>
            <Card className="bg-card/95"><CardHeader><CardTitle className="flex items-center gap-2"><Landmark className="h-5 w-5 text-primary" /> Liabilities</CardTitle></CardHeader><CardContent className="space-y-3">{liabilities.map((item) => <div key={item.title} className="rounded-2xl border bg-muted/30 p-4"><div className="flex items-center justify-between gap-3"><h3 className="font-semibold">{item.title}</h3><Badge variant="outline">{item.value}</Badge></div><p className="mt-2 text-sm text-muted-foreground">{item.detail}</p></div>)}</CardContent></Card>
          </div>
          <Card className="bg-card/95"><CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-primary" /> Travel, permits, and certificates</CardTitle><CardDescription>Passport, visas, flight/train/bus references, international support links, professional certificates, and ownership transfer instructions belong here.</CardDescription></CardHeader></Card>
          <Button variant="outline" className="rounded-2xl" onClick={() => setShowAssets(false)}><EyeOff className="h-4 w-4" /> Hide private records</Button>
        </section>
      )}

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
    </div>
  );
}

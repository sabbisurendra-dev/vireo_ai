import React from "react";
import { AlertTriangle, ArrowRight, BadgeIndianRupee, CreditCard, EyeOff, LockKeyhole, ShieldCheck, Smartphone, WalletCards, X } from "lucide-react";
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
    url: "https://www.phonepe.com/",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="white" stroke="#e2e8f0" strokeWidth="0.5" />
        <circle cx="12" cy="12" r="8" fill="#5f259f" />
        <text x="12" y="15" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">पे</text>
      </svg>
    )
  },
  {
    name: "Google Pay",
    url: "https://pay.google.com/",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="white" stroke="#e2e8f0" strokeWidth="0.5" />
        <g transform="translate(4, 4) scale(0.667)">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </g>
      </svg>
    )
  },
  {
    name: "Paytm",
    url: "https://paytm.com/",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="white" stroke="#e2e8f0" strokeWidth="0.5" />
        <circle cx="12" cy="12" r="8" fill="#002970" />
        <g transform="translate(6.5, 6.5) scale(0.45)">
          <path d="M15.85 8.167a.204.204 0 0 0-.04.004c-.68.19-.543 1.148-1.781 1.23h-.12a.23.23 0 0 0-.052.005h-.001a.24.24 0 0 0-.184.235v1.09c0 .134.106.241.237.241h.645v4.623c0 .132.104.238.233.238h1.058a.236.236 0 0 0 .233-.238v-4.623h.6c.13 0 .236-.107.236-.241v-1.09a.239.239 0 0 0-.236-.24h-.612V8.386a.218.218 0 0 0-.216-.22zm4.225 1.17c-.398 0-.762.15-1.042.395v-.124a.238.238 0 0 0-.234-.224h-1.07a.24.24 0 0 0-.236.242v5.92a.24.24 0 0 0 .236.242h1.07c.12 0 .217-.091.233-.209v-4.25a.393.393 0 0 1 .371-.408h.196a.41.41 0 0 1 .226.09.405.405 0 0 1 .145.319v4.074l.004.155a.24.24 0 0 0 .237.241h1.07a.239.239 0 0 0 .235-.23l-.001-4.246c0-.14.062-.266.174-.34a.419.419 0 0 1 .196-.068h.198c.23.02.37.2.37.408.005 1.396.004 2.8.004 4.224a.24.24 0 0 0 .237.241h1.07c.13 0 .236-.108.236-.241v-4.543c0-.31-.034-.442-.08-.577a1.601 1.601 0 0 0-1.51-1.09h-.015a1.58 1.58 0 0 0-1.152.5c-.291-.308-.7-.5-1.153-.5zM.232 9.4A.234.234 0 0 0 0 9.636v5.924c0 .132.096.238.216.241h1.09c.13 0 .237-.107.237-.24l.004-1.658H2.57c.857 0 1.453-.605 1.453-1.481v-1.538c0-.877-.596-1.484-1.453-1.484H.232zm9.032 0a.239.239 0 0 0-.237.241v2.47c0 .94.657 1.608 1.579 1.608h.675s.016 0 .037.004a.253.253 0 0 1 .222.253c0 .13-.096.235-.219.251l-.018.004-.303.006H9.739a.239.239 0 0 0-.236.24v1.09a.24.24 0 0 0 .236.242h1.75c.92 0 1.577-.669 1.577-1.608v-4.56a.239.239 0 0 0-.236-.24h-1.07a.239.239 0 0 0-.236.24c-.005.787 0 1.525 0 2.255a.253.253 0 0 1-.25.25h-.449a.253.253 0 0 1-.25-.255c.005-.754-.005-1.5-.005-2.25a.239.239 0 0 0-.236-.24zm-4.004.006a.232.232 0 0 0-.238.226v1.023c0 .132.113.24.252.24h1.413c.112.017.2.1.213.23v.14c-.013.124-.1.214-.207.224h-.7c-.93 0-1.594.63-1.594 1.515v1.269c0 .88.57 1.506 1.495 1.506h1.94c.348 0 .63-.27.63-.6v-4.136c0-1.004-.508-1.637-1.72-1.637zm-3.713 1.572h.678c.139 0 .25.115.25.256v.836a.253.253 0 0 1-.25.256h-.1c-.192.002-.386 0-.578 0zm4.67 1.977h.445c.139 0 .252.108.252.24v.932a.23.23 0 0 1-.014.076.25.25 0 0 1-.238.164h-.445a.247.247 0 0 1-.252-.24v-.933c0-.132.113-.239.252-.239Z" fill="white" />
        </g>
      </svg>
    )
  },
  {
    name: "BHIM UPI",
    url: "https://www.bhimupi.org.in/",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="white" stroke="#e2e8f0" strokeWidth="0.5" />
        <path d="M 7,17 L 11.5,7 L 11.5,17 Z" fill="#f47a20" />
        <path d="M 12.5,17 L 17,7 L 12.5,7 Z" fill="#097a3e" />
      </svg>
    )
  }
];

export function Wallet() {
  const [open, setOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(walletCards[0]);
  const openedSectionRef = React.useRef<HTMLElement>(null);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      openedSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <section className="text-center">
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">Personal Wallet</h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground md:text-lg">A private and secure replacement for the physical cards</p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className={`wallet-scene ${open ? "wallet-scene-open" : ""}`}>
          <button onClick={handleOpen} className="wallet-leather wallet-cover group relative min-h-[430px] w-full overflow-hidden rounded-[2rem] p-8 text-white shadow-2xl transition-all duration-700 hover:-translate-y-1">
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
        <section ref={openedSectionRef} className="scroll-mt-6 animate-in fade-in slide-in-from-bottom-6 duration-500">
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
            <a key={app.name} href={app.url} target="_blank" rel="noreferrer noopener" className="flex items-center gap-3 rounded-2xl border bg-muted/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted/50">
              {app.logo}
              <span>{app.name}</span>
            </a>
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

import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";

import NotFound from "@/pages/not-found";
import { CommandCenter } from "@/pages/command-center";
import { PRDWriter } from "@/pages/prd-writer";
import { CourseLibrary } from "@/pages/course-library";
import { MindMaps } from "@/pages/mind-maps";
import { Wallet } from "@/pages/wallet";
import { LaunchBusiness } from "@/pages/launch-business";
import { Roadmap } from "@/pages/roadmap";
import { AILab } from "@/pages/ai-lab";
import { Legal } from "@/pages/legal";
import { Health } from "@/pages/health";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={CommandCenter} />
        <Route path="/prd" component={PRDWriter} />
        <Route path="/courses" component={CourseLibrary} />
        <Route path="/mind-maps" component={MindMaps} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/business" component={LaunchBusiness} />
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/ai-lab" component={AILab} />
        <Route path="/legal" component={Legal} />
        <Route path="/health" component={Health} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

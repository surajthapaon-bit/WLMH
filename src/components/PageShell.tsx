import type { ReactNode } from "react";
import { GrainOverlay } from "@/components/GrainOverlay";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";
import { cn } from "@/lib/cn";

type PageShellProps = {
  children: ReactNode;
  tone?: "default" | "home";
  footer?: boolean;
  mainClassName?: string;
};

export function PageShell({
  children,
  tone = "default",
  footer = true,
  mainClassName,
}: PageShellProps) {
  return (
    <div className="relative flex min-h-dvh flex-col bg-night text-paper">
      <SkipLink />
      <GrainOverlay />
      <SiteHeader tone={tone} />
      <main id="main" className={cn("relative z-10 flex-1", mainClassName)}>
        {children}
      </main>
      {footer ? <SiteFooter /> : null}
    </div>
  );
}

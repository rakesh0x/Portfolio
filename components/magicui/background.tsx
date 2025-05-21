"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "../../components/magicui/dot-pattern";

export function DotPatternWithGlowEffectDemo({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-white opacity-100 z-10">
      <DotPattern
        glow={true}
        className={cn(
          "z-10",
          "fixed",
          "opacity-100", 
          "[mask-image:radial-gradient(circle at center, white 40%, transparent 100%)]"
        )}
      />

      {children}
    </div>
  );
}

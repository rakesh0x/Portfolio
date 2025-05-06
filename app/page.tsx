"use client"

import { Children } from "react";
import { DotPatternWithGlowEffectDemo } from "@/components/magicui/background";
import { DockDemo } from "@/components/magicui/dockcomp";

export default function Home() {
  return (
    <div>
      <DotPatternWithGlowEffectDemo>
        <DockDemo/>
      </DotPatternWithGlowEffectDemo>
    </div>
  )
}
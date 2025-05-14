"use client"

import { Children } from "react";
import { DotPatternWithGlowEffectDemo } from "@/components/magicui/background";
import { DockDemo } from "@/components/magicui/dockcomp";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <DotPatternWithGlowEffectDemo>
        <TypingAnimation className="ml-60 mt-20 flex-1">
          Rakesh Jha
        </TypingAnimation>
        <Image src="/pfp.jpeg" width={250} height={250} className="ml-160 flex-col rounded-2xl" alt="profile-image"/>
        <DockDemo />
      </DotPatternWithGlowEffectDemo>
    </div>
  )
}
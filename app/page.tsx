"use client"

import { Children } from "react";
import { DotPatternWithGlowEffectDemo } from "@/components/magicui/background";
import { DockDemo } from "@/components/magicui/dockcomp";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextAnimate } from "@/components/magicui/text-animate";
import { useScramble } from "use-scramble";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("full stack developer");
  const { ref } = useScramble({
    text
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prev => 
        prev === "full stack developer" ? "Freelancer" : 
        prev === "Freelancer" ? "ML Researcher" : 
        "Web3"
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <DotPatternWithGlowEffectDemo>
        <TypingAnimation className="ml-60 mt-20 flex-1">
          Rakesh Jha
        </TypingAnimation>
        <div ref={ref} className="ml-60" />

        <div className="flex justify-center">
          <div className="bg-white/20 backdrop-blur-lg p-2 rounded-full ml-160">
            <div className="bg-white/10 p-1 rounded-full">
              <Image
                src="/pfp.jpeg"
                width={250}
                height={250}
                className="rounded-full border-4 border-white/30"
                alt="Profile Image"
              />
            </div>
          </div>
        </div>

        <DockDemo />
      </DotPatternWithGlowEffectDemo>
    </div>
  )
}
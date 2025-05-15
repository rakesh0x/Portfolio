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
  const [text, setText] = useState("Full Stack Developer");
  const { ref, replay } = useScramble({
    text
  });

  useEffect(() => {
    const title = ["Full Stack Developer", "Freelancer", "ML Researcher", "Web3"]
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % title.length;
      setText(title[index])  
    }, 3000);

    return () => clearInterval(interval)
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <DotPatternWithGlowEffectDemo>
        <div className="container mx-auto px-4 py-12 flex flex-col items-center">
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full">
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <TypingAnimation className="text-4xl md:text-5xl font-bold mb-4">
                Rakesh Jha
              </TypingAnimation>
              
              <div 
                ref={ref} 
                className="text-xl md:text-2xl text-gray-300 mb-8 font-mono"
                onFocus={replay}
              />
              
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                  About me!
                </h2>
                <p className="text-gray-200 leading-relaxed">
                  Hi there! I'm Rakesh, a passionate Full-Stack Developer who loves building user-friendly digital experiences. When not coding, I'm probably on Twitter or watching tech videos. I'm obsessed with learning how things work—whether it's a new framework or dev tool. Always open to connecting with like-minded people to ship cool projects or just share some laughs!
                </p>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="bg-white/20 backdrop-blur-lg p-2 rounded-full">
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
          </div>
          
          {/* Dock */}
          <div className="mt-16 w-full">
            <DockDemo />
          </div>
        </div>
      </DotPatternWithGlowEffectDemo>
    </div>
  )
}
"use client"

import { useState, useEffect, useMemo } from "react";
import { useScramble } from "use-scramble";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Download } from "lucide-react";
import { cn } from "../../lib/utils"
import { Marquee } from "@/components/magicui/marquee";
import { DotPatternWithGlowEffectDemo } from "@/components/magicui/background";
import { DockDemo } from "@/components/magicui/dockcomp";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function Home() {
  const [text, setText] = useState("Full Stack Developer");
  const { ref, replay } = useScramble({
    text,
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 0,
  });

  useEffect(() => {
    const titles = ["Full Stack Developer", "Freelancer", "ML Researcher", "Web3 Developer"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % titles.length;
      setText(titles[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const techstack = [
    // Frontend
    { name: "Next.js", img: "/nextjs-icon.svg" },
    { name: "React.js", img: "/react.svg" },
    { name: "Typescript", img: "/typescript-icon.svg" },
    { name: "Javascript", img: "/javascript.svg" },
    { name: "Bootstrap", img: "/bootstrap.svg" },
    { name: "CSS", img: "/css-3.svg" },
    { name: "HTML", img: "/html-5.svg" },
    { name: "Tailwind.css", img: "/tailwindcss-icon.svg" },
    
    // Backend
    { name: "Node.js", img: "/nodejs.svg" },
    { name: "Docker", img: "/docker-icon.svg" },
    { name: "Supabase", img: "/supabase-icon.svg" },
    { name: "Python", img: "/python.svg" },
    { name: "MongoDB", img: "/mongodb-icon.svg" },
    { name: "PostgreSQL", img: "/postgresql.svg" },
    { name: "Prisma", img: "/prisma.svg" },
    { name: "Git", img: "/git-icon.svg" },
  ];

  const [firstRow, secondRow] = useMemo(() => {
    const half = Math.ceil(techstack.length / 2);
    return [techstack.slice(0, half), techstack.slice(half)];
  }, []);

  const ReviewCard = ({
    img,
    name,
  }: {
    img: string;
    name: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-40 h-24 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2 flex flex-col items-center justify-center",
          "border-blue-500/30 bg-blue-900/10 backdrop-blur-sm hover:bg-blue-800/20",
          "dark:border-blue-400/20 dark:bg-blue-950/30 dark:hover:bg-blue-900/30",
        )}
      >
        <div className="flex flex-col items-center gap-2">
          <img 
            src={img} 
            alt={name} 
            className="w-12 h-12 object-contain" 
            loading="lazy"
          />
          <figcaption className="text-sm font-medium text-blue-100">
            {name}
          </figcaption>
        </div>
      </figure>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black">
      <DotPatternWithGlowEffectDemo>
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-6xl">
            {/* Text Content */}
            <motion.div 
              className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Rakesh Jha
              </h1>
              
              <div 
                ref={ref} 
                className="text-xl md:text-3xl text-purple-300 mb-6 font-mono h-10"
                onFocus={replay}
              />
              
              <div className="max-w-2xl mb-8">
                <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">
                  Hi there! I'm Rakesh, a passionate Full-Stack Developer crafting exceptional digital experiences 
                  that blend intuitive design with powerful functionality.
                </p>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  I'm obsessed with continuous learning—whether it's a new framework or development tool. 
                  Always open to collaborating on innovative projects!
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-2">
                <Link 
                  href="/contact" 
                  className={buttonVariants({ 
                    variant: "default",
                    size: "lg",
                    className: "bg-purple-600 hover:bg-purple-700 text-white font-medium px-8"
                  })}
                >
                  Hire Me
                </Link>
                <Link 
                  href="/portfolio" 
                  className={buttonVariants({ 
                    variant: "outline",
                    size: "lg",
                    className: "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6"
                  })}
                >
                  View My Work
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-5 mt-8">
                <Link 
                  href="https://github.com/rakesh0x" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </Link>
                <Link 
                  href="https://twitter.com/immortalcoder_" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                </Link>
                <Link 
                  href="https://linkedin.com/" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </Link>
                <Link 
                  href="mailto:contact@example.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </Link>
              </div>
            </motion.div>
            
            {/* Profile Image */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 blur-lg"></div>
                <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg p-1.5 rounded-full">
                  <div className="bg-black/40 p-1 rounded-full overflow-hidden">
                    <Image
                      src="/pfp.jpeg"
                      width={280}
                      height={280}
                      className="rounded-full"
                      alt="Rakesh Jha"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack Marquee */}
          <div className="w-full my-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">My Tech Stack</h2>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:20s] bg-transparent py-4">
                {firstRow.map((tech) => (
                  <ReviewCard key={tech.name} img={tech.img} name={tech.name} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s] bg-transparent py-4">
                {secondRow.map((tech) => (
                  <ReviewCard key={tech.name} img={tech.img} name={tech.name} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-900/0 to-gray-900/90"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-900/0 to-gray-900/90"></div>
            </div>
          </div>

          <DockDemo />
        </div>
      </DotPatternWithGlowEffectDemo>
    </div>
  );
}
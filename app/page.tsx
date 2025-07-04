"use client";

import { useState, useEffect, useMemo, useRef, memo } from "react";
import { useScramble } from "use-scramble";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { cn }  from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee";
import { DotPatternWithGlowEffectDemo } from "@/components/magicui/background";
import Projects from "@/components/projects/projects";
import ContactForm from "@/components/magicui/contact/transporter/transporter";
import { FloatingDockDemo } from "@/components/magicui/floatingdock";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Footer } from "@/components/ui/footer";
import GitHubCalendar from 'react-github-calendar';

export default function Home() {
  const [text, setText] = useState("Full Stack Developer");
  const { ref, replay } = useScramble({
    text,
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 2,
    seed: 0
  });

  const indexRef = useRef(0);

  useEffect(() => {
    const titles = ["Full Stack Developer", "Freelancer", "ML Researcher", "Web3 Developer"];
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % titles.length;
      setText(titles[indexRef.current]);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const techstack = [
    { name: "Next.js", img: "/nextjs-icon.svg" },
    { name: "React.js", img: "/react.svg" },
    { name: "Typescript", img: "/typescript-icon.svg" },
    { name: "Javascript", img: "/javascript.svg" },
    { name: "Bootstrap", img: "/bootstrap.svg" },
    { name: "CSS", img: "/css-3.svg" },
    { name: "HTML", img: "/html-5.svg" },
    { name: "Tailwind.css", img: "/tailwindcss-icon.svg" },
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

  const ReviewCard = memo(({ img, name }: { img: string; name: string }) => (
    <figure
      className={cn(
        "relative w-20 h-24 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2 flex flex-col items-center justify-center",
        "border-blue-500/30 bg-blue-900/10 hover:bg-blue-800/20 transition-colors duration-300"
      )}
    >
      <img src={img} alt={name} className="w-12 h-12 object-contain" loading="lazy" />
      <figcaption className="text-sm font-medium text-blue-100">{name}</figcaption>
    </figure>
  ));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black">
      <DotPatternWithGlowEffectDemo>
        <ScrollProgress/>
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-6xl">
            <div id="Home" className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-all">
              <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Rakesh Jha
              </h1>

              <div
                ref={ref}
                className="text-xl md:text-3xl text-purple-300 mb-6 font-mono h-10"
                onFocus={replay}
              />

              <div className="max-w-2xl mb-8 text-gray-300 text-base md:text-lg leading-relaxed space-y-4 font-semibold">
                <p>
                  Hi there! I'm Rakesh, a passionate Full-Stack Developer dedicated to crafting exceptional digital experiences that combine intuitive design with robust functionality.
                </p>
                <p>
                  I'm deeply committed to continuous learning—whether it's exploring a new framework or mastering a development tool. I'm always open to collaborating on innovative projects!
                </p>
                <p>
                  Besides coding, you'll often find me on X (formerly Twitter) or watching insightful YouTube videos.
                </p>

              </div>

              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  href="https://drive.google.com/file/d/17oGjCvQu_wPrJTJdYfqz7uSpRhFLIw5b/view?usp=sharing"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "bg-purple-600 hover:bg-purple-700 text-white font-medium px-8"
                  })}
                >
                  Hire Me
                </Link>
                <Link
                  href="https://github.com/rakesh0x"
                  className={buttonVariants({
                    variant: "secondary",
                    size: "lg",
                    className: "border-gray-600 hover:bg-gray-800 hover:bg-white-300"
                  })}
                >
                  View My Work
                </Link>
              </div>

            </div>
            <div className="flex-shrink-0 relative">
              <div className="rounded-full bg-purple-600/20 p-1">
                <Image
                  src="/pfp.jpeg"
                  width={180}
                  height={180}
                  className="rounded-full"
                  alt="Rakesh Jha"
                />
              </div>
            </div>
          </div>

          <div className="w-full my-8 gap-2 mt-20">
            <h2 className="text-xl font-bold text-center mb-4 text-white">My Tech Stack</h2>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:40s] bg-transparent py-2">
                {firstRow.map((tech) => (
                  <ReviewCard key={tech.name} img={tech.img} name={tech.name}/>
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:40s] bg-transparent py-2 mt-5">
                {secondRow.map((tech) => (
                  <ReviewCard key={tech.name} img={tech.img} name={tech.name} />
                ))}
              </Marquee>  
            </div>
          </div>
        </div>

        <div className="fixed top-1/2 z-50 left-1/3 z-index mt-8">
          <FloatingDockDemo/>
        </div>

        {/* Here the Github calandar will render */}
        <div className="w-full flex flex-col items-center justify-center mt-20 px-4 overflow-x-hidden">
          <h2 className="text-xl font-bold mb-6 text-white text-center">My Github Contributions</h2>
          <div className="w-full max-w-full ml-112">
            
            <GitHubCalendar
              username="rakesh0x"
              blockSize={15}
              blockMargin={10}
              colorScheme="dark"
              fontSize={16}
              hideColorLegend={false}
              showWeekdayLabels={true}
              theme={{
                light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
                dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353']
              }}
              labels={{
                totalCount: '{{count}} contributions in the last year',
              }}
            />
          </div>
        </div>
        <br/>
        <br/>

        {/* project component*/}
        <Projects/>
        <br/><br/>
        <br/><br/>
        {/* contact form components */}
        <ContactForm/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        {/* footer components */}
        <Footer/>
      </DotPatternWithGlowEffectDemo>
    </div>
    
  );
}
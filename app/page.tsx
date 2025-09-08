"use client";

import { useState, useEffect, useMemo, useRef, memo } from "react";
import { useScramble } from "use-scramble";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Projects from "@/components/projects/projects";
import ContactForm from "@/components/magicui/contact/transporter/transporter";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Footer } from "@/components/ui/footer";
import GitHubCalendar from "react-github-calendar";

export default function Home() {
  const [text, setText] = useState("Full Stack Developer");
  const { ref, replay } = useScramble({
    text,
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 2,
    seed: 0,
  });

  const indexRef = useRef(0);

  useEffect(() => {
    const titles = [
      "Full Stack Developer",
      "Freelancer",
      "ML Researcher",
      "Web3 Developer",
    ];
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
        "mr-2 flex w-max items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-2 text-[15px] text-neutral-50 shadow-sm"
      )}
    >
      <img
        src={img}
        alt={name}
        className="w-5 h-5 object-contain"
        loading="lazy"
      />
      <figcaption className="font-bold">{name}</figcaption>
    </figure>
  ));

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#08090a" }}
    >
      <ScrollProgress />
      <div className="container mx-auto px-4 py-12 sm:py-16 flex flex-col items-center max-w-5xl">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          {/* Left Side */}
          <div
            id="Home"
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-all"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Rakesh Jha
            </h1>

            <div
              ref={ref}
              className="text-lg sm:text-xl md:text-3xl text-purple-300 mb-6 font-mono h-10"
              onFocus={replay}
            />

            <div className="max-w-2xl mb-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 font-semibold">
              <p>
                Hi, I’m Rakesh from New Delhi, India — a passionate full-stack
                developer with a deep interest in modern web frameworks and
                cutting-edge technologies. I love to code and spend most of my
                time building, experimenting, or occasionally shitposting on X
                (where I’m super active). I'm also a strong advocate for
                open-source and actively contribute to projects that help push
                the community forward. Whether it's freelance work,
                collaborations, or something exciting — I’m open and ready to
                connect!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2">
              <Link
                href="https://drive.google.com/file/d/1jrm7lnsha4JBRcBm7T4LtPKh_WT113y3/view"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 sm:px-8 w-full sm:w-auto",
                })}
              >
                Hire Me
              </Link>
              <Link
                href="https://github.com/rakesh0x"
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className:
                    "border-gray-600 hover:bg-gray-800 hover:bg-white-300 w-full sm:w-auto",
                })}
              >
                View My Work
              </Link>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="rounded-full bg-purple-600/20 p-1">
              <Image
                src="/pfp.jpeg"
                width={160}
                height={160}
                className="rounded-full object-cover"
                alt="Rakesh Jha"
              />
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="w-full my-8 sm:mt-20">
          <h2 className="text-lg sm:text-xl font-bold text-center mb-4 text-white">
            My Tech Stack
          </h2>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s] bg-transparent py-2">
              {firstRow.map((tech) => (
                <ReviewCard key={tech.name} img={tech.img} name={tech.name} />
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:40s] bg-transparent py-2 mt-5"
            >
              {secondRow.map((tech) => (
                <ReviewCard key={tech.name} img={tech.img} name={tech.name} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>


      {/* GitHub Calendar */}
      <div className="w-full flex flex-col items-center justify-center mt-12 sm:mt-20 px-3 sm:px-4 overflow-x-hidden">
        <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white text-center">
          My Github Contributions
        </h2>
        <div className="w-full max-w-full overflow-x-auto">
          <GitHubCalendar
            username="rakesh0x"
            blockSize={10}
            blockMargin={4}
            colorScheme="dark"
            fontSize={14}
            hideColorLegend={false}
            showWeekdayLabels={true}
            theme={{
              light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
              dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        </div>
      </div>

      {/* Projects */}
      <Projects />

      {/* Contact Form */}
      <div className="py-12 sm:py-16 px-4">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

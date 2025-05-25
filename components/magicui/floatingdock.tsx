"use client"

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconAddressBook,
  IconBrandLinkedin,
  IconFiles
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "#",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Contact",
      icon: (
        <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300 " />
      ),
      href: "#",  
    },
    {
      title: "Blogs",
      icon: (
        <IconFiles className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "https://dev.to/immortalcoder_",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/rakesh-jha-0269892b8/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/immortalcoder_",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/rakesh0x",
    },
  ];

    return (
      <div className="flex items-center justify-center h-[35rem] w-full ">
        <FloatingDock
          mobileClassName="translate-y-20" 
          items={links}
        />
      </div>
    );
}

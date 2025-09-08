"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import { BorderBeam } from "../magicui/border-beam";
import { buttonVariants } from "../ui/button";
import { IconPlus } from "@tabler/icons-react";
import { Button } from "../ui/button";

type Project = {
    name: string;
    description: string;
    image: string;
    url: string;
    github: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            "name": "QuickLearn.ai",
            "description": "A 24/7 AI powered tutor for students to help with homework and studying",
            "image": "/quicklearn.ai.png",
            "url": "https://quicklearn-ai.vercel.app/",
            "github": "https://github.com/rakesh0x/quicklearn-ai"
        },
        {
            "name": "BingeCare",
            "description": "A real-time chat application with modern UI and seamless messaging experience",
            "image": "/bingecare.png",
            "url": "https://github.com/rakesh0x/bingecare",
            "github": "https://github.com/rakesh0x/bingecare"
        },
        {
            "name": "100xlearn",
            "description": "An interactive quiz application designed to help students learn and practice concepts",
            "image": "/100xlearn.png",
            "url": "https://100xlearn.vercel.app/",
            "github": "https://github.com/rakesh0x/100xlearn"
        },
        {
            "name": "Trifosa",
            "description": "A beautifully designed ice-cream shop website with product showcase and ordering system",
            "image": "/trifosa.png",
            "url": "https://trifosa-icecream-parlour.vercel.app/",
            "github": "https://github.com/rakesh0x/trifosa"
        }
    ];
    
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    
    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
         <section id="Projects">
            <div className="min-h-screen z-30 mt-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-white">
                            My Projects
                        </h2>
                        <p className="text-gray-300 font-semibold text-lg max-w-2xl mx-auto">
                            These the projects that i have build over the months. explore more on my github
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center"
                    >
                        {projects.map((project, index) => (
                            <motion.div 
                                key={index}
                                variants={item}
                                className="w-full max-w-md z-40 flex flex-col item-center space-y-4 group relative overflow-hidden border border-gray-700/50 bg-gray-800/30   hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500"
                            >
                                <BorderBeam size={300} duration={8}/> 
                                <div className="absolute -right-12 -top-12 z-50">
                                    <div className="bg-purple-600/20 w-24 h-24 rounded-full"></div>
                                </div>
                                <div className="absolute -left-8 -bottom-8 z-10">
                                    <div className="bg-pink-600/20 w-24 h-24 rounded-full"></div>
                                </div>
                                
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        width={500} height={450}
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <BorderBeam size={300} duration={8}/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                                </div>
                                
                                <div className="p-6 relative z-20">
                                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                                        <Code size={20} className="text-purple-400" />
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-300 mb-6 text-sm">{project.description}</p>
                                    
                                    <div className="flex gap-3">
                                        <Link
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 flex-1 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2.5 rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </Link>
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 flex-1 text-sm font-medium text-white border border-gray-600 hover:border-gray-500 hover:bg-gray-700/50 px-4 py-2.5 rounded-lg transition-all duration-300"
                                        >
                                            <Github size={16} />
                                            Code
                                        </Link>
                                    </div>
                                </div>
                            </motion.div> 
                        ))}
                    </motion.div>
                    <Link href="https://github.com/rakesh0x" target="_blank" rel="noopener noreferrer">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-sm cursor-pointer mx-auto block mt-10"
                        >
                            Load More
                            <IconPlus className="w-5 h-5 mr-2 text-neutral-500" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}   
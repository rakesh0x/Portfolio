"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Bookmark, Award, Code } from "lucide-react";

type Project = {
    name: string;
    description: string;
    image: string;
    url: string;
    github: string;
    tags: string[];
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    
    const projects: Project[] = [
        {
            "name": "QuickLearn.ai",
            "description": "A 24/7 AI powered tutor for students to help with homework and studying",
            "image": "/quicklearn.ai.png",
            "url": "https://quicklearn-ai.vercel.app/",
            "github": "https://github.com/rakesh0x/quicklearn-ai",
            "tags": ["AI", "Education", "Frontend"]
        },
        {
            "name": "100xlearn",
            "description": "An interactive quiz application designed to help students learn and practice concepts",
            "image": "/100xlearn.png",
            "url": "https://100xlearn.vercel.app/",
            "github": "https://github.com/rakesh0x/100xlearn",
            "tags": ["Education", "Frontend", "Quiz"]
        },
        {
            "name": "BingeCare",
            "description": "A real-time chat application with modern UI and seamless messaging experience",
            "image": "/bingecare.png",
            "url": "https://github.com/rakesh0x/bingecare",
            "github": "https://github.com/rakesh0x/bingecare",
            "tags": ["Communication", "Frontend", "Backend"]
        },
        {
            "name": "Trifosa",
            "description": "A beautifully designed ice-cream shop website with product showcase and ordering system",
            "image": "/trifosa.png",
            "url": "https://trifosa-icecream-parlour.vercel.app/",
            "github": "https://github.com/rakesh0x/trifosa",
            "tags": ["E-commerce", "Frontend", "Design"]
        }
    ];
    
    const filters = ["all", "AI", "Education", "Frontend", "Backend", "E-commerce"];
    
    useEffect(() => {
        if (activeFilter === "all") {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => 
                project.tags.includes(activeFilter)
            ));
        }
    }, [activeFilter]);
    
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
        <div className="min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-6 text-white">
                        My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Projects</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Explore my portfolio of web applications built with modern technologies and creative solutions.
                    </p>
                </motion.div>
                
                <div className="flex flex-wrap justify-center mb-12 gap-3">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeFilter === filter
                                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                    ))}
                </div>
                
                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-md hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500"
                        >
                            <div className="absolute -right-12 -top-12 z-10">
                                <div className="bg-purple-600/20 w-24 h-24 rounded-full blur-2xl"></div>
                            </div>
                            <div className="absolute -left-8 -bottom-8 z-10">
                                <div className="bg-pink-600/20 w-24 h-24 rounded-full blur-2xl"></div>
                            </div>
                            
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                                
                                <div className="absolute top-4 right-4 flex gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-gray-900/70 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-gray-300 border border-gray-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="p-6 relative z-20">
                                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                                    {project.name.includes("AI") && <Code size={20} className="text-purple-400" />}
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
                
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-400 text-lg">No projects found with the selected filter.</p>
                        <button 
                            onClick={() => setActiveFilter("all")}
                            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            View All Projects
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}